import { CheckIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Search({ data, setState, defaultValue = "" }) {
  const [value, setValue] = React.useState(defaultValue);
  const [hint, setHint] = React.useState("");
  const [err, setErr] = React.useState(false);
  const handleChange = (e) => {
    const value = e.target.value.toUpperCase();
    const hint = data.find((cur) => cur.startsWith(value));
    setValue(value);
    if (!hint) {
      setErr(true);
    } else {
      setErr(false);
      setHint(hint);
    }
  };
  React.useEffect(() => {
    const set = () => {
      if (!err && value === hint) {
        setState(value);
      }
    };
    const timeout = setTimeout(set, 1000);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <Stack spacing={4} w="100%">
      <InputGroup position="relative" letterSpacing={5}>
        <InputLeftElement
          pointerEvents="none"
          children={
            err ? (
              <Text variant="body3" color="red.400">
                !
              </Text>
            ) : (
              <CheckIcon color="green.400" />
            )
          }
        />
        <Input
          type="tel"
          onChange={handleChange}
          value={value}
          position="relative"
          zIndex={1}
          isInvalid={err}
          focusBorderColor={err && "red.500"}
          errorBorderColor={err && "red.600"}
          placeholder={"Currency"}
          letterSpacing="inherit"
        />
        <Text
          fontSize="inherit"
          fontWeight="inherit"
          position="absolute"
          top="50%"
          left="40px"
          transform="translateY(-50%)"
          color="gray.600"
          opacity={0.5}
          display={value ? "block" : "none"}
        >
          {hint}
        </Text>
      </InputGroup>
    </Stack>
  );
}

export default Search;
