import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const Login = () => {
  return (
     <div className='w-full max-w-md p-7'>
      <AnimatePresence mode='wait' >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          exit={{ opacity: 0, y: -20 }}
          className=""
        >

          <form action="">
            <h1 className='text-2xl font-bold text-center mb-5' > Login  </h1>
            <hr />
            {/* username */}
            <div className="form-group">
              <label htmlFor="username" className='text-sm block tracking-wide mt-2' > Username : </label>
              <input
                type="text"
                placeholder='username'
                className='w-full py-2 px-4 rounded-sm leading-tight bg-gray-200 my-2'
                id='username'
              />
            </div>
            {/* password */}
             <div className="form-group">
              <label htmlFor="password" className='text-sm block tracking-wide mt-2' > password : </label>
              <input
                type="password"
                placeholder='password'
                className='w-full py-2 px-4 rounded-sm leading-tight bg-gray-200 my-2'
                id='password'
              />
            </div>
          
           
            <div className="cont">
              <button
              // style={{background : "linear-gradient(90deg , pink 20%, red 60%)"}}
              
              className='w-full py-2 px-4 bg-gray-300 rounded-lg uppercase tracking-wide my-3
              bg-gradient-to-r from-pink-500 to-red-500 text-white
              ' > Signup </button>
            </div>

          </form>



        </motion.div>
      </AnimatePresence>

    </div>
  )
}
