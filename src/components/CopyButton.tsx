type Props = {
  text: string;
};

export default function CopyButton({ text }: Props) {
  const copyText = () => {
    navigator.clipboard.writeText(text);
    alert("Copied");
  };

  return (
    <button
      className="copy-btn"
      onClick={copyText}
    >
      Copy Report
    </button>
  );
}