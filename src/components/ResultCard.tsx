import ReactMarkdown from "react-markdown";
import CopyButton from "./CopyButton";
import DownloadButton from "./DownloadButton";

type Props = {
  content: string;
};

export default function ResultCard({
  content,
}: Props) {
  return (
    <div className="report-card">

      <div className="action-buttons">
        <CopyButton text={content} />
        <DownloadButton content={content} />
      </div>

      <ReactMarkdown>
        {content}
      </ReactMarkdown>

    </div>
  );
}