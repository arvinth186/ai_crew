type Props = {
  text: string;
};

export default function Loader({ text }: Props) {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
}