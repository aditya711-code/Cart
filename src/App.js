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
            img:'https://m.media-amazon.com/images/I/61FFBTzKiUL._UX679_.jpg',
            id:1
        },
        {
            prices:19999,
            title:"Mobile Phone",
            qty:1,
            img:'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            id:2
        },
        {
            prices:49999,
            title:"Laptop",
            qty:1,
            img:'https://m.media-amazon.com/images/I/61XJ6xrICAL._SX679_.jpg',
            id:3
        },
        
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
getPriceTotal=()=>{
  const{products}=this.state;
  let cartTotal=0;
  products.map(product=>{
    cartTotal=cartTotal+(product.qty*product.prices);
  });
  return cartTotal;
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
      <div style={styles.footer}>TOTAL:{this.getPriceTotal()}</div>
    </div>
  );
}
}
const styles={
  footer:{
    position:'fixed',
    bottom:'0',
    width:'100%',
    height:35,
    backgroundColor:'#4267b2',
    padding:'10',
    textAlign:'center',
    fontSize:'45',
    color:'white'
    

  }
}
export default App;
