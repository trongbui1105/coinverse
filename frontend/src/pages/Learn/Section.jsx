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

const Section = () => {
    return (
        <Box as="section" mt="40px">
            <Container>
                <HStack>
                    <VStack align="stretch" pr="20px">
                        <Link href="https://www.investopedia.com/terms/b/bitcoin.asp">
                            <Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
                                <Image
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp?w=768&fm=png"
                                />
                            </Box>
                        </Link>
                        <Box flexBasis="40%">
                            <Text color="gray.400" variant="h5">
                                BEGINNER'S GUIDE
                            </Text>
                            <Heading mb="1.0rem" size="xl" as="h2">
                                What is Bitcoin?
                            </Heading>
                            <Text
                                maxWidth={{ base: "auto", md: "430px" }}
                                color="brand.greyText"
                                mb="1rem"
                            >
                                Bitcoin is the world's first widely adopted
                                cryptocurrency - it allows for secure and
                                seamless peer-to-peer transactions on the
                                internet.
                            </Text>
                        </Box>
                    </VStack>
                    <VStack align="stretch">
                        <Link href="https://www.coinbase.com/learn/crypto-basics/defi-tokens-and-altcoins">
                            <Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
                                <Image
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/3rv8jr1B1Z1dZ2EhHqo7dp/e74ddbf1cd4836b83d34fe5cec351d78/Alt-Coin.png?w=768&fm=png"
                                />
                            </Box>
                        </Link>
                        <Box flexBasis="40%">
                            <Text color="gray.400" variant="h5">
                                BEGINNER'S GUIDE
                            </Text>
                            <Heading mb="1.0rem" size="xl" as="h2">
								Guide to DeFi tokens
                            </Heading>
                            <Text
                                maxWidth={{ base: "auto", md: "430px" }}
                                color="brand.greyText"
                                mb="1rem"
                            >
                                From Aave to Zcash, get the info you need to decide what to trade.
								In the last few years, tokens that help power DeFi
								protocols have become increasingly popular
                            </Text>
                        </Box>
                    </VStack>
                </HStack>
            </Container>
        </Box>
    );
};

export default Section;
