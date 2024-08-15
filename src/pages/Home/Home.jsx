import React from 'react'
import "./Home.css"
import { InputTypeNumberCard, TrueFalseCard } from '../../components/InputCards/InputCards'
function Home() {
   return (
      <main>
         <div id="info">
            <p>Choose desired options to generate .prettierrc file within seconds</p>
            <span>#All Programmers are Lazy!</span>
         </div>
         <TrueFalseCard
            label="Tabs"
            description="Indent lines with tabs? (vs spaces)"
         />
         <TrueFalseCard
            label="Semicolons"
            description="Print semicolons at the end of every statement? <br /> (vs ASI only)"
         />
         <TrueFalseCard
            label="Quotes"
            description="Use single quotes? (vs double)"
         />
         <TrueFalseCard
            label="Bracket Spacing"
            description="Print spaces between brackets in object literals?"
         />
         <TrueFalseCard
            label="JSX Brackets"
            description="Put the end of a multi-line JSX element at the end of the last line instead of being alone on the next line? (except for self-closing elements)"
         />
         <InputTypeNumberCard
            label="Tab Width"
            description="Number of spaces per indentation-level?"
         />
         <InputTypeNumberCard
            label="Print Width"
            description="Line length the printer will wrap on?"
         />
         <InputTypeNumberCard
            label=""
            description=""
         />

         <div className="buttons">
            <button>
               Generate Config
            </button>

            <button>
               Clear
               {/* <span className={`clear ${fade ? 'fade-in' : ''}`}>
                  Cleared
                  <CheckCircleOutlineIcon className='clearIcon' />
               </span> */}
            </button>
         </div>

      </main>
   )
}

export default Home
