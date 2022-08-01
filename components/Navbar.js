import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useRouter } from 'next/router';
import Link from "next/link"
function Navbar() {
  const [active, setActive] = useState(false)
  return (
    <>
    <nav className={styles.navbar}>
    <div className={styles.nav_logo}>
    Partik 
    </div>
    <div className={styles.nav_links}>
    <ul>
           <li onClick={(e)=> {console.log(e)}}><Link href="#home"><a>Home</a></Link></li>
           <li><Link href="#about"><a>About</a></Link></li>
           <li><Link href="#projects">Projects</Link></li>
           <li><Link href="/"><a>Resume</a></Link></li>
    </ul>
    </div>
    <div className={styles.nav_btns}>
    <button>DownLoad CV</button>
    </div>
<AiOutlineMenuUnfold style={{
  fontSize:'2rem',
  // display:"none",
  cursor:"pointer"
  

}} className={styles.menu_icon}
onClick={()=>{setActive(!active)}}
/>
      </nav>
      <div className={styles.nav_box} id={active ?styles.nav_box_active :""}>
      <div className={styles.nav_box_links}>
          {/* <ul> */}
           <div><Link href="#home"><a>Home</a></Link></div>
           <div><Link href="#about"><a>About</a></Link></div>
           <div><Link href="#projects">Projects</Link></div>
           <div><Link href="/"><a>Resume</a></Link></div>
          {/* </ul> */}
          </div>
          <div className={styles.nav_box_btns}>
          <button>DownLoad CV</button>
          </div>
      </div>
      </>
  )
}

export default Navbar