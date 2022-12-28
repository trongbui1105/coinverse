import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Link,
} from "@chakra-ui/react";
import React from "react";

import { Link as ReactRouterLink } from "react-router-dom";

function LoginModal({ isOpen, onClose }) {
  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>limited access</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>To use this feature, you must first log in to the site</Text>
          </ModalBody>
          <ModalFooter>
            <Link as={ReactRouterLink} to="/login">
              <Button variant="primary">Log in</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LoginModal;
