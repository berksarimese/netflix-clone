import React, {useState} from 'react'
import loginimage from '../media/heroimage.jpg'
import logo from '../media/logo.png'
import '../styles/signin.css'
import '../styles/fonts.css'
import Language from '../components/Language'

type signinEmail = {
    isFocussed: boolean,
    inputValue: string
}

type signinPassword = {
    isFocussed: boolean,
    inputValue: string
}

const Login = () => {

    const [emailFocus, setEmailFocus] = useState<signinEmail>({isFocussed:false, inputValue:''});
    const [emailEmpty, setEmailEmpty] = useState<boolean>(false);
    const [passwordFocus, setPasswordFocus] = useState<signinPassword>({isFocussed:false, inputValue:''});
    const [passwordEmpty, setPasswordEmpty] = useState<boolean>(false);
    
    const labelStyle = {
        labelMove:{top: '1rem', fontSize: '0.75rem'},
        inputOutline: {outline: '2px solid white', borderRadius: '0.25rem'},
        isMailEmpty: {borderBottom:'2px solid #e87c03', borderRadius: '4px'},
        emailError: {display:'flex'}
    };

    //EMAIL FUNTIONS
    const labelFunc = (val:string | number | any) => {
       if(val.trim().length === 0 ) {
        setEmailFocus({...emailFocus,isFocussed: false});
       }
    }

    const inputEmpty = () => {
        if(emailFocus.inputValue?.trim().length === 0 ) {
            setEmailEmpty(true);
           } else { setEmailEmpty(false) }
    }

    //PASSWORD FUNCTIONS
    const labelFuncPas = (val:string | number | any) => {
        if(val.trim().length === 0 ) {
         setPasswordFocus({...passwordFocus,isFocussed: false});
        }
     }
 
     const inputEmptyPas = () => {
         if(passwordFocus.inputValue?.trim().length === 0 ) {
             setPasswordEmpty(true);
            } else { setPasswordEmpty(false) }
     }


  return (
    <div className='d-flex flex-column w-100 signin-container' style={{background: '#000'}}>

        <div className='header'>
            <a href='#/' className='logo'><img src={logo} alt="logo" className='logo' /></a>
        </div>

        <div className='position-relative d-flex flex-column signin'>
            <div className='signin-box'>

                <div className='form-container'>
                    <form action="" className='signin-form'>
                        <div className='signin-title'>Sign In</div>

                        <div className='input-box' style={emailEmpty ? labelStyle.emailError : {}}>
                            <input type="email" value={emailFocus.inputValue} 
                                style={(emailEmpty ? labelStyle.isMailEmpty : {})} 
                                onFocus={() => setEmailFocus({...emailFocus,isFocussed: true})} 
                                onChange={(e) => setEmailFocus({...emailFocus,inputValue: e.target.value})} 
                                onBlur={(e) => {labelFunc(e.target.value); inputEmpty();}} 
                            />
                            <div className='input-text' style={emailFocus.isFocussed ? labelStyle.labelMove : {}}>Email or phone number</div>
                        </div>
                        <div className='email-error' style={emailEmpty ? labelStyle.emailError : {}}>Please enter a valid email or phone number.</div>

                        <div className='input-box' style={(passwordEmpty ? labelStyle.emailError : {}, {marginTop: '16px'})}>
                            <input type="email" value={passwordFocus.inputValue} 
                                style={(passwordEmpty ? labelStyle.isMailEmpty : {})}
                                onFocus={() => setPasswordFocus({...passwordFocus,isFocussed: true})} 
                                onChange={(e) => setPasswordFocus({...passwordFocus,inputValue:(e.target.value)})} onBlur={(e) => {labelFuncPas(e.target.value); inputEmptyPas();}} 
                            />
                            <div className='input-text' style={passwordFocus.isFocussed ? labelStyle.labelMove : {}}>Password</div>
                        </div>
                        <div className='email-error' style={passwordEmpty ? labelStyle.emailError : {}}>Your password must contain between 4 and 60 characters.</div>
                        <button>Sign In</button>
                        <div className='check-box'>
                        <label className="cbox-contain">
                            <span>Remember Me</span>
                            <input type="checkbox" />
                            <div className="cbox-input"></div>
                        </label>
                        <a href='www.google.com' className='link'>Need help?</a>
                        </div>
                    </form>

                    <div className='d-flex flex-column h-100 justify-content-center' style={{flexGrow:'100'}}>
                        <div className='bottom-text' style={{fontSize:'16px', marginTop:'16px'}}>New to Netflix? <span style={{color:'white'}}>Sign up now.</span></div>
                        <div className='position-relative d-flex h-100 bottom-text' style={{marginTop:'11px'}}><p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='link' style={{color:'#0071eb'}}>Learn More.</span></p></div>
                    </div>
                </div>               
            </div>

            <div className='footer-container'>
                <div className='footer'>
                    <div className='footer-head'>Questions? Call <a href='tel:0850-000-0000' className='link2' style={{fontSize:'inherit'}}>0850-390-7444</a></div>
                    <div className='list-container'>
                        <ul className='list'>
                            <li className='list-item'><a href='#/' className='link2'>FAQ</a></li>
                            <li className='list-item'><a href='#/' className='link2'>Help Center</a></li>
                            <li className='list-item'><a href='#/' className='link2'>Terms of Use</a></li>
                            <li className='list-item'><a href='#/' className='link2'>Privacy</a></li>
                            <li className='list-item'><a href='#/' className='link2'>Cookie Preferences</a></li>
                            <li className='list-item'><a href='#/' className='link2'>Corporate Information</a></li>
                        </ul>
                    </div>
                    <div style={{marginTop: '20px'}}>
                        <Language />
                    </div>
                    
                </div>
            </div>

            <div className='image-container'>
                <img src={loginimage} alt="login" className='image' />
                <div className='shadow'></div>
            </div>
        </div>


    </div>
  )
}

export default Login