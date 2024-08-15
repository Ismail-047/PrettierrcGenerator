import React from 'react'
import { useState } from 'react'
import "./Buttons.css"

function Buttons({
   onClearButtonClick
}) {
   const [isCleared, setIsCleared] = useState(false);

   const handleClearButtonClick = () => {
      onClearButtonClick();
      setTimeout(() => {
         setIsCleared(false);
      }, 2000)
      setIsCleared(true);
   }

   return (
      <div className="buttons">
         <button>
            Generate Config
         </button>

         <button className='clearButton'
            onClick={handleClearButtonClick}
         >
            Clear
            <span className={`cleared ${isCleared ? "displayButton" : ""}`}>
               Cleared
               {/* <CheckCircleOutlineIcon className='clearIcon' /> */}
            </span>
         </button>
      </div>
   )
}

export default Buttons
