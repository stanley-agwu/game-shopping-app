import { CardActionArea } from '@mui/material';
import { IGame } from '../models';
import ContentBox, { GridContent } from './ContentBox';
import { formatCurrency } from '@/common/lib/utils';
import Rating from '@/modules/shop/components/components/Rating';
import { Button } from './Button';

interface CardItemProp {
  game: IGame;
}

const CardItem = ({ game }: CardItemProp) => {
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
          <Button variant='default' size='lg'>
            Add to cart
          </Button>
        </ContentBox>
      </ContentBox>
    </GridContent>
  );
};

export default CardItem;
