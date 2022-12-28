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
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    HStack,
    useMediaQuery,
    VStack,
    useDisclosure,
    Tooltip,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon, ArrowUpDownIcon } from "@chakra-ui/icons";
import { Container, Typography, TextField } from "@material-ui/core";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";

import { useSearchParams } from "react-router-dom";
import LoginModal from "../../components/LoginModal";
import { CryptoState } from "components/CryptoContext";

library.add(faCircleQuestion);

function PriceTable() {
    const navigate = useNavigate();
    const [coins, setCoins] = React.useState([]);
    const [change, setChange] = React.useState("priceChange1h");
    const [smallThan760] = useMediaQuery("(max-width: 768px)");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState("");
    const { currency, symbol } = CryptoState();
    // const [ url, setUrl ] = React.useState("");

    let [searchParams, setSearchParams] = useSearchParams();
    const maxPage = 20;
    const minPage = 1;
    const step = 50;

    const page = Number(searchParams.get("page")) || minPage;
    const setPage = (num) => setSearchParams({ ...searchParams, page: num });

    React.useEffect(() => {
        if (page > maxPage) setPage(maxPage);
        if (page < minPage) setPage(minPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    // React.useEffect(() => {
    //     if (currency === "USD") setUrl(`http://localhost:8082/api/coin/${page}`);
    //     if (currency === "EUR") setUrl(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=50&page=${page}&sparkline=false&price_change_percentage=1h,24h,7d,30d`);
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [currency]);



    React.useEffect(() => {
        const fetchCoins = async () => {
            let url = `http://localhost:8082/api/coin/${page}`;
            if (currency === "EUR") {
                url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=EUR&order=market_cap_desc&per_page=50&page=${page}&sparkline=false&price_change_percentage=1h,24h,7d,30d`;
            }
            const { data } = await axios.get(url);
            if (currency === "USD") {
                setCoins(data.content);
            } else {
                setCoins(data);
            }
            // console.log(data)
          };
        fetchCoins();
    }, [searchParams, page, currency]);


    const handleChangePage = (pageNumber) => {
        setPage(pageNumber);
    };

    const handleChangePrice = (price) => {
        setChange(price);
    };
    const handleNavigate = (id) => {
        navigate(`/price/${id}`);
    };

    
    const handleSearch = () => {
        console.log(coins)
        return coins.filter((coin) => coin.name.toLowerCase().includes(search));
    };


    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const getTimeChange = () => {
        switch (change) {
            case "priceChange1h":
                return "price_change_percentage_1h_in_currency";
            case "priceChange1d":
                return "price_change_percentage_24h_in_currency";
            case "priceChange7w":
                return "price_change_percentage_7d_in_currency";
            case "priceChange30d":
                return "price_change_percentage_30d_in_currency";
            default:
                return "price_change_percentage_1h_in_currency";
        }
    };

    const renderCoinsTable = React.useCallback(() => {
        let labelFDV = (
            <>
                FDV: Fully Diluted Valuation <br />
                FDV = Current Price x Max Supply (or total supply if max supply
                is invalid) <br /> <br />
                The market capitalization (valuation) if the max supply of a
                coin is in circulation. Note that it can take 3, 5, 10 or more
                years before the FDV can be reached, depending on how the
                emission schedule is designed."
            </>
        );
        // console.log(currency)
        // console.log(coins); 
        // console.log(page)

        if (smallThan760) {
            return (
                <Box
                    border="1px solid"
                    borderColor="gray.100"
                    rounded="sm"
                    width="100%"
                    overflowX="auto"
                >
                    <VStack>{renderCoinRowIn760(handleSearch())}</VStack>
                </Box>
            );
        }
        return (
            <Box
                border="1px solid"
                borderColor="gray.100"
                rounded="sm"
                width="100%"
                overflowX="auto"
            >
                <Table variant="simple" size="sm">
                    <Thead>
                        <Tr>
                            <Th>#</Th>
                            <Th>Coin</Th>
                            <Th>Price</Th>
                            <Th>Change</Th>
                            <Th>Chart</Th>
                            <Th>Total Volume</Th>
                            <Th>Market Cap</Th>
                            <Th>Market Cap Rank</Th>
                            <Th>
                                FDV{" "}
                                <Tooltip
                                    label={labelFDV}
                                    fontSize="md"
                                    placement="top"
                                    hasArrow
                                    arrowSize={15}
                                >
                                    <FontAwesomeIcon icon="fas fa-question-circle" />
                                </Tooltip>
                            </Th>
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
                        {renderCoinTr(handleSearch())}
                    </Tbody>
                </Table>
            </Box>
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coins, smallThan760, change, search, currency]);

    const renderCoinRowIn760 = (data) => {
        if (data?.length > 0)
            return data.map((coin) => (
                <HStack
                    justify="space-between"
                    w="100%"
                    p={1}
                    flexBasis={"auto"}
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    key={coin.name}
                    onClick={() => handleNavigate(coin.name)}
                >
                    <HStack
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        maxWidth="50%"
                    >
                        <Image src={coin.icon} boxSize="36px" />
                        <VStack spacing={"1px"} align="start">
                            <Text variant="body1"> {coin.name}</Text>
                            <Text variant="p" color="gray.500">
                                {coin.symbol}
                            </Text>
                        </VStack>
                    </HStack>
                    <HStack
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        maxWidth="50%"
                    >
                        <VStack spacing={"1px"} align="end">
                            <Text variant="p">
                                {symbol}
                                {parseFloat(coin.price).toFixed(3)}
                            </Text>
                            <Text
                                variant="body1"
                                color={
                                    coin[getTimeChange()] < 0
                                        ? "red.400"
                                        : "green.400"
                                }
                            >
                                {coin[getTimeChange()] < 0
                                    ? ""
                                    : coin[getTimeChange()] > 0
                                    ? "+"
                                    : ""}
                                {coin[getTimeChange()]}%
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
            ));
        else
            return Array(step)
                .fill()
                .map((_, index) => index + 1)
                .map((coin) => (
                    <HStack
                        justify="space-between"
                        w="100%"
                        height="51.6px"
                        px={1}
                        flexBasis={"auto"}
                        key={coin}
                        borderBottom="1px solid"
                        borderColor="gray.200"
                    >
                        <HStack width="300px" justify="start" height="100%">
                            <Skeleton
                                width="36px"
                                height="36px"
                                rounded="full"
                                mr="1"
                            />
                            <VStack spacing={"14px"} align="start">
                                <SkeletonText width="40px" noOfLines={1} />
                                <SkeletonText width="30px" noOfLines={1} />
                            </VStack>
                        </HStack>
                        <HStack>
                            <VStack spacing={"5px"} align="end">
                                <SkeletonText width="50px" noOfLines={1} />
                                <SkeletonText width="30px" noOfLines={1} />
                            </VStack>
                        </HStack>
                    </HStack>
                ));
    };

    const renderCoinTr = (data) => {
        if (data?.length > 0) {
            return data.map((coin, index) => {
                const priceChange = parseFloat(coin[getTimeChange()]).toFixed(
                    3
                );
                const fdv =
                    coin.fully_diluted_valuation > 0
                        ? numberWithCommas(
                              coin.fully_diluted_valuation
                                  .toString()
                                  .slice(0, -6)
                          )
                        : 0;
                return (
                    <Tr
                        key={coin.name}
                        onClick={() => handleNavigate(coin.name.toLowerCase())}
                    >
                        <Td>
                            <Text variant="body4">{coin.market_cap_rank}</Text>
                        </Td>
                        <Td>
                            <Flex align="center">
                                <Image src={coin.image} w="36px" h="36px" />
                                <Flex sx={{ "& > *": { ml: "16px" } }}>
                                    <Text
                                        variant="body4"
                                        maxWidth="120px"
                                        overflow="hidden"
                                        whiteSpace="nowrap"
                                        textOverflow="ellipsis"
                                    >
                                        {coin.name}
                                    </Text>
                                    {/* <Text variant="body2">$</Text> */}
                                </Flex>
                            </Flex>
                        </Td>
                        <Td>
                            <Text variant="body4">
                                {symbol}
                                {numberWithCommas(
                                    coin.current_price.toFixed(3)
                                )}
                            </Text>
                        </Td>
                        <Td>
                            <Text
                                variant="body4"
                                color={
                                    priceChange < 0
                                        ? "red.400"
                                        : priceChange > 0
                                        ? "green.400"
                                        : "gray.500"
                                }
                            >
                                {priceChange < 0
                                    ? ""
                                    : priceChange > 0
                                    ? "+"
                                    : ""}
                                {priceChange}
                                {priceChange < 0
                                    ? "%"
                                    : priceChange > 0
                                    ? "%"
                                    : ""}
                            </Text>
                        </Td>
                        <Td>
                            {priceChange < 0 ? (
                                <ArrowDownIcon color="red.400" align="center" />
                            ) : priceChange > 0 ? (
                                <ArrowUpIcon color="green.400" align="center" />
                            ) : (
                                <ArrowUpDownIcon
                                    color="gray.500"
                                    align="center"
                                />
                            )}
                        </Td>
                        <Td>
                            <Text variant="body4">
                                {symbol}
                                {numberWithCommas(
                                    coin.total_volume.toString().slice(0, -6)
                                )}
                                M
                            </Text>
                        </Td>
                        <Td>
                            <Text variant="body4">
                                {symbol}
                                {numberWithCommas(
                                    coin.market_cap.toString().slice(0, -6)
                                )}
                                M
                            </Text>
                        </Td>
                        <Td>
                            <Text variant="body4" textAlign="center">
                                {coin.market_cap_rank}
                            </Text>
                        </Td>
                        <Td>
                            <Text variant="body4">
                                {symbol}
                                {fdv}M
                            </Text>
                        </Td>
                        {/* <Td>
                            <Button
                                colorScheme="blue"
                                size="sm"
                                fontWeight={400}
                                onClick={(e) =>
                                    handleClickTradeButton(e, coin.id)
                                }
                            >
                                trade
                            </Button>
                        </Td> */}
                    </Tr>
                );
            });
        } else {
            return Array(step)
                .fill(0)
                .map((_, index) => {
                    return (
                        <Tr key={index}>
                            <Td>
                                <Flex align="center">
                                    <SkeletonCircle size="8" />
                                    <Flex
                                        sx={{ "& > *": { ml: "16px" } }}
                                        width="50%"
                                        height="36px"
                                        align="center"
                                    >
                                        <SkeletonText
                                            width="170px"
                                            noOfLines={1}
                                        />
                                    </Flex>
                                </Flex>
                            </Td>
                            <Td>
                                <SkeletonText noOfLines={1} width="60px" />
                            </Td>
                            <Td>
                                <SkeletonText noOfLines={1} width="35px" />
                            </Td>
                            <Td>
                                <SkeletonText noOfLines={1} width="25px" />
                            </Td>
                            <Td>
                                <Skeleton
                                    width="40px"
                                    height="25px"
                                    borderRadius="5px"
                                />
                            </Td>
                        </Tr>
                    );
                });
        }
    };

    const renderButton = (num, type = null) => {
        if (type === "forward")
            return (
                <Button
                    minHeight="42px"
                    minWidth="42px"
                    fontSize="12px"
                    rounded="full"
                    colorScheme={page === num ? "blue" : "gray"}
                    onClick={() => handleChangePage(num)}
                >
                    &#10095;
                </Button>
            );
        else if (type === "backward")
            return (
                <Button
                    minHeight="42px"
                    minWidth="42px"
                    fontSize="12px"
                    rounded="full"
                    colorScheme={page === num ? "blue" : "gray"}
                    onClick={() => handleChangePage(num)}
                >
                    &#10094;
                </Button>
            );

        return (
            <Button
                minHeight="42px"
                minWidth="42px"
                fontSize="12px"
                rounded="full"
                colorScheme={page === num ? "blue" : "gray"}
                onClick={() => handleChangePage(num)}
            >
                {num}
            </Button>
        );
    };

    const renderPagination = React.useCallback(() => {
        const backward = page - 1;
        const forward = page + 1;
        return (
            <>
                {backward >= minPage && renderButton(backward, "backward")}
                {backward > minPage && renderButton(minPage)}
                {backward >= minPage && renderButton(backward)}
                {renderButton(page)}
                {forward <= maxPage && renderButton(forward)}
                {forward < maxPage && renderButton(maxPage)}
                {forward <= maxPage && renderButton(forward, "forward")}
            </>
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <>
            <LoginModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Box maxWidth="100vw" p={{ base: "64px 12px", md: "64px 24px" }}>
                <Container style={{ textAlign: "center" }}>
                    <Typography
                        variant="h4"
                        style={{ margin: 5, fontFamily: "Montserrat" }}
                    >
                        Cryptocurrency Prices by Market Cap
                    </Typography>
                    <TextField
                        label="Search For a Crypto Currency.."
                        variant="outlined"
                        style={{ marginBottom: 20, width: "100%" }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {/* {renderSearchInput()} */}
                    <HStack w="100%" justify="start" mb="4" spa={4}>
                        {[
                            "priceChange1h",
                            "priceChange1d",
                            "priceChange7d",
                            "priceChange30d",
                        ].map((date) => (
                            <Button
                                colorScheme={date === change ? "blue" : "gray"}
                                size="sm"
                                rounded="3xl"
                                key={date}
                                fontSize="12px"
                                onClick={() => handleChangePrice(date)}
                            >
                                {date.slice(5)}
                            </Button>
                        ))}
                    </HStack>
                    {renderCoinsTable()}
                </Container>

                <Flex align="center" justify="center" width="100%" mt="20px">
                    <HStack>{renderPagination()}</HStack>
                </Flex>
            </Box>
        </>
    );
}

export default PriceTable;
