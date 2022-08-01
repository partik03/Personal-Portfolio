import React, { useState } from 'react'
import styles from "../styles/Corousel.module.css"
export const CorouselItem=({children, width})=>{
return(
    <div className={styles.corousel_item} style={{width:width}}>
        {children}
    </div>
)
}
const Corousel = ({children}) => {
    const [active, setActive] = useState(0)
    function updateIndex(newIndex) {
            if(newIndex < 0){
                newIndex = 0;
        }
        else if(newIndex >= React.Children.count(children)){
            newIndex = React.Children.count(children) -1;
        }
        setActive(newIndex);
    }
  return (
    <div className={styles.corousel}>
<div className={styles.inner} style={
    {
        transform:`translateX(-${active * 100}%)`
    }
}>
    {
        React.Children.map(children ,(child,index)=>{
            return React.cloneElement(child,{width:"100%"});
        })
    }
</div>
<div className={styles.indicators}>
    <button className={styles.left}
    onClick={()=>{updateIndex(active-1)}}
    >
        &lt;Prev
    </button>
    <button className={styles.right}
    onClick={()=>{updateIndex(active+1)}}>
    Next&gt;
    </button>
</div>
    </div>
  )
}

export default Corousel