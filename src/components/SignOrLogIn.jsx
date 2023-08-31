import React, { useEffect, useState, useRef } from 'react'
import loginImg from "../assets/desktop/image-login.jpg"
import signupImg from "../assets/desktop/image-signup.jpg"

const SignOrLogIn = () => {

  const [formState, setFormState] = useState('signup')
  const loginRef = useRef()
  const signupRef = useRef()
  const mailRef = useRef()
  const confirmPwordRef = useRef()

  useEffect(() => { 
    if (formState === 'login') {
      mailRef.current.classList.add('-mt-[71.5px]')
      mailRef.current.classList.add('opacity-0')
      confirmPwordRef.current.classList.add('-mt-[71.5px]')
      confirmPwordRef.current.classList.add('opacity-0')
    } else if (formState === 'signup') {
      mailRef.current.classList.remove('-mt-[71.5px]')
      mailRef.current.classList.remove('opacity-0')
      confirmPwordRef.current.classList.remove('-mt-[71.5px]')
      confirmPwordRef.current.classList.remove('opacity-0')
    }
  }, [formState])

  return (
    <section className='flex flex-col pt-10 max-w-7xl lg:grid lg:grid-cols-2 lg:mx-auto lg:my-20'>
        <article className='bg-cover bg-right-top transition-all duration-300 lg:h-full' style={
          formState === 'login' ? { backgroundImage: `url(${loginImg})` } : { backgroundImage: `url(${signupImg})`}
        }>
            <div className='h-full bg-transBlackLight text-white text-center py-28 px-4 lg:text-left lg:flex lg:flex-col lg:justify-center xl:px-8'>
                <h2 className='font-josefin text-3xl md:text-4xl lg:text-5xl'>{formState === 'login' ? "RESUME YOUR EXPERIENCE" : "LET'S KICKSTART YOUR EXPERIENCE"}</h2>

                <p className='md:text-lg lg:text-xl'>{formState === 'login' ? "Fill in your details" : "Fill in the form to get started"}</p>

                <p className='text-[#9F9F9F] mt-6 lg:text-lg'>{formState === 'login' ? "Don't have an account?" : "Already have an account?"} <span className='underline cursor-pointer hover:text-white' onClick={() => setFormState(prev => prev === 'login' ? 'signup' : 'login')}>{formState === 'login' ? "Sign Up" : "Log in"}</span> instead.</p>
            </div>
        </article>

        <article className='px-4 -mt-16 sm:px-6 lg:mt-0 lg:px-0 lg:min-h-[488px] xl:border xl:border-black'>
          <form ref={signupRef} action="" className='p-4 border border-black bg-white flex flex-col gap-4 rounded-lg sm:p-6 md:px-16 lg:rounded-none lg:h-full lg:justify-center lg:px-12 xl:border-0 xl:max-w-[600px] xl:mx-auto xl:px-16'>
            <h3 className='text-2xl font-josefin md:text-3xl lg:text-4xl'>{formState === 'login' ? "LOG IN" : "SIGN UP"}</h3>

            <label htmlFor="uName" className='text-sm flex flex-col gap-0.5 md:text-base'>
              Username
              <input type="text" id='uName' className='border border-gray-dark text-base rounded-lg px-4 py-1 focus:outline focus:outline-2 focus:outline-black text-gray-darker md:text-lg' />
            </label>

            <label htmlFor="email" ref={mailRef} className='text-sm flex flex-col gap-0.5 transition-all duration-300 md:text-base'>
              E-mail
              <input type="email" id='email' className='border border-gray-dark text-base rounded-lg px-4 py-1 focus:outline focus:outline-2 focus:outline-black text-gray-darker md:text-console.log();' />
            </label>

            <label htmlFor="pword" className='text-sm flex flex-col gap-0.5 md:text-base'>
              {formState === 'login' ? "Password" : "Create Password"}
              <input type="password" id='pword' className='border border-gray-dark text-base rounded-lg px-4 py-1 focus:outline focus:outline-2 focus:outline-black text-gray-darker md:text-lg' />
            </label>

            <label htmlFor="confirmPword" ref={confirmPwordRef} className='text-sm flex flex-col gap-0.5 transition-all duration-300 md:text-base'>
              Confirm Password
              <input type="password" id='confirmPword' className='border border-gray-dark text-base rounded-lg px-4 py-1 focus:outline focus:outline-2 focus:outline-black text-gray-darker md:text-lg' />
            </label>

            <button type="submit" className='mt-4 mx-auto py-2 px-8 tracking-[.35em] font-alata border border-black hover:bg-black hover:text-white transition-all md:text-lg md:py-3 md:px-12'>{formState === 'login' ? "LOG IN" : "SUBMIT"}</button>

          </form>
        </article>
    </section>
  )
}

export default SignOrLogIn