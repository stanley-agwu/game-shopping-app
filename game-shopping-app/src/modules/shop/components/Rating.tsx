import RateIcon from '@/assets/star-empty.svg';
import RateFillIcon from '@/assets/star-filled.svg';

import { getRating } from '../utils/shop-utils';
import { v4 as uuidv4 } from 'uuid';

interface RatingProps {
  rate: number;
  reviews: string;
}

function Rating({ rate, reviews }: RatingProps) {
  const rating = getRating(rate);
  return (
    <div className="flex py-2 items-center">
      {[...Array(5)].map((_, idx) =>
        rating >= idx ? (
          <img src={RateFillIcon as string} key={uuidv4()} alt="Rating filled star" />
        ) : (
          <img src={RateIcon as string} key={uuidv4()} alt="Rating empty star" />
        )
      )}
      <span className="ml-4 font-medium text-sm">{reviews} reviews</span>
    </div>
  );
}

export default Rating;
