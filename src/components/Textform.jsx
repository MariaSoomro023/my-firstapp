import React, {useState} from 'react'

export default function Textform(props) {

    const handleOnClick = ()=>{

        //console.log("handleOnClick "+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }

    const handleOnClickLowercase = ()=>{

        //console.log("handleOnClick "+text)
        let newText = text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }

    const handleOnClickClearText = ()=>{

        //console.log("handleOnClick "+text)
        let newText = "Enter Text Here";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }

    const handleOnChange = (event)=>{

        //console.log("handleOnChange")
        setText(event.target.value)
    }

    const handleOnClickCopyText = (event)=>{

    var text = document.getElementById("mytextarea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
    }

    const handleOnClickRemoveSpaces = (event)=>{

        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success");
    }

    const[text,setText] = useState('');

  return (
    <>
    <div className="container" style={{

        color : props.mode==='light'? 'black' : 'white'

        }}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" id="mytextarea" rows="8" value={text} onChange={handleOnChange} style={{

                    backgroundColor : props.mode==='light'? 'white' : 'grey',
                    color : props.mode==='light'? 'black' : 'white'

            }}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleOnClick}>
            Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnClickLowercase}>
            Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnClickClearText}>
            Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnClickCopyText}>
            Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnClickRemoveSpaces}>
            Remove Spaces
        </button>
    </div>
    <div className="container my-3" style={{

color : props.mode==='light'? 'black' : 'white'

    }}>
        <h3>Your Text Summary is here</h3>
        <p>
            {text.length>0 ? text.split(" ").length : 0} words & {text.length} characters.
        </p>
        <p>
            {0.008 * text.split(" ").length} Mintues read.
        </p>
        <h3>
            Preview
        </h3>
        <p>
            {text.length>0 ? text : "Enter text to preview here"}
        </p>
    </div>
    </>
  )
}
