import React, { useId } from 'react'
import "./InputCards.css"

function TrueFalseCard({ label, description }) {
   const id1 = useId();
   const id2 = useId();

   return (
      <div className='cards'>
         <h2>{label}</h2>
         <p>{description}</p>

         <div className='inputFiledsContainer'>
            <label htmlFor={id1}>
               <input type="radio" id={id1} value={true} name='TureFalse' />
               True
            </label>
            <label htmlFor={id2}>
               <input type="radio" id={id2} value={false} name='TureFalse' />
               False
            </label>
         </div>
      </div>
   )
}

function InputTypeNumberCard({ label, description }) {

   return (
      <div className='cards'>
         <h2>{label}</h2>
         <p>{description}</p>

         <div className='inputFiledsContainer'>
            <input type="number" />
         </div>
      </div>
   )
}
export { TrueFalseCard, InputTypeNumberCard }
