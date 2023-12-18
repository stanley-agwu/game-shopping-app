import { useCallback, useEffect, useState } from 'react';

import { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';

export const useInfiniteScroll = <T>(
  useGetListDataQuery: UseQuery<any>,
  { pageSize = 30, ...queryParameters },
  additionalOptions?: any,
  cache?: boolean,
) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [currentQueryParameters, setCurrentQueryParameters] = useState(queryParameters);
  const [allData, setAllData] = useState<T[]>([]);

  const queryResponse = useGetListDataQuery(
    { ...queryParameters, pageSize, pageNumber },
    additionalOptions,
  );

  console.log({ queryResponse });

  const data = queryResponse?.data as T[];
  const last = !queryResponse.currentData && !queryResponse.error && !queryResponse.isLoading;
  const hasMore = !last;
  console.log({
    data, allData, pageNumber, hasMore, queryResponse,
  });

  useEffect(() => {
    setCurrentQueryParameters(queryParameters);
  }, [JSON.stringify(queryParameters)]);

  useEffect(() => {
    if (data && !queryResponse.isLoading && !queryResponse.error) {
      setAllData((previousData) => [...previousData, ...data]);
    }
  }, [data]);

  useEffect(() => {
    if (!cache && !queryResponse.isUninitialized && !queryResponse.isError) {
      queryResponse.refetch();
    }
  }, [currentQueryParameters, pageNumber]);

  const readMore = useCallback(() => {
    if (!last) {
      setPageNumber((page) => page + 1);
    }
  }, [last, setPageNumber]);

  return {
    ...queryResponse,
    pageNumber,
    data,
    allData,
    readMore,
    hasMore,
    isLoading: queryResponse.isLoading,
    isFetching: queryResponse.isFetching,

  };
};
