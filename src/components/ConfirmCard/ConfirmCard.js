import React from "react";
import classes from "./ConfirmCard.module.css";


const ConfirmCard = () => {
  return <div className={classes.wrapper}>
     <div className={classes.cardHeader}>
    
<div className={classes.grid}><div>Item Name</div> <div>Price</div></div>
    
  </div>
  <div className={classes.card}>
    
      
<div className={classes.grid}><div>Data</div> <div>#50,000</div></div>
        
<div className={classes.grid}><div>Data</div> <div>#50,000</div></div>
    
  <hr style={{width:'100%'}}/>
      
<div className={classes.grid}><div>Data</div> <div>#50,000</div></div>
    
  </div>
</div>;
};

export default ConfirmCard;
