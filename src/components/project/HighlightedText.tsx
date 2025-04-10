import React from "react";
import Badge from "@/components/ui/Badge";

type HighlightedTextProps = {
  text: string;
  keywords: string[];
  variant?: "yellow" | "red" | "blue" | "green";
};

const HighlightedText = ({
  text,
  keywords,
  variant = "yellow",
}: HighlightedTextProps) => {
  if (!keywords.length) return <p>{text}</p>;

  // Create a regex pattern from the keywords
  const pattern = new RegExp(`(${keywords.join("|")})`, "gi");

  // Split the text by the pattern
  const parts = text.split(pattern);

  console.log({ parts });

  return (
    <p>
      {parts.map((part, i) => {
        // Check if this part matches any keyword
        const isKeyword = keywords.some(
          (keyword) => part.toLowerCase() === keyword.toLowerCase()
        );

        return isKeyword ? (
          <Badge key={i} variant={variant} className="mx-1">
            {part}
          </Badge>
        ) : (
          part
        );
      })}
    </p>
  );
};

export default HighlightedText;
