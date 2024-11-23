import React, { useState } from 'react'

export default function TextForm(props) {
    document.title = 'TextUtils - Home'
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success')
    }
    const capitalize = () => {
        let lower = text.toLowerCase();
        let newText = lower.charAt(0).toUpperCase() + lower.slice(1);
        setText(newText);
        props.showAlert('The First letter of the text is now Capital', 'success')
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success')
    }
    const rmExtraSpaces = () => {
        let word = text.split(' ');
        let filteredWord = word.filter(eleme => eleme !== '');
        let newText = filteredWord.join(' ');
        setText(newText.toString());
        props.showAlert('Extra spaces have been removed', 'success')
    }
    const copyText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert('Copied to clipboard', 'success')
    }
    const clearText = () => {
        let newText='';
        setText(newText)
        props.showAlert('Text cleared', 'success')
    }
    // const myst={
    //     background: 'blue',
    //     color: 'white'
    // }
    return (
        <div className="container my-4 mb-3" style={props.oceanTheme}>
            <h2>Enter The Text</h2>
            <textarea className={`mainArea form-control my-3 text-${props.mode==='light'?'dark':'light'}`} style={{background: props.mode==='light'?'white':'#272a2d'}} id="exampleFormControlTextarea1" value={text} rows="8" onChange={handleOnChange} placeholder='Enter the Text Here'></textarea>
            <div className="d-flex gap-1 flex-wrap my-2">
                <button className={`btn btn-${props.theme==='blue'?'primary':''||props.theme==='green'?'success':''||props.theme==='light'?'secondary':''}`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.theme==='blue'?'primary':''||props.theme==='green'?'success':''||props.theme==='light'?'secondary':''}`} onClick={handleLowClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.theme==='blue'?'primary':''||props.theme==='green'?'success':''||props.theme==='light'?'secondary':''}`} onClick={capitalize}>Capitalize</button>
                <button className={`btn btn-${props.theme==='blue'?'primary':''||props.theme==='green'?'success':''||props.theme==='light'?'secondary':''}`} onClick={rmExtraSpaces}>Remove Extra Spaces</button>
                <button className={`btn btn-${props.theme==='blue'?'primary':''||props.theme==='green'?'success':''||props.theme==='light'?'secondary':''}`} onClick={clearText}>Clear</button>
                <button className={`btn btn-${props.theme==='blue'?'primary':''||props.theme==='green'?'success':''||props.theme==='light'?'secondary':''}`} onClick={copyText}>Copy</button>
                {/* three ternary operators are used because there are three conditions of theme being blue, green or light */}
            </div>
            <div>
                <h2 className='my-3'>Analysis of the Text</h2>
                <span>Words - {text.split(/\s+/).filter(elem=>elem!=='').length} and Characters - {text.length}</span>
                <p>{((text.split(' ').filter(elem=>elem!==''||elem==='\n').length)===0?'0':(text.split(" ").filter(elem=>elem!=='').length/240).toFixed(3))} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}
