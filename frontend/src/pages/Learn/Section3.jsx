import {
    Box,
    Text,
    Image,
    Heading,
    Flex,
    VStack,
    HStack,
    Link,
} from "@chakra-ui/react";
import Container from "components/container";
import Button from "components/button";
import marketCapImage from "assets/images/market-cap.png";

const Section3 = () => {
    return (
        <Box mb={["4rem"]} as="section" mt="40px">
            <Container>
                <VStack align="center" mt="20px" mb={["3rem"]}>
                    <Text variant="h1" color="black.600">
                        Tips and tutorials
                    </Text>
                    <Text variant="h4" color="gray.500">
                        Get practical, step-by-step answers to all things crypto
                    </Text>
                </VStack>
                <HStack>
                    <VStack align="stretch" pr="20px">
                        <Link href="https://youtu.be/YCzSTGyk5OE">
                            <Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
                                <Image
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/3K4qo02ZA5PkwyN5Rm7gjm/945bce812fc91da9ef737516142eb281/Dollar-Cost_avg.png?w=768&fm=png"
                                />
                            </Box>
                        </Link>
                        <Box flexBasis="40%">
                            <Text color="gray.400" variant="h5">
                                VIDEO TUTORIAL
                            </Text>
                            <Heading mb="1.0rem" size="md" as="h3">
                                When is the best time to invest in crypto?
                            </Heading>
                        </Box>
                    </VStack>
                    <VStack align="stretch">
                        <Link href="https://www.youtube.com/watch?v=t3pcp4Xrn9s">
                            <Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
                                <Image
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/4gkPtS2wMvQQ0GsFhysTHH/e54752c327d613651cf0ce76faa8e252/Making-Sense-Of-Candlesticks.png?w=768&fm=png"
                                />
                            </Box>
                        </Link>
                        <Box flexBasis="40%">
                            <Text color="gray.400" variant="h5">
                                VIDEO TUTORIAL
                            </Text>
                            <Heading mb="1.0rem" size="md" as="h3">
                                BlockFi Crypto Staking Tutorial
                            </Heading>
                        </Box>
                    </VStack>
                </HStack>
            </Container>
        </Box>
    );
};

export default Section3;
