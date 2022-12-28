import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Image,
  Text,
  Button,
  Box,
  Link,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon, ArrowUpDownIcon } from "@chakra-ui/icons";

function PriceTable() {
  const navigate = useNavigate();
  const [coins, setCoins] = React.useState([]);

  const handleNavigate = (id) => {
    navigate(`/price/${id}`, { replace: true });
  };
  const handleClickTradeButton = (e, id) => {
    e.stopPropagation();
  };
  React.useEffect(() => {
    const abort = new AbortController();
    const fetchCoins = async () => {
      fetch(
        "https://api.coinstats.app/public/v1/coins?skip=0&limit=4&currency=EUR",
        {
          method: "GET",
          signal: abort.signal,
        }
      )
        .then((response) => response.json())
        .then((response) => setCoins(response.coins));
    };
    fetchCoins();
    return () => {
      abort.abort();
    };
  }, []);

  const renderCoins = () => {
    if (coins.length > 0) {
      return coins.map((coin, index) => (
        <Tr key={coin.id} onClick={() => handleNavigate(coin.id)}>
          <Td>
            <Text variant="body2">{index + 1}</Text>
          </Td>
          <Td>
            <Flex align="center">
              <Image src={coin.icon} w="36px" h="36px" />
              <Flex sx={{ "& > *": { ml: "16px" } }}>
                <Text variant="body2">{coin.name}</Text>
                <Text variant="body2">{coin.symbol}</Text>
              </Flex>
            </Flex>
          </Td>
          <Td>
            <Text variant="body2">${parseFloat(coin.price).toFixed(3)}</Text>
          </Td>
          <Td>
            <Text
              variant="body2"
              color={coin.priceChange1h < 0 ? "red.400" : "green.400"}
            >
              {coin.priceChange1h < 0 ? "" : coin.priceChange1h > 0 ? "+" : ""}
              {coin.priceChange1h}%
            </Text>
          </Td>
          <Td>
            {coin.priceChange1h < 0 ? (
              <ArrowDownIcon color="red.400" />
            ) : coin.priceChange1h > 0 ? (
              <ArrowUpIcon color="green.400" />
            ) : (
              <ArrowUpDownIcon />
            )}
          </Td>
          <Td>
            <Link
              href={coin.websiteUrl}
              target="_blank"
              onClick={(e) => handleClickTradeButton(e, coin.id)}
            >
              <Button colorScheme="green">Site</Button>
            </Link>
          </Td>
        </Tr>
      ));
    } else {
      return Array(4)
        .fill(0)
        .map((_, index) => {
          return (
            <Tr key={index}>
              <Td>
                <Skeleton borderRadius="5px" width="25px" height="25px" />
              </Td>
              <Td>
                <Flex align="center">
                  <SkeletonCircle size="12" />
                  <Flex sx={{ "& > *": { ml: "16px" } }}>
                    <SkeletonText width="120px" noOfLines={1} />
                  </Flex>
                </Flex>
              </Td>
              <Td>
                <SkeletonText noOfLines={1} />
              </Td>
              <Td>
                <SkeletonText noOfLines={1} />
              </Td>
              <Td>
                <SkeletonText noOfLines={1} />
              </Td>
              <Td>
                <Skeleton width="60px" height="35px" borderRadius="5px" />
              </Td>
            </Tr>
          );
        });
    }
  };
  return (
    <Box maxWidth="100vw" overflowX="auto">
      <Table variant="simple" border="1px solid" borderColor="gray.100">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Change</Th>
            <Th>Chart</Th>
            <Th>Detail</Th>
          </Tr>
        </Thead>
        <Tbody
          sx={{
            "& > tr": {
              cursor: "pointer",
              "&:hover": {
                bg: "gray.50",
              },
            },
          }}
        >
          {renderCoins()}
        </Tbody>
      </Table>
    </Box>
  );
}

export default PriceTable;
