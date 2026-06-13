import { useState } from "react";
import { stockApi } from "../api/api";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";

export default function StockAnalysis() {
  const [company, setCompany] = useState("");
  const [ticker, setTicker] = useState("");

  const [report, setReport] = useState("");
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    try {
      setLoading(true);

      const res = await stockApi.post("/analyze", {
        company,
        ticker,
      });

      setReport(res.data.report);
    } catch (err) {
      console.log(err);
      alert("Analysis Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-section">
        <input
          className="input-box"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          className="input-box"
          placeholder="Ticker"
          value={ticker}
          onChange={(e) => setTicker(e.target.value)}
        />

        <button
          className="submit-btn"
          onClick={analyze}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </div>

        {loading && (
            <Loader text="Analyzing Stock..." />
        )}

      {report && (
        <ResultCard content={report} />
        )}
    </>
  );
}