import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
    document.title = 'TextUtils - About Us';
    return (
        <div className='container pb-3 my-3'>
            <div className={`card mb-3 border`} style={{ 
    background: props.mode === 'dark' ? '#272a2d' : 'white', 
    color: props.mode === 'light' ? 'black' : 'white' 
  }}>
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Convert to Uppercase</h5>
                    <p className="card-text">This features allows you to convert the your text to Uppercase.</p>
                    <Link to="/" className="btn btn-primary">Convert to Uppercase</Link>
                </div>
            </div>
            <div className={`card mb-3 border`} style={{ 
    background: props.mode === 'dark' ? '#272a2d' : 'white', 
    color: props.mode === 'light' ? 'black' : 'white' 
  }}>
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Convert to Lowercase</h5>
                    <p className="card-text">This features allows you to convert the your text to Lowercase.</p>
                    <Link to="/" className="btn btn-primary">Convert to Lowercase</Link>
                </div>
            </div>
            <div className={`card mb-3 border`} style={{ 
    background: props.mode === 'dark' ? '#272a2d' : 'white', 
    color: props.mode === 'light' ? 'black' : 'white' 
  }}>
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Capitalize</h5>
                    <p className="card-text">This features allows you to capitalise the first letter of the text</p>
                    <Link to="/" className="btn btn-primary">Capitalize</Link>
                </div>
            </div>
            <div className={`card mb-3 border`} style={{ 
    background: props.mode === 'dark' ? '#272a2d' : 'white', 
    color: props.mode === 'light' ? 'black' : 'white' 
  }}>
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Remove Extra spaces</h5>
                    <p className="card-text">This feature allows you to remove extra spaces from the text</p>
                    <Link to="/" className="btn btn-primary">Remove spaces</Link>
                </div>
            </div>
            <div className={`card mb-3 border`} style={{ 
    background: props.mode === 'dark' ? '#272a2d' : 'white', 
    color: props.mode === 'light' ? 'black' : 'white' 
  }}>
                <div className="card-header">
                    Featured
                </div>
                <div className="card-body">
                    <h5 className="card-title">Copy</h5>
                    <p className="card-text">This feature allows to copy the text to the clipboard</p>
                    <Link to="/" className="btn btn-primary">Copy</Link>
                </div>
            </div>
        </div>
    )
}
