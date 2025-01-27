import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css"; // Default theme. You can use other themes from Prism.js.

const CodeBlock = ({ code, language = "javascript" }) => {
  useEffect(() => {
    Prism.highlightAll(); // Highlight the code when the component is rendered.
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
    //   alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="code-container" style={{ position: "relative", marginBottom: "20px" }}>
      <button
        onClick={copyToClipboard}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "12px",
        }}
      >
        Copy
      </button>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
