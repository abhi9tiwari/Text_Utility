import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }; 
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text box has been clear", "success");
  };
  const handleSentenceClick = () => {
    let newText = text;
    setText(newText[0].toUpperCase() + newText.slice(1).toLowerCase());
    props.showAlert("Converted to Sentencecase", "success");
  };
  const handleTitleClick = () => {
    let newText = text.trim();
    newText = text.split(" ").map((val) => {
      if(val[0] === ' ') return newText;
      else{
        let newText = val[0].toUpperCase() + val.slice(1).toLocaleLowerCase();
        return newText;
      }
    });
    newText = newText.join(' ');
    setText(newText);
    props.showAlert("Converted to TitleCase", "success");
  };
  const handleCopyClick = () => {
    console.log("copy text")
    var newText = document.getElementById("myBox");
    newText.select();
    newText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text has been copied to the clipboard", "success");
  }
  const handleExtraClick = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '));
    props.showAlert("Extra space has been cleared", "success");
  }
  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container" style={{color : props.mode === 'dark'?'white':'#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{backgroundColor : props.mode === 'dark'?'grey':'white', color : props.mode === 'dark'?'white':'#042743'  }}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          CONVERT TO UPPER CASE
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>
          convert to lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSentenceClick}>
          Convert to sentence case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>
          Convert to Title Case
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraClick}>
          Clear Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length !== 0}).length} words, {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes Required to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text above to see preview."}</p>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Set Heading here",
};
