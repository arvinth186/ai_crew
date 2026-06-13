type Props = {
  tab: string;
  setTab: (tab: string) => void;
};

export default function Navbar({
  tab,
  setTab,
}: Props) {
  return (
    <div className="tabs">
      <button
        className={`tab-btn ${
          tab === "research" ? "active" : ""
        }`}
        onClick={() => setTab("research")}
      >
        Content Research
      </button>

      <button
        className={`tab-btn ${
          tab === "stock" ? "active" : ""
        }`}
        onClick={() => setTab("stock")}
      >
        Stock Analysis
      </button>
    </div>
  );
}