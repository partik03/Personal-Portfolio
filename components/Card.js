import React from 'react'
import styles from '../styles/Home.module.css'
import {motion} from 'framer-motion'
function Card(props) {
  return (
    <motion.div className={styles.card}>
        <motion.div
        initial={{opacity:0,x:100}}
        whileInView={{opacity:1,x:0}}
        viewport={{amount:0.2}}
        transition={{delay:3.5,type:"spring",stiffness:120,bounce:0.8,duration:1}}
        className={styles.card_icon}>

    <props.icon style={{fontSize:'8vw'}}/>
        </motion.div>
    <motion.h3
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1,y:0}}
    transition={{delay:4.5,type:"spring",stiffness:120,bounce:0.8,duration:1}}
    >{props.title}</motion.h3>
    <motion.p
    initial={{opacity:0,y:-100}}
    whileInView={{opacity:1,y:0}}
    transition={{delay:5,type:"spring",stiffness:120,bounce:0.8,duration:1}}
    >{props.details}</motion.p>
    </motion.div>
  )
}

export default Card