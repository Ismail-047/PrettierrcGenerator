import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CancelIcon from '@mui/icons-material/Cancel';
import React, { useRef, useState } from 'react'
import "./ConfigFile.css"

function ConfigFile({
   displayFile,
   onCloseButtonClick,
   onGenerateNewFileButtonClick
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

            <div className="codeMainContainer">
               <div className="codeContainerHeader">
                  <p>.prettierrc</p>
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
