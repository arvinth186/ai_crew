import jsPDF from "jspdf";

type Props = {
  content: string;
};

export default function DownloadButton({ content }: Props) {
  const downloadPDF = () => {
    const doc = new jsPDF();

    const lines = doc.splitTextToSize(content, 180);

    doc.text(lines, 10, 10);

    doc.save("report.pdf");
  };

  return (
    <button
      className="download-btn"
      onClick={downloadPDF}
    >
      Download PDF
    </button>
  );
}