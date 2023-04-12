import React from "react";

function Copy({text}) {
    const copyText = () => {
        navigator.clipboard.writeText(text);
      };
      console.log(copyText);
    return(
        <button id="copyBtn" onClick={copyText}>
            Copy
        </button>
    )
}

export default Copy