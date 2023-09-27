import { CardActionArea } from '@mui/material';
import { IGame } from '@/common/models';
import ContentBox, { GridContent } from '@/common/components/ContentBox';
import { getItemFromCart, formatCurrency } from '@/common/lib/utils';
import Rating from '@/modules/shop/components/components/Rating';
import { Button, ButtonVariantsEnum } from '@/common/components/Button';
import { useShopContext } from '@/common/context/hook';
import { ActionTypeEnum } from '@/common/lib/action-types-enum';

interface CardItemProp {
  game: IGame;
}

const CardItem = ({ game }: CardItemProp) => {
  const { cartItems, dispatch } = useShopContext();
  const gameItemFromCart = getItemFromCart(game.dealID, cartItems);

  const handleAddToCart = () => {
    const gamePayload = {
      id: game.dealID,
      quantity: 1,
      price: Number(game.normalPrice),
    };
    return gameItemFromCart
      ? dispatch({
          type: ActionTypeEnum.removeCartItem,
          payload: gameItemFromCart,
        })
      : dispatch({
          type: ActionTypeEnum.increaseCartItem,
          payload: gamePayload,
        });
  };

  return (
    <GridContent>
      <ContentBox className='border-2 border-slate-900 w-full p-4 rounded-lg'>
        <CardActionArea>
          <ContentBox className='h-32 flex items-stretch border-2 border-slate-900'>
            <img
              src={game.thumb}
              alt={game.title}
              width='100%'
              style={{
                objectFit: 'cover',
              }}
              className='min-h-32 max-h-32'
            />
          </ContentBox>
          <ContentBox className='px-0 py-4'>
            <div className='h-14 min-h-14 mb-3'>
              <header className='text-lg font-medium'>{game.title}</header>
            </div>
            <div className='text-md font-medium mb-2'>
              {formatCurrency(Number(game.normalPrice))}
            </div>
            <Rating
              rate={Number(game.steamRatingPercent)}
              reviews={game.steamRatingCount}
            />
          </ContentBox>
        </CardActionArea>
        <ContentBox className='px-0 py-2'>
          <Button
            size='lg'
            variant={
              gameItemFromCart
                ? ButtonVariantsEnum.destructive
                : ButtonVariantsEnum.default
            }
            onClick={handleAddToCart}
          >
            {gameItemFromCart ? 'Remove from cart' : 'Add to cart'}
          </Button>
        </ContentBox>
      </ContentBox>
    </GridContent>
  );
};

export default CardItem;
