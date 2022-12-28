import React from "react";
import { VStack } from "@chakra-ui/react";
import Banner from "components/Banner/Banner";

const TopSection = () => {

    return (
        <VStack align="stretch" p="24px" gap="2">
            <Banner />
        </VStack>
    );
}

export default TopSection;
