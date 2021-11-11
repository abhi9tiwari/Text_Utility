import React from "react";
export default function About(props) {
    
  return (
    <div className="container my-3 p-2" style={{color : props.mode === 'dark'?'white':'#042743' }}>
      <h1>About Us</h1>
      <div className="accordion " id="accordionExample" style={{backgroundColor : props.mode === 'dark'?'#2b2a2a':'white', color : props.mode === 'dark'?'white':'#042743'  }}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={{backgroundColor : props.mode === 'dark'?'#2b2a2a':'white', color : props.mode === 'dark'?'white':'#042743'  }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor : props.mode === 'dark'?'#2b2a2a':'white', color : props.mode === 'dark'?'white':'#042743'  }}>
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor : props.mode === 'dark'?'#2b2a2a':'white', color : props.mode === 'dark'?'white':'#042743'  }}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={{backgroundColor : props.mode === 'dark'?'#2b2a2a':'white', color : props.mode === 'dark'?'white':'#042743'  }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={{backgroundColor : props.mode === 'dark'?'#2b2a2a':'white', color : props.mode === 'dark'?'white':'#042743'  }}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor : props.mode === 'dark'?'#2b2a2a':'white', color : props.mode === 'dark'?'white':'#042743'  }}>
              TextUtils is a free character tool that provides instant character count & word cound statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={{backgroundColor : props.mode === 'dark'?'#2b2a2a':'white', color : props.mode === 'dark'?'white':'#042743'  }}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={{backgroundColor : props.mode === 'dark'?'#2b2a2a':'white', color : props.mode === 'dark'?'white':'#042743'  }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{backgroundColor : props.mode === 'dark'?'#2b2a2a':'white', color : props.mode === 'dark'?'white':'#042743'  }}>
              This word count software works in any web browesers such as chrome, firefox, safari, opera. It suits to cound characters in facebook, blog, books excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner my-3">
      </div>
    </div>
  );
}
