import React, {useState} from 'react'
import { VscChevronRight, VscError } from "react-icons/vsc";
import '../styles/readytowatch.css'
import '../styles/fonts.css'


type heroEmail = {
    isFocussed: boolean,
    inputValue: string
}


const ReadyToWatch = () => {

     //HERO EMAIL FUNCTIONS
     const [emailFocus, setEmailFocus] = useState<heroEmail>({isFocussed:false, inputValue:''});
     const [emailEmpty, setEmailEmpty] = useState<boolean>(false);
     
     const labelStyle = {
         labelMove:{top: '0.5rem', fontSize: '0.75rem'},
         inputOutline: {outline: '2px solid white', borderRadius: '0.25rem'},
         isMailEmpty: {border:'1px solid red'},
         emailError: {display:'flex'}
     };
     const labelFunc = () => {
        if(emailFocus.inputValue?.trim().length === 0 ) {
         setEmailFocus({...emailFocus,isFocussed: false});
        }
     }
 
     const inputEmpty = (e:React.FormEvent<HTMLButtonElement>) => {
         if(emailFocus.inputValue?.trim().length === 0 ) {
             setEmailEmpty(true);
             e.preventDefault();
            } else { setEmailEmpty(false) }
     }

     console.log(emailEmpty);


  return (
    <>
     <form className='readytowatch-form'>
        <div className='rtw-text'>Ready to watch? Enter your email to create or restart your membership.</div>

        <div className='getstart-container' style={{margin: '1rem auto 0'}}>
            <div className='input-box' style={emailFocus.isFocussed ? labelStyle.inputOutline : {}}>
                <input type="email" value={emailFocus.inputValue} 
                    style={(emailEmpty ? labelStyle.isMailEmpty : {})} 
                    onFocus={() => setEmailFocus({...emailFocus,isFocussed: true})} 
                    onChange={(e) => setEmailFocus({...emailFocus,inputValue:(e.target.value)})} onBlur={() => labelFunc()} 
                />
                <label style={emailFocus.isFocussed ? labelStyle.labelMove : {}}>Email adress</label>
                <label className='email-error' style={emailEmpty ? labelStyle.emailError : {}}> <VscError/> Email is required.</label>
            </div>
            <button type='submit' style={{marginLeft: '0.5rem'}} onClick={(e) => inputEmpty(e)}>Get Started <VscChevronRight /></button>
        </div>
    </form>
    </>
  )
}

export default ReadyToWatch