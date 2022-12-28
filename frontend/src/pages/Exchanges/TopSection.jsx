import React from "react";
import {
    Text,
    VStack,
    Grid,
    HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChartPie as ChartPieIcon,
    faChartArea as ChartAreaIcon,
    faChartColumn as ChartColumnIcon,
} from "@fortawesome/free-solid-svg-icons";

library.add(ChartPieIcon);
library.add(ChartAreaIcon);
library.add(ChartColumnIcon);


function TopSection() {
    const [assetPlatforms, setAssetPlatforms] = useState([]);
    const [marketIndexes, setMarketIndexes] = useState([]);

    const fetchAssetPlatforms = async () => {
        axios
            .get("https://api.coingecko.com/api/v3/asset_platforms", {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => {
                setAssetPlatforms(response.data);
            })
            .catch((error) => console.log(error));
    };
    

    const fetchMarketIndexes = async () => {
        axios
            .get("https://api.coingecko.com/api/v3/indexes", {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => {
                setMarketIndexes(response.data);
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchMarketIndexes();
        fetchAssetPlatforms();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const marketCards = [
        {
            title: "Categories",
            icon: ChartPieIcon,
            des: "2000",
        },
        {
            title: "Total Exchange",
            icon: ChartAreaIcon,
            des: "500",
        },
        {
            title: "Asset Platforms",
            icon: ChartPieIcon,
            des: assetPlatforms.length,
        },
        {
            title: "Market Indexes",
            icon: ChartColumnIcon,
            des: marketIndexes.length,
        },
    ];
    return (
        <VStack align="stretch" p="24px" gap="2">
            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap="2">
                <VStack align="start">
                    <Text variant="h3" as="h3" display="inline-flex">
                        General Information
                    </Text>
                </VStack>
                {/* <GridItem>
                    <InputGroup>
                        <InputLeftElement
                            top="50%"
                            transform="translateY(-50%)"
                        >
                            <SearchIcon color="gray.500" />
                        </InputLeftElement>
                        <Input type="text" placeholder="Search" size={"lg"} />
                    </InputGroup>
                </GridItem> */}
            </Grid>
            <Grid
                templateColumns={"repeat(auto-fit , minmax(200px , 1fr))"}
                gap={6}
            >
                {marketCards.map(({ title, name, des, icon }) => (
                    <HStack
                        border="1px solid"
                        borderColor="gray.300"
                        rounded="xl"
                        align={{ base: "center", lg: "start" }}
                        p="18px"
                        cursor="pointer"
                        _hover={{ backgroundColor: "gray.50" }}
                        key={name}
                        spacing={10}
                    >
                        <VStack>
                            <Text variant="p" as="span" fontWeight={500}>
                                {title}
                            </Text>

                            <FontAwesomeIcon
                                icon={icon}
                                size="lg"
                                color="blue"
                            />
                        </VStack>
                        <Text
                            variant="h2"
                            as="span"
                            display="inline-flex"
                            textAlign="right"
                            marginTop="15px"
                            align="right"
                        >
                            <Text
                                color="blue.400"
                                textColor="blue.400"
                                textStyle="bold"
                                textAlign="right"
                                align="right"
                                justifyContent="flex-start" 
                            >
                                {des}
                            </Text>
                        </Text>
                    </HStack>
                ))}
            </Grid>
        </VStack>
    );
}

export default TopSection;
