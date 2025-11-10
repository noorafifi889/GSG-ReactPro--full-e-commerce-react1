import React from 'react'
import "../assets/Button.modules.css"
export const Button = ({title , style}) => {
    return (
      <div className="btn-style" style={style}>
        <button>{title}</button>
      </div>
    );
}
