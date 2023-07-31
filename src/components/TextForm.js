import React, { useState } from 'react';



export default function TextForm(props) { 
    
    // const handleUpClick = ()=>{
    //     console.log("Uppercase was clicked "+ text);
    //     let newText = text.toUpperCase();
    //     setText(newText)
    //     console.log(newText);
    // }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const handleLoClick = ()=>{
        console.log("Uppercase was clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText)
        console.log(newText);
        props.showAlert("Converted to lowerCase","success");
    }
    const handleClearClick = ()=>{
        
        let newText = ("");
        setText(newText)
        console.log(newText);
        props.showAlert("Cleared Text","success")
    }
    const handleCapitalizeClick = ()=>{
        
        let newText = text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText)
        console.log(newText);
        props.showAlert("Capitalized","success")
    }
    const handleCopyClick = ()=>{
        
        var  mytext = document.getElementById("myBox");
        
        navigator.clipboard.writeText(mytext.value);
        props.showAlert("Copied to Clipboard","success")
    }

    const handleExtraSpaceClick = ()=>{
        
        var  newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","success")

        
       
    }
    
    const [text,setText] = useState('');
    return (
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            
                <h1 >{props.heading}</h1>
             <div className="form-group">
    
            <textarea className="form-control" placeholder="Type here" value={text} onChange={(handleOnChange)} id="myBox" style={{backgroundColor:props.mode==='light'?'white':'gray', color:props.mode==='light'?'black':'white'}} rows="8"></textarea>
            <button className="btn btn-primary mt-2 p-2 mx-2  " onClick={()=>setText(text.toUpperCase(),props.showAlert("Converted to Uppercase","success"))}>Convert to Upper case</button>
            <button className="btn btn-primary mt-2 p-2 mx-2" onClick={handleLoClick}>Convert to Lower case</button>
            <button className="btn btn-primary mt-2 p-2 mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mt-2 p-2 mx-2" id="myBox" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mt-2 p-2 mx-2" id="myBox" onClick={handleExtraSpaceClick}>Remove Extra Spaces Text</button>
            <button className="btn btn-primary mt-2 p-2 " onClick={handleCapitalizeClick}>Capitalize First Letter</button>
            
            </div>
            <div className="container my-3">
                <h1>
                    Your text summary
                </h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter somthing to preview it here"}</p>
            </div>
        </div>
  )
}
