import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";

const Signup = () => (
  <Container
    maxW="lg"
    py={{ base: "12", md: "20" }}
    px={{ base: "0", sm: "8" }}
  >
    <Stack spacing="8">
      <Stack spacing="6" align="center">
        <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
          <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
            Create your account
          </Heading>
          <HStack spacing="1" justify="center">
            <Text color="muted">Do you have an account?</Text>
            <Button variant="link" colorScheme="blue">
              <Link to="/login">Log in</Link>
            </Button>
          </HStack>
        </Stack>
      </Stack>
      <Box
        py={{ base: "0", sm: "8" }}
        px={{ base: "4", sm: "10" }}
        bg={useBreakpointValue({ base: "transparent", sm: "white" })}
        boxShadow={{ base: "none", sm: useColorModeValue("md", "md-dark") }}
        borderRadius={{ base: "none", sm: "xl" }}
      >
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl>
              <HStack>
                <Stack>
                  <FormLabel htmlFor="first_name">First name</FormLabel>
                  <Input id="first_name" type="text" />
                </Stack>
                <Stack>
                  <FormLabel htmlFor="last_name">Last name</FormLabel>
                  <Input id="last_name" type="text" />
                </Stack>
              </HStack>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" />
            </FormControl>

            <PasswordField />
          </Stack>
          <HStack justify="space-between">
            <Checkbox defaultIsChecked alignItems="start">
              <Text variant="body1" fontWeight={400}>
                I agree to the User Agreement and Privacy Policy.
              </Text>
            </Checkbox>
          </HStack>
          <Stack spacing="6">
            <Button variant="primary">Creat account</Button>
            <HStack>
              <Divider />
              <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                or continue with
              </Text>
              <Divider />
            </HStack>
            <OAuthButtonGroup />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Container>
);
export default Signup;
