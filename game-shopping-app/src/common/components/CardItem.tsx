import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import { IGame } from '../models';
import ContentBox, { GridContent } from './ContentBox';

interface CardItemProp {
  game: IGame;
}

const CardItem = ({ game }: CardItemProp) => {
  return (
    <GridContent>
      <CardActionArea>
        <ContentBox className='h-32 flex items-stretch'>
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
          <Typography gutterBottom variant='h5' component='div'>
            {game.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {game.steamRatingText}
          </Typography>
        </ContentBox>
      </CardActionArea>
      <ContentBox className='px-0 py-4'>
        <Button size='small' color='primary'>
          Add to cart
        </Button>
      </ContentBox>
    </GridContent>
  );
};

export default CardItem;
