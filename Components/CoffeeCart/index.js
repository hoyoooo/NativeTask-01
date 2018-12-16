import React, { Component } from "react";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";
//cart store
import CartStore from "../../store/cartStore";
import CoffeStore from "../../store/coffeStore"

class CoffeeCart extends Component {
  constructor(props) {
    super(props);
    // this.state ={list = CartStore.map(CartStore.coffeeshops);
  }
  render() {
    let coffeeshops = this.state.list;
    let content;
    if (coffeeshops) {
      content = CoffeStore.coffeeshops.map((item, index) => (
        <CartItem item={item} key={index} />
      ));
    }

    return (
      <List>
        {content}
        <Button full danger>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default CoffeeCart;
