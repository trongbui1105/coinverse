import { Box } from "@chakra-ui/react";

const Container = (props) => {
	return (
		<Box
			mx="auto"
			px={{ base: "1rem", md: "1.3rem", lg: ".5rem" }}
			maxWidth={["720px", "720px", "720px", "960px", "1150px"]}
			borderRadius="8px"
			{...props}
		/>
	);
};

export default Container;
