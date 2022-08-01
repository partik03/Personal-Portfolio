import React from 'react'
import styles from '../styles/Home.module.css'
function Card(props) {
  return (
    <div className={styles.card}>
        <div className={styles.card_icon}>
    <props.icon style={{fontSize:'8vw'}}/>
        </div>
    <h3>{props.title}</h3>
    <p>{props.details}</p>
    </div>
  )
}

export default Card