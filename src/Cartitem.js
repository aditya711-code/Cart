import React from "react";
import Cart from "./Cart";
const Cartitem=(props)=>{
   
    
    
    
      
        const{prices,title,qty}=props.product;
        const{product,onIncreaseQuantity,onDecreaseQuantity, onDeleteProduct}=props;
        return (
            <div className="cart-item">
                <div className="left-block">
                   <img style={styles.image}/>

                </div>
                <div className="right-block">
                   
                    <div style={{fontSize:30}}>{title}</div>
                    <div style={{color:'grey'}}>Rs{prices}</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className="cart-item-actions">
                        {}
                        <img alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={()=>onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/1000_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                            onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/3405/3405244.png"
                            onClick={()=>onDeleteProduct(product.id)}
                        />
                    </div>

                </div>
            </div>
        );

    
}
const styles={
    image:{
      height:110,
      width:110,
      borderRadius:4,
      background:'#CCC'
  
    }
  }
export default Cartitem