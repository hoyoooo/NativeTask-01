import React, { Component } from "react";
import { observer } from "mobx-react";
// NativeBase Components
import { List, Content } from "native-base";

// Store

// Component
import CoffeeItem from "./CoffeeItem";
import CoffeStore from "../../store/coffeStore";

class CoffeeList extends Component {
  render() {
    let ListItems;
    if (CoffeStore.coffeeshops) {
      ListItems = CoffeStore.coffeeshops.map(coffeeShop => (
        <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
      ));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}


export default observer(CoffeeList);
