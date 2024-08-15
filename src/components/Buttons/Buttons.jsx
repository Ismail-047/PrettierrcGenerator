import React, { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./Buttons.css"

function Buttons({
   onClearButtonClick,
   onGenerateButtonClick
}) {
   const [isCleared, setIsCleared] = useState(false);

   const handleClearButtonClick = () => {
      onClearButtonClick();
      setTimeout(() => {
         setIsCleared(false);
      }, 1500)
      setIsCleared(true);
   }

   return (
      <div className="buttons">
         <button
            onClick={onGenerateButtonClick}
         >
            Generate Config
         </button>

         <button className='clearButton'
            onClick={handleClearButtonClick}
         >
            Clear
            <span className={`cleared ${isCleared ? "displayButton" : ""}`}>
               Cleared
               <CheckCircleOutlineIcon className='checkIcon' />
            </span>
         </button>
      </div>
   )
}

export default Buttons
