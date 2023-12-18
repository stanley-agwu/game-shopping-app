/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import RateIcon from '@/assets/star-empty.svg';
import RateFillIcon from '@/assets/star-filled.svg';

import { getRating } from '../../utils/shop-utils';

interface RatingProps {
  rate: number;
  reviews: string;
}

function Rating({ rate, reviews }: RatingProps) {
  const rating = getRating(rate);
  return (
    <div className="flex py-2 items-center">
      {[...Array(5)].map((_, idx) => (rating > idx ? (
        <img src={RateFillIcon} key={idx} />
      ) : (
        <img src={RateIcon} key={idx} />
      )))}
      <span className="ml-4 font-medium text-sm">
        {reviews}
        {' '}
        reviews
      </span>
    </div>
  );
}

export default Rating;
