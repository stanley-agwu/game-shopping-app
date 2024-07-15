import { IGame } from '@/common/models';
import CardItem from '@/modules/shop/components/CardItem';
import { v4 as uuidv4 } from 'uuid';

interface IGameList {
  games: IGame[] | undefined;
  className?: string;
}

const ShopItem = ({ games, className }: IGameList) =>
  games?.map((game) => <CardItem className={className} game={game} key={uuidv4()} />);

export default ShopItem;
