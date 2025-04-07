import React from "react";

type KeywordHighlightProps = {
  text: string;
  keywords?: string[];
};

const KeywordHighlight: React.FC<KeywordHighlightProps> = ({
  text,
  keywords = [],
}) => {
  if (!keywords.length) return <span className="text-gray-300">{text}</span>;

  const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));

  return (
    <span className="text-gray-300">
      {parts.map((part, i) => {
        const isKeyword = keywords.some(
          (keyword) => part.toLowerCase() === keyword.toLowerCase()
        );
        return isKeyword ? (
          <span key={i} className="text-emerald-400 font-semibold">
            {part}
          </span>
        ) : (
          part
        );
      })}
    </span>
  );
};

export default KeywordHighlight;
