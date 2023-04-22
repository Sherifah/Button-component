import React from 'react'
import { MdOutlineAddShoppingCart } from "react-icons/md"

function Button({ name, variant, size, color, className, startIcon, endIcon, description}) {
  return (
    <div >
      <div className="btn-description" style={variant === "focus" ? {color: "#828282"} : {color: "#333333"} }>{description}</div>
      <button 
        type='button' 
        className={`${className} ${className}-${variant} btn-${size} btn-${color} btn-${color}-${variant}`}
      >
      {startIcon && <span style={{color: "#ffffff"}}><MdOutlineAddShoppingCart size={14}/> </span>}
        {name}
      {endIcon && <span style={{color: "#ffffff"}}><MdOutlineAddShoppingCart size={14}/> </span>}
      </button>
    </div>
    
  )
}

export default Button
