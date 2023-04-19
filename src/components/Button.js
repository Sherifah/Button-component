import React from 'react'

function Button({ name, size, color, rounded, variant}) {
  return (
    <div className='main-page'>
      <h1 className='active-page'>Buttons</h1>
      <div>&lt;Button variant=""{variant}"" /&gt;</div>
      <button type='button'>{name}</button>
    </div>
  )
}

export default Button
