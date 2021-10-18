import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import CryptoListItem from "./CryptoListItem";
import CryptoActivityIndicator from "./CryptoActivityIndicator";
import { getCoinsMarkets } from "../utils/CoinGecko";
import CryptoListHeader from "./CryptoListHeader";

const CryptoList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshTime, setRefreshTime] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(true);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const [direction, setDirection] = useState("asc");

  // TODO: Is there a max number of coin types? don't fetch more than that
  useEffect(() => {

    let abortFetch = false;

    const fetchPageAndAppendToData = () => {
      getCoinsMarkets({
        vsCurrency: "usd",
        perPage: 25,
        page: page,
        order:
          selectedColumn === null
            ? undefined
            : `${selectedColumn}_${direction}`,
      })
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

    return () => (abortFetch = true);
  }, [page, refreshTime, selectedColumn, direction]);

  const renderListItem = ({ item }) => {
    return <CryptoListItem {...item} />;
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setRefreshTime(new Date().toString());
    setPage(1);
  };

  const handleEndReach = () => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);
    setPage(page + 1);
  };

  const onHeaderColumnPress = (key) => {
    if (key === selectedColumn) {
      direction === "asc" ? setDirection("desc") : setDirection("asc");
    } else {
      setSelectedColumn(key);
      setDirection("asc");
    }

    setData([]);
    setPage(1);
  };

  return data.length === 0 ? (
    <CryptoActivityIndicator isLoading={true} />
  ) : (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
      ListHeaderComponent={
        <CryptoListHeader
          selectedColumn={selectedColumn}
          direction={direction}
          onColumnPress={onHeaderColumnPress}
          onSyncPress={() => {
            setData([]);
            handleRefresh();
          }}
        />
      }
      stickyHeaderIndices={[0]}
      ListFooterComponent={
        <CryptoActivityIndicator isLoading={isLoadingMore} />
      }
      onEndReached={handleEndReach}
      onEndReachedThreshold={0.5}
      initialNumToRender={20}
    />
  );
};

export default CryptoList;
