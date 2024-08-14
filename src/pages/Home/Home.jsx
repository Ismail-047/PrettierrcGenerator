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
            label=""
            description=""
         />
         <InputTypeNumberCard
            label=""
            description=""
         />

      </main>
   )
}

export default Home
