import { IGame } from '@/common/models';
import CardItem from '@/modules/shop/components/CardItem';

interface IGameList {
  games: IGame[] | undefined;
  className?: string;
}

const ShopItem = ({ games, className }: IGameList) =>
  games?.map((game) => <CardItem className={className} game={game} key={game.gameID} />);

export default ShopItem;
