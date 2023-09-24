export interface IGame {
  gameID: string;
  dealID: string;
  title: string;
  isOnSales: number;
  storeID: string;
  thumb: string;
  steamRatingText: string;
  steamRatingCount: number;
  steamRatingPercent: number;
  normalPrice: number;
}