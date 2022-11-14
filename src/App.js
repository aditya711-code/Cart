import Cartitem from "./Cartitem";
import Cart from "./Cart";
import Navbar from "./Navbar"
import { render } from "@testing-library/react";
import React from "react";

class App extends React.Component{
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
getCartCount=()=>{
  const{products}=this.state;
  let count=0;
  products.forEach(product=> {
    count+=product.qty
  });
  return count;
}
render(){
  const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products={products} 
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
      />
    </div>
  );
}
}

export default App;
