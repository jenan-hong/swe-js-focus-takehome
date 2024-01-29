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
    return this.menu[0]?.isGroupOrder;
  }

  getMinOrderQty(): number {
    return this.menu[0]?.minOrderQty ?? this.minPeople;
  }

  getMaxOrderQty(): number {
    return this.menu[0]?.maxOrderQty ?? this.maxPeople;
  }
}
