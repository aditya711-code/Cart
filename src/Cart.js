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
    handleIncreaseQuantity=(product)=>{
        //console.log("Price increase",product);
        const{products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products
        })
    }
    handleDecreaseQuantity=(product)=>{
    
        const{products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty===0)
        {
            return;
        }
        products[index].qty-=1;      
        this.setState({
            
            products
        })
    
    }
    handleDeleteProduct=(id)=>{
        const{products}=this.state;
        const items=products.filter((item)=>item.id!==id);
        this.setState({
            products:items
        })
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
                                onIncreaseQuantity={this.handleIncreaseQuantity}
                                onDecreaseQuantity={this.handleDecreaseQuantity}
                                onDeleteProduct={this.handleDeleteProduct}
                            />
                            )
                    })}
                   
                </div>
        )
    }
}
export default Cart;