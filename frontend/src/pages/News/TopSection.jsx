import React from "react";
import { Text, VStack } from "@chakra-ui/react";

function TopSection() {
    return (
        <VStack align="center" mt="20px">
            <Text variant="h1" color="black.600">
                Trending Crypto News
            </Text>
            <Text variant="h4" color="gray.500">
                Insights into the biggest events shaping the crypto industry.
            </Text>
        </VStack>
    );
}

export default TopSection;
