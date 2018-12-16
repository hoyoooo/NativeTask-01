import { decorate, observable } from "mobx";

class CartStore {
  constructor() {
    this.orderList = null;
  }
}

decorate(CartStore, {
  list: observable
});

export default new CartStore();