import { NextFunction, Request, Response } from "express";
import { renderToString } from "react-dom/server";
import { interpolate } from "../utils/interpolate";
import { App } from "../../client/App/App";
import { fetchMenuItems, fetchShopDetails } from "../service/shopService";
import { Store } from "../../types";
import { AppError } from "../utils/AppError";

export async function bookingHandler(req: Request, res: Response, next: NextFunction) {
  try {
    const { data: shop } = await fetchShopDetails(req.params.shop);
    const { data: menu } = await fetchMenuItems(req.params.shop);

    if (!shop || !menu) {
      throw new AppError('Shop or Menu not found', 404);
    }

    shop.slug = req.params.shop;
    const store: Store = {
      shop,
      menu,
    };
    const markup = renderToString(<App store={store} />);
    const html = interpolate(markup, req.params.shop, store);

    res.send(html);
  } catch (e) {
    next(e);
  }
}
