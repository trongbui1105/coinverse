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

const Section4 = () => {
    return (
        <Box mb={["5rem", "7rem"]} as="section" mt="40px">
            <Container>
                <HStack>
                    <VStack align="stretch" pr="20px">
                        <Link href="https://www.bloomberg.com/news/videos/2021-05-03/bitcoin-and-ethereum-what-s-the-difference-video">
                            <Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
                                <Image
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/4BswAFFo2rKZhCRDjO8gHH/6f207f7df4173a36073b6a17d1b52e97/Sending_Crypto___1207png.png?w=768&fm=png"
                                />
                            </Box>
                        </Link>
                        <Box flexBasis="40%">
                            <Text color="gray.400" variant="h5">
                                VIDEO TUTORIAL
                            </Text>
                            <Heading mb="1.0rem" size="md" as="h3">
                                Bitcoin and Ethereum: What's the Difference?
                            </Heading>
                        </Box>
                    </VStack>
                    <VStack align="stretch">
                        <Link href="https://www.coinbase.com/learn/tips-and-tutorials/expert-tips-ray-tong">
                            <Box mt={{ base: "3.5rem", md: 0 }} flexBasis="48%">
                                <Image
                                    width={{
                                        base: "100%",
                                        sm: "60%",
                                        lg: "100%",
                                    }}
                                    src="https://images.ctfassets.net/q5ulk4bp65r7/3VTpVP0ENXMTIwGteO16jp/0cf50e483766f6a815295614791c091c/expert-tip-2.png?w=768&fm=png"
                                />
                            </Box>
                        </Link>
                        <Box flexBasis="40%">
                            <Text color="gray.400" variant="h5">
                                EXPERT TIPS
                            </Text>
                            <Heading mb="1.0rem" size="md" as="h3">
                                An investor who got in when Bitcoin was $10
                            </Heading>
                        </Box>
                    </VStack>
                </HStack>
            </Container>
        </Box>
    );
};

export default Section4;
