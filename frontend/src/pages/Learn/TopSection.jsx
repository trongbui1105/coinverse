import React from "react";
import { Text, VStack } from "@chakra-ui/react";

function TopSection() {
    return (
        <VStack align="center" mt="20px">
            <Text variant="h1" color="black.600">
                Crypto basics
            </Text>
            <Text variant="h4" color="gray.500">
                New to crypto? Not for long — start with these guides and
                explainers
            </Text>
        </VStack>
    );
}

export default TopSection;
