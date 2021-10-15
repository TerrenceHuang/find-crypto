import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import CryptoListItem from "./CryptoListItem";
import CryptoListFooter from "./CryptoListFooter";
import { getCoinsMarkets } from "../utils/CoinGecko";

const CryptoList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(true);

  // TODO: Is there a max number of coin types? don't fetch more than that
  useEffect(() => {
    if (!shouldFetch) return;

    let abortFetch = false;

    const fetchPageAndAppendToData = () => {
      getCoinsMarkets({ vsCurrency: "usd", perPage: 25, page: page })
        .then((response) => {
          if (abortFetch) return;

          page == 1
            ? setData(response.data)
            : setData([...data, ...response.data]);

          setIsLoadingMore(false);
          setIsRefreshing(false);
        })
        .catch((error) => alert(error));
    };

    fetchPageAndAppendToData();
    setShouldFetch(false);

    return () => (abortFetch = true);
  }, [page, isRefreshing]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setPage(1);
    setShouldFetch(true);
  };

  const handleEndReach = () => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);
    setPage(page + 1);
    setShouldFetch(true);
  };

  const renderListItem = ({ item }) => {
    return <CryptoListItem {...item} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListFooterComponent={<CryptoListFooter isLoading={isLoadingMore} />}
      onEndReached={handleEndReach}
      onEndReachedThreshold={0.1}
      initialNumToRender={20}
    />
  );
};

export default CryptoList;
