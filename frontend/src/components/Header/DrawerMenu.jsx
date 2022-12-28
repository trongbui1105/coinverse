import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  Button,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  useMediaQuery,
  VStack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import navbarData from "./navbarData";

function DrawerMenu() {
  const [smallThan760] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  if (!smallThan760) return null;
  return (
    <>
      <Flex height="100%" align="center">
        <Button size="sm" onClick={onOpen}>
          <HamburgerIcon boxSize={5} />
        </Button>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color="blue.500">coinverse</DrawerHeader>

          <DrawerBody p="0">
            <VStack w="100%">
              {navbarData.map((item) => {
                if (!!item.target) {
                  return (
                    <Link
                      to={item.target}
                      as={ReactRouterLink}
                      w="100%"
                      h="auto"
                      onClick={onClose}
                      key={item.text}
                    >
                      <Button
                        width="100%"
                        height={12}
                        bg="white"
                        fontWeight={400}
                        justifyContent="start"
                      >
                        {item.text}
                      </Button>
                    </Link>
                  );
                } else {
                  return (
                    <Button
                      width="100%"
                      key={item.text}
                      height={12}
                      bg="white"
                      fontWeight={400}
                      justifyContent="start"
                    >
                      {item.text}
                    </Button>
                  );
                }
              })}
            </VStack>
            {/* <VStack mt={6} w="100%" p={5} spacing={3}>
              <Link as={ReactRouterLink} to="/login" w="100%">
                <Button variant="primary" w="100%">
                  Login
                </Button>
              </Link>

              <Link as={ReactRouterLink} to="/signup" w="100%">
                <Button variant="primary" w="100%">
                  Register
                </Button>
              </Link>
            </VStack> */}
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerMenu;
