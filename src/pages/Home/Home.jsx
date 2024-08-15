import { CustomOptionCard, InputTypeNumberCard, TrueFalseCard } from '../../components/InputCards/InputCards'
import ConfigFile from '../../components/ConfigFile/ConfigFile';
import Buttons from '../../components/Buttons/Buttons'
import React, { useState } from 'react'
import "./Home.css"


function Home() {
   const [tabs, setTabs] = useState("");
   const [quotes, setQuotes] = useState("");
   const [tabWidth, setTabWidth] = useState("");
   const [rangeEnd, setRangeEnd] = useState("");
   const [proseWrap, setProseWrap] = useState("");
   const [rangeStart, setRangeStart] = useState("");
   const [printWidth, setPrintWidth] = useState("");
   const [semicolons, setSemicolons] = useState("");
   const [jsxBrackets, setJsxBrackets] = useState("");
   const [insertPragma, setInsertPragma] = useState("");
   const [requirePragma, setRequirePragma] = useState("");
   const [trailingCommas, setTrailingCommas] = useState("");
   const [bracketSpacing, setBracketSpacing] = useState("");
   const [arrowFunctionParentheses, setArrowFunctionParentheses] = useState("");

   const clearAllInputs = () => {
      setTabs("");
      setQuotes("");
      setRangeEnd("");
      setTabWidth("");
      setProseWrap("");
      setPrintWidth("");
      setSemicolons("");
      setRangeStart("");
      setJsxBrackets("");
      setInsertPragma("");
      setRequirePragma("");
      setTrailingCommas("");
      setBracketSpacing("");
      setArrowFunctionParentheses("");
   };

   const [displayConfigFile, setDisplayConfigFile] = useState(false);
   const generateConfigFile = () => {
      setDisplayConfigFile(true);
   }
   const closeConfigFile = () => {
      setDisplayConfigFile(false);
   }

   return (
      <main>
         <div id="info">
            <p>Choose desired options to generate .prettierrc file within seconds</p>
            <span>#All Programmers are Lazy!</span>
         </div>
         <TrueFalseCard
            label="Tabs"
            description="Indent lines with tabs? (vs spaces)"
            check={tabs}
            onInputChange={(event) => setTabs(event.target.value)}
         />
         <TrueFalseCard
            label="Semicolons"
            description="Print semicolons at the end of every statement? (vs ASI only)"
            check={semicolons}
            onInputChange={(event) => setSemicolons(event.target.value)}
         />
         <TrueFalseCard
            label="Quotes"
            description="Use single quotes? (vs double)"
            check={quotes}
            onInputChange={(event) => setQuotes(event.target.value)}
         />
         <TrueFalseCard
            label="Bracket Spacing"
            description="Print spaces between brackets in object literals?"
            check={bracketSpacing}
            onInputChange={(event) => setBracketSpacing(event.target.value)}
         />
         <TrueFalseCard
            label="JSX Brackets"
            description="Put the end of a multi-line JSX element at the end of the last line instead of being alone on the next line? (except for self-closing elements)"
            check={jsxBrackets}
            onInputChange={(event) => setJsxBrackets(event.target.value)}
         />
         <TrueFalseCard
            label="Insert Pragma"
            description="Insert a special @format marker at the top of files specifying that the file has been formatted with prettier? (see require pragma)"
            check={insertPragma}
            onInputChange={(event) => setInsertPragma(event.target.value)}
         />
         <TrueFalseCard
            label="Require Pragma"
            description="Format files only containing a special comment (pragma) at top of file?"
            check={requirePragma}
            onInputChange={(event) => setRequirePragma(event.target.value)}
         />

         <InputTypeNumberCard
            label="Tab Width"
            description="Number of spaces per indentation-level?"
            value={tabWidth}
            onInputChange={(event) => setTabWidth(event.target.value)}
         />
         <InputTypeNumberCard
            label="Print Width"
            description="Line length the printer will wrap on?"
            value={printWidth}
            onInputChange={(event) => setPrintWidth(event.target.value)}
         />
         <InputTypeNumberCard
            label="Range Start"
            description="Format only a segment of a file, starting at what character offset? (inclusive)"
            value={rangeStart}
            onInputChange={(event) => setRangeStart(event.target.value)}
         />
         <InputTypeNumberCard
            label="Range End"
            description="Format only a segment of a file, ending at what character offset? (exclusive)"
            value={rangeEnd}
            onInputChange={(event) => setRangeEnd(event.target.value)}
         />

         <CustomOptionCard
            label="Trailing Commas"
            description="Print trailing commas when multi-line for?"
            option1="none"
            option2="es5"
            option3="all"
            check={trailingCommas}
            onInputChange={(event) => setTrailingCommas(event.target.value)}
         />
         <CustomOptionCard
            label="Prose Wrap"
            description="Wrap markdown text?"
            option1="always"
            option2="never"
            option3="preserve"
            check={proseWrap}
            onInputChange={(event) => setProseWrap(event.target.value)}
         />
         <CustomOptionCard
            label="Arrow Function Parentheses"
            description="Include parentheses around a sole arrow function parameter?"
            option1="avoid"
            option3="always"
            display="none"
            check={arrowFunctionParentheses}
            onInputChange={(event) => setArrowFunctionParentheses(event.target.value)}
         />

         <Buttons
            onClearButtonClick={clearAllInputs}
            onGenerateButtonClick={generateConfigFile}
         />

         <ConfigFile displayFile={displayConfigFile}
            onCloseButtonClick={closeConfigFile}
            onGenerateNewFileButtonClick={closeConfigFile}
         />

      </main>
   )
}

export default Home
