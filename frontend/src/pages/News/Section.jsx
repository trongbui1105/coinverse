import {
    Box,
    Text,
    Image,
    Heading,
    Flex,
    Button,
    VStack,
    HStack,
    Link,
} from "@chakra-ui/react";
import axios from "axios";
import Container from "components/container";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import Button from "components/button";

const Section = () => {
    const [news, setNews] = useState([]);

    let [searchParams, setSearchParams] = useSearchParams();
    const maxPage = 20;
    const minPage = 1;
    const step = 10;

    const page = Number(searchParams.get("page")) || minPage;
    const setPage = (num) => setSearchParams({ ...searchParams, page: num });

    useEffect(() => {
        if (page > maxPage) setPage(maxPage);
        if (page < minPage) setPage(minPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleChangePage = (pageNumber) => {
        setPage(pageNumber);
    };

    useEffect(() => {
        const fetchNews = async () => {
            const { data } = await axios.get(
                `https://api.coinstats.app/public/v1/news/trending?skip=${
                    10 * (page - 1)
                }&limit=10`
            );

            console.log(data.news);
            setNews(data.news);
        };
        fetchNews();
    }, [page]);

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

    const renderPagination = useCallback(() => {
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

    const renderNews = () => {
        return news.map((item, index) => {
            return (
                <Box
                    mb={["5rem", "7rem"]}
                    as="section"
                    mt={["4rem"]}
                >
                    <Container>
                        <HStack justify="space-between">
                            <Box
                                mt={{ base: "3.5rem", md: 0 }}
                                flexBasis="45%"
                                ml="3rem"
                            >
                                <Image
                                    borderRadius="1rem"
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src={item.imgURL}
                                />
                            </Box>
                            <Box flexBasis="40%">
                                <Heading mb="1.5rem" size="xl" as="h2">
                                    {item.title}
                                </Heading>
                                <Text
                                    maxWidth={{ base: "auto", md: "430px" }}
                                    color="brand.greyText"
                                    mb="1rem"
                                >
                                    {item.description}
                                </Text>
                                <Link href={item.link} isExternal>
                                    <Button
                                        mt="1.5rem"
                                        py="1rem"
                                        bgColor="blue"
                                        color="white"
                                        _hover={{
                                            background: "gray",
                                        }}
                                    >
                                        Read more
                                    </Button>
                                </Link>
                            </Box>
                        </HStack>
                    </Container>
                </Box>
            );
        });
    };

    return (
        <>
            {renderNews()}
            <Flex align="center" justify="center" width="100%" mt="20px">
                <HStack>{renderPagination()}</HStack>
            </Flex>
        </>
    );
};

export default Section;
