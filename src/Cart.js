import React from "react";
import Cartitem from "./Cartitem";
class Cart extends  React.Component{
    constructor(){
        super();
        this.state={
           products:[ 
            {
                prices:999,
                title:"Watch",
                qty:1,
                img:'alt',
                id:1
            },
            {
                prices:19999,
                title:"Mobile Phone",
                qty:1,
                img:'alt',
                id:2
            },
            {
                prices:49999,
                title:"Laptop",
                qty:1,
                img:'alt',
                id:3
            }
        ]
        }
        //this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    render(){
        const {products}=this.state;
        return(
                <div className="cart">
                    {products.map((product)=>{
                            return (
                            <Cartitem 
                                product={product} 
                                key={product.id}
                            />
                            )
                    })}
                   
                </div>
        )
    }
}
export default Cart;