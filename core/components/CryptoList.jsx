import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

import CryptoListItem from "./CryptoListItem";
import CryptoListFooter from "./CryptoListFooter";
import { getCoinsMarkets } from "../utils/CoinGecko";

const CryptoList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(true);

  // TODO: Is there a max number of coin types? don't fetch more than that
  useEffect(() => {
    const fetchPageAndAppendToData = () => {
      getCoinsMarkets({ vsCurrency: "usd", perPage: 25, page: page })
        .then((response) => {
          page == 1
            ? setData(response.data)
            : setData([...data, ...response.data]);

          setIsLoadingMore(false);
        })
        .catch((error) => alert(error));
    };

    fetchPageAndAppendToData();

  }, [page]);

  const handleEndReach = () => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);
    setPage(page + 1);
  };

  const renderListItem = ({ item }) => {
    return <CryptoListItem {...item} />;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderListItem}
      ListFooterComponent={<CryptoListFooter isLoading={isLoadingMore} />}
      onEndReached={handleEndReach}
      onEndReachedThreshold={0.1}
      initialNumToRender={20}
    />
  );
};

export default CryptoList;
