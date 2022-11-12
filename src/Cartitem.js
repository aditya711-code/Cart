import React from "react";
class Cartitem extends  React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                   <img style={styles.image}></img>

                </div>
                <div className="right-block">
                    <div style={{fontSize:40}}>Phone</div>
                    <div style={{color:'grey'}}>Rs 999</div>
                    <div style={{color:'#777'}}>Qty:1</div>
                    <div className="cart-item-actions">
                        {}
                    </div>

                </div>
            </div>
        );

    }
}const styles={
    image:{
      height:110,
      width:110,
      borderRadius:4,
      background:'#CCC'
  
    }
  }
export default Cartitem