import React, { useId } from 'react'
import "./InputCards.css"

function TrueFalseCard({ label, description, check, onInputChange }) {
   const id = useId();
   const id2 = useId();

   return (
      <div className='cards'>
         <h2>{label}</h2>
         <p>{description}</p>

         <div className='inputFiledsContainer'>
            <label htmlFor={id}>
               <input
                  type="radio"
                  id={id}
                  name={id}
                  value="true"
                  onChange={onInputChange}
                  checked={check === "true"}
               />
               True
            </label>
            <label htmlFor={id2}>
               <input
                  type="radio"
                  id={id2}
                  name={id}
                  value="false"
                  onChange={onInputChange}
                  checked={check === "false"}
               />
               False
            </label>
         </div>
      </div>
   )
}

function InputTypeNumberCard({ label, description, value, onInputChange }) {
   const id = useId();

   return (
      <div className='cards'>
         <h2>{label}</h2>
         <p>{description}</p>

         <label htmlFor={id} className='inputFiledsContainer'>
            <input
               type="number"
               id={id}
               value={value}
               onChange={onInputChange}
            />
         </label>
      </div>
   )
}

function CustomOptionCard({
   label,
   description,
   check,
   option1,
   option2,
   option3,
   display,
   onInputChange

}) {
   const id = useId();
   const id2 = useId();
   const id3 = useId();

   return (
      <div className='cards'>
         <h2>{label}</h2>
         <p>{description}</p>

         <div className='inputFiledsContainer'>
            <label htmlFor={id}>
               <input
                  type="radio"
                  id={id}
                  name={id}
                  value={option1}
                  onChange={onInputChange}
                  checked={check === option1}
               />
               {option1}
            </label>
            <label htmlFor={id2} style={{ display: display }}>
               <input
                  type="radio"
                  id={id2}
                  name={id}
                  value={option2}
                  onChange={onInputChange}
                  checked={check === option2}
               />
               {option2}
            </label>
            <label htmlFor={id3}>
               <input
                  type="radio"
                  id={id3}
                  name={id}
                  value={option3}
                  onChange={onInputChange}
                  checked={check === option3}
               />
               {option3}
            </label>
         </div>
      </div>
   )
}

export { TrueFalseCard, InputTypeNumberCard, CustomOptionCard }
