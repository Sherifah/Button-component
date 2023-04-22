import React from 'react'

function Sidebar() {
  return (
    <div className='menu-bar'>
      <h3 className='app-logo'><span style={{color: "#F7542E"}}>Dev</span>challenges.io</h3>
      <nav className='nav-links'>
        <div className='nav-link'>Colors</div>
        <div className='nav-link'>Typography</div>
        <div className='nav-link'>Spaces</div>
        <div className='nav-link active-link'>Buttons</div>
        <div className='nav-link'>Inputs</div>
        <div className='nav-link'>Grid</div>
      </nav>
    </div>
  )
}

export default Sidebar
