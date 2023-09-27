import { IGame } from '@/common/models';
import CardItem from '@/modules/shop/components/components/CardItem';

interface IGameList {
  games: IGame[] | undefined;
}

const ShopItem = ({ games }: IGameList) => {
  return games?.map((game) => <CardItem game={game} key={game.dealID} />);
};

export default ShopItem;
