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

  const gameIdsConfig = allData.reduce(
    (cum: { [key: string]: string }, curr: IGame) => ({ ...cum, [curr.gameID]: curr.dealID }),
    {}
  );
  const filterData = allData.filter((game) => gameIdsConfig[game.gameID] === game.dealID);

  return (
    <GridContainer>
      <InfiniteScroll
        dataLength={filterData?.length || 0}
        next={readMore}
        hasMore={hasMore}
        loader={<Loader />}
        className="flex flex-wrap content-center"
      >
        <ShopItem className="w-full" games={filterData} />
      </InfiniteScroll>
    </GridContainer>
  );
}

export default Shop;
