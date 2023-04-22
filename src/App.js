import React from "react";
import Button from "./components/Button";
import Sidebar from "./components/Sidebar";
import data from "./data.js";



function App() {

  const buttonList = data.map((item, index) => 
    item.isEmpty?<div></div>:
    <Button 
      key={index}
      name={item.name} 
      variant={item.variant} 
      size={item.size}
      color={item.color}
      className={item.className}
      startIcon={item.startIcon} 
      endIcon={item.endIcon} 
      disabled={item.disabled} 
      description={item.description} />
  )

  return (
    <div className="button-component">
      <Sidebar />
      <div className='main-page'>
        <h1 className='active-page'>Buttons</h1>
        <div className="btns">
          {buttonList}
        </div>
        <footer>
          <div className="attribution">
            Challenge by <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>. 
            Coded by <a href="#">Adeleke Sherifah</a>.
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App;
