import { MenuItem, Shop } from "../../../types";

export class PartySize {
  private shop: Shop;

  private menu: MenuItem[];

  private minPeople = 1;

  private maxPeople = 10;

  constructor(shop: Shop, menu: MenuItem[]) {
    this.shop = shop;
    this.menu = menu;
  }

  getMinNumPeople = (): number => {
    return this.shop.minNumPeople ?? this.minPeople;
  }

  getMaxNumPeople = (): number => {
    return this.shop.maxNumPeople ?? this.maxPeople;
  }

  getShowBaby = (): boolean => {
    return this.shop.showBaby;
  }

  getShowChild = (): boolean => {
    return this.shop.showChild;
  }

  getShowSenior = (): boolean => {
    return this.shop.showSenior;
  }

  getIsGroupOrder = (): boolean => {
    return this.menu.some((item: MenuItem) => {
      return item.isGroupOrder;
    });
  }

  getMinOrderQty = (): number => {
    let minOrderQty = Infinity;
    this.menu.forEach((item: MenuItem) => {
      if (item.minOrderQty && item.minOrderQty < minOrderQty && item.minOrderQty >= this.minPeople) {
        minOrderQty = item.minOrderQty;
      }
    });
    return minOrderQty !== Infinity ? Math.floor(minOrderQty) : this.minPeople;
  }

  getMaxOrderQty = (): number => {
    let maxOrderQty = 0;
    this.menu.forEach((item: MenuItem) => {
      if (item.maxOrderQty && item.maxOrderQty > maxOrderQty && item.maxOrderQty <= this.maxPeople) {
        maxOrderQty = item.maxOrderQty;
      }
    });
    return maxOrderQty !== 0  ? Math.floor(maxOrderQty) : this.maxPeople;
  }
}
