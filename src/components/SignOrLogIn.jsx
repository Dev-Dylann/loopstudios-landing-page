import React, { useEffect, useState, useRef } from 'react'
import mobileLogin from "../assets/mobile/image-login.jpg"
import mobileSignup from "../assets/mobile/image-signup.jpg"

const SignOrLogIn = () => {

  const [formState, setFormState] = useState('signup')
  const loginRef = useRef()
  const signupRef = useRef()
  const mailRef = useRef()
  const confirmPwordRef = useRef()

  useEffect(() => { 
    mailRef.current.classList.toggle('-mt-[71.5px]')
    mailRef.current.classList.toggle('opacity-0')
    confirmPwordRef.current.classList.toggle('-mt-[71.5px]')
    confirmPwordRef.current.classList.toggle('opacity-0')
  }, [formState])

  return (
    <section className='flex flex-col pt-10'>
        <article className='bg-cover bg-right-top transition-all duration-300' style={
          formState === 'login' ? { backgroundImage: `url(${mobileLogin})` } : { backgroundImage: `url(${mobileSignup})`}
        }>
            <div className='bg-transBlackLight text-white text-center py-28 px-4'>
                <h2 className='font-josefin text-3xl'>{formState === 'login' ? "RESUME YOUR EXPERIENCE" : "LET'S KICKSTART YOUR EXPERIENCE"}</h2>

                <p>{formState === 'login' ? "Fill in your details below" : "Fill in the form below to get started"}</p>

                <p className='text-[#9F9F9F] mt-6'>{formState === 'login' ? "Don't have an account?" : "Already have an account?"} <span className='underline' onClick={() => setFormState(prev => prev === 'login' ? 'signup' : 'login')}>{formState === 'login' ? "Sign Up" : "Log in"}</span> instead.</p>
            </div>
        </article>

        <article className=' px-4 -mt-16'>
          <form ref={signupRef} action="" className='p-4 border border-black bg-white flex flex-col gap-4 rounded-lg'>
            <h3 className='text-2xl font-josefin'>{formState === 'login' ? "LOG IN" : "SIGN UP"}</h3>

            <label htmlFor="uName" className='text-sm flex flex-col gap-0.5'>
              Username
              <input type="text" id='uName' className='border border-gray-dark text-base rounded-lg px-4 py-1 focus:outline focus:outline-2 focus:outline-black text-gray-darker' />
            </label>

            <label htmlFor="email" ref={mailRef} className='text-sm flex flex-col gap-0.5 transition-all duration-300'>
              E-mail
              <input type="email" id='email' className='border border-gray-dark text-base rounded-lg px-4 py-1 focus:outline focus:outline-2 focus:outline-black text-gray-darker' />
            </label>

            <label htmlFor="pword" className='text-sm flex flex-col gap-0.5'>
              {formState === 'login' ? "Password" : "Create Password"}
              <input type="password" id='pword' className='border border-gray-dark text-base rounded-lg px-4 py-1 focus:outline focus:outline-2 focus:outline-black text-gray-darker' />
            </label>

            <label htmlFor="confirmPword" ref={confirmPwordRef} className='text-sm flex flex-col gap-0.5 transition-all duration-300'>
              Confirm Password
              <input type="password" id='confirmPword' className='border border-gray-dark text-base rounded-lg px-4 py-1 focus:outline focus:outline-2 focus:outline-black text-gray-darker' />
            </label>

            <button type="submit" className='mt-4 mx-auto py-2 px-8 tracking-[.35em] font-alata border border-black'>{formState === 'login' ? "LOG IN" : "SUBMIT"}</button>

          </form>
        </article>
    </section>
  )
}

export default SignOrLogIn