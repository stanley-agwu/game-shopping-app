export interface IGame {
  gameID: string;
  dealID: string;
  title: string;
  isOnSales: string;
  storeID: string;
  thumb: string;
  steamRatingText: string;
  steamRatingCount: string;
  steamRatingPercent: string;
  normalPrice: string;
}

export interface ICartItem {
  id: string;
  title: string;
  quantity: number;
  price: number;
  thumbnail: string;
}