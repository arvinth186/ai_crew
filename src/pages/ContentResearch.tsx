import { useState } from "react";
import { researchApi } from "../api/api";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";

export default function ContentResearch() {
  const [topic, setTopic] = useState("");
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState(false);

  const research = async () => {
    try {
      setLoading(true);

      const res = await researchApi.post("/generate", {
            topic,
      });

      console.log(res.data);

      setArticle(
        res.data.article ||
        res.data.result ||
        res.data.content ||
        JSON.stringify(res.data)
        );
    } catch (err) {
      console.log(err);
      alert("Research Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-section">
        <input
          className="input-box"
          placeholder="AI impact on NVIDIA"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <button
          className="submit-btn"
          onClick={research}
          disabled={loading}
        >
          {loading ? "Researching..." : "Research"}
        </button>
      </div>

      {loading && (
         <Loader text="Researching Topic..." />
      )}

      {article && (
            <ResultCard content={article} />
        )}
    </>
  );
}