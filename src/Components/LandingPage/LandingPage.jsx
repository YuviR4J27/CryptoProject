import React from 'react'
import './landingPage.css'
import Button from '../Common/Button/Button'
import tab from '../../Assets/tab.png'
import {motion} from 'framer-motion'

function LandingPage() {
  return (
    <div className='container'>
        <div className='left-section'>
            <motion.h1 className='heading1' initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.5}}>Track Crypto</motion.h1>
            <motion.h1 className='heading2' initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.75}}>Real Time.</motion.h1>
            <motion.p className='info' initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 1}}>Track crypto through a public API in real time. Visit out Dashboard!!!</motion.p>
            <motion.div className='buttons' initial={{opacity: 0, x: 50}} animate={{opacity: 1, x: 0}} transition={{duration: 0.5, delay: 1.5}}>
                <Button text={'Dashboard'} />
                <Button text={'Share'} outline={true}/>
            </motion.div>
        </div>


        <div className='right-section'>
                <motion.img src={tab} alt="tab-img" className='tab' initial={{y: -10}} animate={{y: 10}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'mirror'}}/>
        </div>
    </div>
  )
}

export default LandingPage