import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Image,
  Text,
  VStack,
  Grid,
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  HStack,
  Flex,
  Button,
  Stat,
  StatLabel,
  StatHelpText,
  StatArrow,
  useDisclosure,
  Link as LinkChakra
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { ReactComponent as DiamondIcon } from "assets/icons/diamond.svg";

import currencies from "../../util/currencies";
import Search from "../../components/Search";
import Chart from "./Chart";
import LoginModal from "../../components/LoginModal";
import { CryptoState } from "components/CryptoContext";

function Price() {
  const [exchange, setCoin] = React.useState({});
  const { currency, symbol } = CryptoState();
  const [currencyValue, setCurrencyValue] = React.useState(currency);
  const [isLoading, setIsLoading] = React.useState(true);
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    if (!exchange.price) setIsLoading(true);
    const abortController = new AbortController();
    const fetchCoins = async () => {
      const target = `https://api.coinstats.app/public/v1/coins/${id}?currency=${currencyValue}`;
      const config = { signal: abortController.signal, method: "GET" };
      const data = await fetch(target, config);
      const { exchange } = await data.json();
      setCoin(exchange);
      setIsLoading(false);
    };
    fetchCoins();
    setCurrencyValue(currency)
    console.log(exchange);
    console.log(currency);
    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, currency]);

  const handleClickBuyButton = (e) => {
    onOpen();
  };
  

  const renderTop = React.useCallback(
    () => (
      <VStack align="stretch" p={6} gap="2">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <Link to="/prices">Price Charts</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to={`/price/${id}`}>{exchange.name}</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={5}>
          <GridItem>
            <HStack spacing={3}>
              <Image src={exchange.icon} boxSize="58px" />
              <VStack align="stretch">
                <Text variant="h2" as="h2" fontWeight={500}>
                  {exchange.name} price
                </Text>
                <Text variant="body2" as="span" color="gray.500">
                  {exchange.symbol} / {currencyValue}
                </Text>
              </VStack>
            </HStack>
          </GridItem>
          <GridItem h="100%">
            <Flex w="100%" align="center" justify="end" h="100%">
              <Search
                data={currencies}
                setState={setCurrencyValue}
                defaultValue={currencyValue}
              />
            </Flex>
          </GridItem>
        </Grid>
      </VStack>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [exchange, currencyValue, currency]
  );

  if (isLoading) return <>Loading</>;
  return (
    <>
      <LoginModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      {renderTop()}
      <Grid templateColumns={{ base: "1fr", md: "1fr 350px" }} gap={5} p={6}>
        <GridItem>
          <Chart price={exchange.price} currency={currencyValue} symbol={exchange.symbol} />
          <Text variant="body2" py={6}>
            Market stats
          </Text>

          <VStack
            w="100%"
            spacing={3}
            sx={{ "&  .chakra-stat *": { overflow: "hidden" } }}
          >
            <HStack wrap={"wrap"} w="100%">
              <Stat>
                <StatLabel>Price</StatLabel>
                <StatHelpText>{exchange.price.toFixed(2)}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Price Btc</StatLabel>
                <StatHelpText>
                  {exchange.priceBtc.toString().slice(0, 8)}
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Volume</StatLabel>
                <StatHelpText>
                  {exchange.volume.toString().slice(0, 8)}
                </StatHelpText>
              </Stat>
            </HStack>
            <HStack wrap={"wrap"} w="100%">
              <Stat>
                <StatLabel>Change 1h</StatLabel>
                <StatHelpText>
                  <StatArrow
                    type={exchange["priceChange1h"] > 0 ? "increase" : "decrease"}
                  />
                  {exchange["priceChange1h"].toFixed(2)}%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Change 1d</StatLabel>
                <StatHelpText>
                  <StatArrow
                    type={exchange["priceChange1d"] > 0 ? "increase" : "decrease"}
                  />
                  {exchange["priceChange1d"].toFixed(2)}%
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Change 1w</StatLabel>
                <StatHelpText>
                  <StatArrow
                    type={exchange["priceChange1w"] > 0 ? "increase" : "decrease"}
                  />
                  {exchange["priceChange1w"].toFixed(2)}%
                </StatHelpText>
              </Stat>
            </HStack>
            <HStack wrap={"wrap"} w="100%">
              <Stat>
                <StatLabel>Market Cap</StatLabel>
                <StatHelpText>{exchange.marketCap.toFixed(3)}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Available Supply</StatLabel>
                <StatHelpText>{exchange.availableSupply}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Rank</StatLabel>
                <StatHelpText>#{exchange.rank}</StatHelpText>
              </Stat>
            </HStack>
          </VStack>
        </GridItem>
        <GridItem mt={{ base: 5, md: 0 }}>
          <VStack
            w="100%"
            align="center"
            textAlign="center"
            border="1px solid"
            borderColor="gray.300"
            p={5}
            rounded="md"
            spacing={4}
          >
            {/* <DiamondIcon /> */}
            <Image src={exchange.icon} boxSize="100px" />
            <Text variant="h3">{exchange.name}</Text>
            {/* <Text variant="p" fontWeight={400}>
              Create a Coinbase account to buy and sell {exchange.name} on the most
              secure crypto exchange.
            </Text> */}
            <LinkChakra href={exchange.websiteUrl}>
              <Button
                variant="primary"
                size="xl"
                w="100%"
                // onClick={handleClickBuyButton}
              >
                Link {exchange.name}
              </Button>
            </LinkChakra>
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
}

export default Price;
