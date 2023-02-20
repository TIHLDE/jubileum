import ReactMarkdown from "react-markdown";

export const MarkdownBody = ({ text }: MarkdownProps) => {
  return <ReactMarkdown>{text ?? ""}</ReactMarkdown>;
};

type MarkdownProps = {
  text: string;
};
