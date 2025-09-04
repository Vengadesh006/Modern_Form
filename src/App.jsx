import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { Singup } from './Components/Singup'
import { Login } from './Components/Login'

function App() {
  const [isSignup, setIsSignup] = useState(false)

  const spring = {
    type: "sprint",
    stiffness: 600,
    damping: 45
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center p-4 bg-gray-200' >
      <div className="relative w-[860px] mih-h-[640px] max-w-full md:min-h-[520px] overflow-hidden shadow-3xl bg-white rounded-2xl ">
        <motion.div
          animate={{ x: isSignup ? "100%" : "0%" }}
          transition={spring}
          className="absolute top-0 left-0 w-full h-full md:w-1/2">
          <div className="flex-1 flex items-center justify-center p-8 md:p-10 z-20">
            {isSignup ? <Singup /> : <Login />}

          </div>

        </motion.div>
        {/* overlayping */}
        <motion.div
          animate={{ x: isSignup ? "-100%" : "0%" }}
          transition={spring}
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FF4B2B 0%, #FF416C 100%)",
          }}
          className="absolute top-0 right-0 w-1/2 hidden h-full md:flex items-center justify-center text-white">
          <div className="w-full max-w-sm">
            {isSignup ?
              (
                <motion.div
                    key="overlay-signin"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                  >
                  <h1 className='text-3xl font-bold text-center uppercase mb-3' > Welcome Back  </h1>
                  <p className='text-md font-semibold my-4' > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, pariatur earum voluptatem mollitia veniam, iste unde odit ad molestias maxime omnis possimus, est vitae accusamus sunt sequi veritatis adipisci? Qui. </p>
                  <div className="flex justify-center mt-4">
                    <button onClick={() => setIsSignup(false)} className='w-3xs border-3 py-2 px-4 rounded-3xl uppercase font-extrabold hover:border-black hover:text-black ' > Signup </button>
                  </div>

                </motion.div>) : (
                <>
                  <motion.div
                    key="overlay-signin"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35 }}
                  >
                    <h2 className="text-3xl font-extrabold mb-3">Hello, Friend!</h2>
                    <p className="text-white/90 mb-6">
                      Enter your personal details and start your journey with us
                    </p>
                    <motion.button
                      onClick={() => setIsSignup(true)}
                      whileTap={{ scale: 0.97 }}
                      whileHover={{ scale: 1.02 }}
                      className="px-6 py-3 rounded-full border border-white uppercase tracking-wide font-semibold"
                      aria-controls="auth-forms"
                    >
                      Sign Up
                    </motion.button>
                  </motion.div>
                </>
              )


            }


          </div>




        </motion.div>
      </div>

    </div>
  )
}

export default App
