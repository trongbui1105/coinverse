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
    Link,
    Progress,
} from "@chakra-ui/react";
import { Container, TextField } from "@material-ui/core";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { useSearchParams } from "react-router-dom";
import LoginModal from "../../components/LoginModal";

library.add(faCircleQuestion);

function ExchangeTable() {
    const navigate = useNavigate();
    const [exchanges, setExchanges] = React.useState([]);
    const [smallThan760] = useMediaQuery("(max-width: 768px)");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState("");

    let [searchParams, setSearchParams] = useSearchParams();
    const maxPage = 10;
    const minPage = 1;
    const step = 50;

    const page = Number(searchParams.get("page")) || minPage;
    const setPage = (num) => setSearchParams({ ...searchParams, page: num });

    React.useEffect(() => {
        if (page > maxPage) setPage(maxPage);
        if (page < minPage) setPage(minPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);


    React.useEffect(() => {
        const abort = new AbortController();
        const fetchExchanges = async () => {
            setExchanges([]);
            fetch(
                `https://api.coingecko.com/api/v3/exchanges?per_page=50&page=${page}`,
                {
                    method: "GET",
                    signal: abort.signal,
                }
            )
                .then((response) => response.json())
                .then((response) => setExchanges(response));
        };
        fetchExchanges();
        return () => {
            abort.abort();
        };
    }, [searchParams, page]);


    const handleChangePage = (pageNumber) => {
        setPage(pageNumber);
    };

    const handleNavigate = (id) => {
        navigate(`/exchange/${id}`);
    };

    const handleSearch = () => {
        return exchanges.filter((exchange) =>
            exchange.name.toLowerCase().includes(search)
        );
    };

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };


    const renderExchangesTable = React.useCallback(() => {
        // console.log(handleSearch());
        let labelTrustScore = (
            <>
                Trust Score is a rating algorithm developed by CoinGecko to
                evaluate the legitimacy of an exchange’s trading volume. Trust
                Score is calculated on a range of metrics such as liquidity,
                scale of operations, cybersecurity score, and more.
            </>
        );
        if (smallThan760) {
            return (
                <Box
                    border="1px solid"
                    borderColor="gray.100"
                    rounded="sm"
                    width="100%"
                    overflowX="auto"
                >
                    <VStack>{renderExchangesRowIn760(handleSearch())}</VStack>
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
                            <Th>Exchange</Th>
                            <Th>Exchange Trade Volume (24h)</Th>
                            <Th>
                                Trust Score{" "}
                                <Tooltip
                                    label={labelTrustScore}
                                    fontSize="md"
                                    placement="top"
                                    hasArrow
                                    arrowSize={15}
                                >
                                    <FontAwesomeIcon icon="fas fa-question-circle" />
                                </Tooltip>
                            </Th>
                            <Th>Trust Score Rank</Th>
                            <Th textAlign="center">URL</Th>
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
    }, [search, exchanges, smallThan760]);

    const renderExchangesRowIn760 = (data) => {
        if (data.length > 0)
            return exchanges.map((exchange) => (
                <HStack
                    justify="space-between"
                    w="100%"
                    p={1}
                    flexBasis={"auto"}
                    borderBottom="1px solid"
                    borderColor="gray.200"
                    key={exchange.id}
                    // onClick={() => handleNavigate(exchange.id)}
                >
                    <HStack
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        maxWidth="50%"
                    >
                        <Image src={exchange.icon} boxSize="36px" />
                        <VStack spacing={"1px"} align="start">
                            <Text variant="body1"> {exchange.name}</Text>
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
                            $ {numberWithCommas(
                                    exchange.trade_volume_24h_btc.toFixed(3)
                                )}
                            </Text>
                        
                        </VStack>
                    </HStack>
                </HStack>
            ));
        else
            return Array(step)
                .fill()
                .map((_, index) => index + 1)
                .map((exchange) => (
                    <HStack
                        justify="space-between"
                        w="100%"
                        height="51.6px"
                        px={1}
                        flexBasis={"auto"}
                        key={exchange}
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
        console.log(data)
        if (data.length > 0) {
            return exchanges.map((exchange, index) => {
                return (
                    <Tr
                        key={exchange.id}
                        href={exchange.url}
                        // onClick={() =>
                        //     handleNavigate(exchange.id.toLowerCase())
                        // }
                    >
                        <Td>
                            <Text variant="body4">
                                {50 * (page - 1) + index + 1}
                            </Text>
                        </Td>
                        <Td>
                            <Flex align="center">
                                <Image src={exchange.image} w="36px" h="36px" />
                                <Flex sx={{ "& > *": { ml: "16px" } }}>
                                    <Text
                                        variant="body4"
                                        maxWidth="120px"
                                        overflow="hidden"
                                        whiteSpace="nowrap"
                                        textOverflow="ellipsis"
                                    >
                                        {exchange.name}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Td>
                        <Td>
                            <Text variant="body4">
                                $
                                {numberWithCommas(
                                    exchange.trade_volume_24h_btc.toFixed(3)
                                )}
                            </Text>
                        </Td>
                        <Td>
                            <Progress hasStripe value={exchange.trust_score * 10} />
                            <Text variant="body4" textAlign="center">
                                {exchange.trust_score}
                            </Text>
                        </Td>
                        <Td>
                            <Text variant="body4" textAlign="center">
                                {exchange.trust_score_rank}
                            </Text>
                        </Td>
                        <Td>
                            <Link href={exchange.url}>
                                <Text variant="body4" textAlign="center">
                                    {exchange.name}
                                </Text>
                            </Link>
                        </Td>
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
                    <TextField
                        label="Search For an Exchange.."
                        variant="outlined"
                        style={{ marginBottom: 20, width: "100%" }}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {renderExchangesTable()}
                </Container>

                <Flex align="center" justify="center" width="100%" mt="20px">
                    <HStack>{renderPagination()}</HStack>
                </Flex>
            </Box>
        </>
    );
}

export default ExchangeTable;
