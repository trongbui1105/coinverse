import React from "react";
import { Link } from "react-router-dom";

import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

import Navbar from "./Navbar";
import Buttons from "./Buttons";
import DrawerMenu from "./DrawerMenu";
// import Drawer from "./Drawer";

const stickyAnimation = keyframes`
from {
  top: -100%;
}
to {
  top: 0
}
`;

function Header() {
    const [sticky, setSticky] = React.useState(false);

    const handleScroll = () => {
        if (window.scrollY > 60) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    React.useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", handleScroll);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const stickyStyle = sticky
        ? {
              position: "sticky",
              top: 0,
              left: 0,
              animation: `${stickyAnimation} ease .3s`,
          }
        : {};
    return (
        <Box
            w="100%"
            sx={{
                borderBottom: "1px solid",
                borderColor: "gray.200",
                background: "white",
                zIndex: "100",
                ...stickyStyle,
            }}
        >
            <Flex
                width={{ xl: "1220px" }}
                margin="auto"
                justify="space-between"
                height="66px"
                padding="0 20px"
            >
                <DrawerMenu />
                <Flex align="center">
                    <Link to="/">
                        <HStack>
                            <Image
                                src="https://raw.githubusercontent.com/DanielLvovsky/CryptoTrak/main/images/icon_win.png"
                                width="112"
                                height="10"
                            />
                            <Text variant="h3" color="blue">
                                Coinverse
                            </Text>
                        </HStack>
                    </Link>
                </Flex>
                <Navbar />
                <Buttons />
            </Flex>
        </Box>
    );
}

export default Header;
