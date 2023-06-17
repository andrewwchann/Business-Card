import React from "react";

export default function CopyEmailButton(prop) {
    // const email = "ajchan@ualberta.ca";
  
    const copyEmailToClipboard = () => {
      navigator.clipboard.writeText(prop.email);
    };
  
    return (
      <button  className="link-button" onClick={copyEmailToClipboard}>
        Email
      </button>
    );
  };