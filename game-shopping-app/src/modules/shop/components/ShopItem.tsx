import { IGame } from '@/common/models';
import CardItem from '@/common/components/CardItem';

interface IGameList {
  games: IGame[] | undefined;
}

const ShopItem = ({ games }: IGameList) => {
  return games?.map((game) => <CardItem game={game} key={game.dealID} />);
};

export default ShopItem;
