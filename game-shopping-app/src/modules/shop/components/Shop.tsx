import InfiniteScroll from 'react-infinite-scroll-component';

import { gameApiService } from '@/common/api/services/gameApiService';
import ContentBox, { GridContainer } from '@/common/components/ContentBox';
import Loader from '@/common/components/Loader';
import { useInfiniteScroll } from '@/common/hooks/useInfiniteScroll';
import { IGame } from '@/common/models';

import ShopItem from './ShopItem';

function Shop() {
  const { isLoading, allData, readMore, hasMore } = useInfiniteScroll<IGame>(
    gameApiService.useGetAllGamesQuery,
    { sortBy: 'savings' }
  );

  if (isLoading) {
    return (
      <ContentBox className="h-96 flex items-center justify-center">
        <Loader />
      </ContentBox>
    );
  }
  console.log({ allData });
  return (
    <GridContainer>
      <InfiniteScroll
        dataLength={allData?.length || 0}
        next={readMore}
        hasMore={hasMore}
        loader={<Loader />}
        scrollThreshold={1.0}
        className="flex flex-wrap content-center"
      >
        <ShopItem className="w-full" games={allData} />
      </InfiniteScroll>
    </GridContainer>
  );
}

export default Shop;
