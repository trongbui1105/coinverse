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

const Section2 = () => {
    return (
        <Box as="section" mt="40px">
            <Container>
                <HStack>
                    <VStack align="stretch" pr="10px">
                        <Link href="https://ethereum.org/en/">
                            <Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
                                <Image
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/3thWklmvu2WmAHJh0k1AcC/51521feeef170d94a446fbec6f262912/what-is-ethereum.png?w=768&fm=png"
                                />
                            </Box>
                        </Link>
                        <Box flexBasis="40%">
                            <Text color="gray.400" variant="h5">
                                BEGINNER'S GUIDE
                            </Text>
                            <Heading mb="1.0rem" size="md" as="h3">
                                What is Etherium?
                            </Heading>
                        </Box>
                    </VStack>
                    <VStack align="stretch" pr="10px">
                        <Link href="https://www.coinbase.com/learn/crypto-basics/what-is-defi">
                            <Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
                                <Image
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/2lrWtXLcleZPbsnzZnEeLB/bbd5a35075619f07e083fce5fdbf15f9/Learn_Illustration_What_is_DeFi.jpg?w=768&fm=png"
                                />
                            </Box>
                        </Link>
                        <Box flexBasis="40%">
                            <Text color="gray.400" variant="h5">
                                KEY TERM
                            </Text>
                            <Heading mb="1.0rem" size="md" as="h3">
                                What is DeFi?
                            </Heading>
                        </Box>
                    </VStack>
                    <VStack align="stretch" pr="10px">
                        <Link href="https://www.coinbase.com/learn/crypto-basics/what-is-a-blockchain">
                            <Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
                                <Image
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/70c1NBb3A7nvNpx38gSvtd/725e6c5da4960a5a17657c02b80dd596/Learn_Illustration_Ultimate_Guide_Blockchain.png?w=768&fm=png"
                                />
                            </Box>
                        </Link>
                        <Box flexBasis="40%">
                            <Text color="gray.400" variant="h5">
                                BEGINNER'S GUIDE
                            </Text>
                            <Heading mb="1.0rem" size="md" as="h3">
                                Blockchain Technology
                            </Heading>
                        </Box>
                    </VStack>
                    <VStack align="stretch">
                        <Link href="https://learncrypto.com/knowledge-base/basics/what-are-tokenomics">
                            <Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
                                <Image
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/63o0Mbwyiqcqq8CLZKToLs/4d007f0923a20999c6c4765d6fdc35bf/Donating-Crypto.png?w=768&fm=png"
                                />
                            </Box>
                        </Link>
                        <Box flexBasis="40%">
                            <Text color="gray.400" variant="h5">
                                KNOWLEDGE BASE
                            </Text>
                            <Heading mb="1.0rem" size="md" as="h3">
                                What are Tokenomics?
                            </Heading>
                        </Box>
                    </VStack>
                </HStack>
            </Container>
        </Box>
    );
};

export default Section2;
