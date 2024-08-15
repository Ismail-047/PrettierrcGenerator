import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CancelIcon from '@mui/icons-material/Cancel';
import React, { useRef, useState } from 'react'
import "./ConfigFile.css"

function ConfigFile({
   displayFile,
   onCloseButtonClick,
   onGenerateNewFileButtonClick,
   tabs,
   quotes,
   tabWidth,
   rangeEnd,
   proseWrap,
   rangeStart,
   printWidth,
   semicolons,
   jsxBrackets,
   insertPragma,
   requirePragma,
   trailingCommas,
   bracketSpacing,
   arrowFunctionParentheses
}) {
   const text = useRef(null);
   const [isCopied, setIsCopied] = useState(false);

   const displayCopied = () => {
      setTimeout(() => {
         setIsCopied(false);
      }, 1500)
      setIsCopied(true);
   }

   return (
      <div className={`configFile ${displayFile ? "displayConfigFile" : ""}`}>
         <div className="mainContainer">
            <CancelIcon className="cancelIcon"
               onClick={onCloseButtonClick}
            />
            <h1>Your Config File</h1>
            <p>Copy and paste the following code in your .prettierrc file</p>

            <div className="codeMainContainer">
               <div className="codeContainerHeader">
                  <span>.prettierrc</span>
                  <CopyToClipboard text={text.current?.innerText}
                     onCopy={displayCopied}
                  >
                     <ContentCopyIcon className="copyButton" />

                  </CopyToClipboard>
                  <span className={`copied ${isCopied ? "isCopied" : ""}`}>
                     Copied
                     <CheckCircleOutlineIcon className='checkIcon' />
                  </span>
               </div>
               <div className="codeContainerBody"
                  ref={text}
               >
                  {"{"} <br />
                  <div className="keyValueContainer">
                     {semicolons && (
                        <>
                           <span className='keys'>semi:</span>
                           <span className='values boolvalues'>{semicolons}</span>
                           <br />
                        </>
                     )}
                     {tabs && (
                        <>
                           <span className='keys'>tabs:</span>
                           <span className='values boolvalues'>{tabs}</span>
                           <br />
                        </>
                     )}
                     {quotes && (
                        <>
                           <span className='keys'>quotes:</span>
                           <span className='values boolvalues'>{quotes}</span>
                           <br />
                        </>
                     )}
                     {rangeEnd && (
                        <>
                           <span className='keys'>rangeEnd:</span>
                           <span className='values numberValues'>{rangeEnd}</span>
                           <br />
                        </>
                     )}
                     {tabWidth && (
                        <>
                           <span className='keys'>tabWidth:</span>
                           <span className='values numberValues'>{tabWidth}</span>
                           <br />
                        </>
                     )}
                     {proseWrap && (
                        <>
                           <span className='keys'>proseWrap:</span>
                           <span className='values stringValues'>{`"${proseWrap}"`}</span>
                           <br />
                        </>
                     )}
                     {rangeStart && (
                        <>
                           <span className='keys'>rangeStart:</span>
                           <span className='values numberValues'>{rangeStart}</span>
                           <br />
                        </>
                     )}
                     {printWidth && (
                        <>
                           <span className='keys'>printWidth:</span>
                           <span className='values numberValues'>{printWidth}</span>
                           <br />
                        </>
                     )}
                     {jsxBrackets && (
                        <>
                           <span className='keys'>jsxBrackets:</span>
                           <span className='values boolvalues'>{jsxBrackets}</span>
                           <br />
                        </>
                     )}
                     {insertPragma && (
                        <>
                           <span className='keys'>insertPragma:</span>
                           <span className='values boolvalues'>{insertPragma}</span>
                           <br />
                        </>
                     )}
                     {requirePragma && (
                        <>
                           <span className='keys'>requirePragma:</span>
                           <span className='values boolvalues'>{requirePragma}</span>
                           <br />
                        </>
                     )}
                     {trailingCommas && (
                        <>
                           <span className='keys'>trailingCommas:</span>
                           <span className='values stringValues'>{`"${trailingCommas}"`}</span>
                           <br />
                        </>
                     )}
                     {bracketSpacing && (
                        <>
                           <span className='keys'>bracketSpacing:</span>
                           <span className='values boolvalues'>{bracketSpacing}</span>
                           <br />
                        </>
                     )}
                     {arrowFunctionParentheses && (
                        <>
                           <span className='keys'>arrowFunctionParentheses:</span>
                           <span className='values stringValues'>{`"${arrowFunctionParentheses}"`}</span>
                           <br />
                        </>
                     )}
                  </div>
                  {"}"}
               </div>

               <button className="generateButton"
                  onClick={onGenerateNewFileButtonClick}
               >
                  Generate New Config
               </button>
            </div>
         </div>
      </div>
   )
}

export default ConfigFile
