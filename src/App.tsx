import { useState } from "react";
import ContentResearch from "./pages/ContentResearch";
import StockAnalysis from "./pages/StockAnalysis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";



function App() {
  const [tab, setTab] = useState("research");

  return (
    <div className="app">
      <Hero />

      <Navbar
        tab={tab}
        setTab={setTab}
      />

      {tab === "research" ? (
        <ContentResearch />
      ) : (
        <StockAnalysis />
      )}
    </div>
  );
}

export default App;