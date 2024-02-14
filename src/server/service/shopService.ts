import { MenuItem, Shop } from '../../types';
import createApi from '../utils/api';

const api = createApi();

export const fetchShopDetails = async (shop: string) => {
  try {
    return await api.get<Shop>(`/shops/${shop}`);
  } catch (error) {
    console.error('Failed to fetch shop details:', error);
    throw error;
  }
};

export const fetchMenuItems = async (shop: string) => {
  try {
    return await api.get<MenuItem[]>(`/shops/${shop}/menu`);
  } catch (error) {
    console.error('Failed to fetch menu items:', error);
    throw error;
  }
};
