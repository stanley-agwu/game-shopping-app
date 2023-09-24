import { useGetAllGamesQuery } from '@/common/api/services/gameApi';
import ContentBox, { GridContainer } from '@/common/components/ContentBox';
import ShopItem from './ShopItem';
import Loader from '@/common/components/Loader';

const Shop = () => {
  const { isLoading, data } = useGetAllGamesQuery();

  if (isLoading) {
    return (
      <ContentBox className=' h-96 flex items-center justify-center'>
        <Loader />
      </ContentBox>
    );
  }
  return (
    <GridContainer>
      <ShopItem games={data} />
    </GridContainer>
  );
};

export default Shop;
