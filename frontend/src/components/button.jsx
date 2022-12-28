import * as Chakra from "@chakra-ui/react";

const CustomButton = (props) => {
	return (
		<Chakra.Button
			colorScheme="brand.orangeButton"
			py="1.2rem"
			px="3rem"
			color="white"
			transition=".3s ease-out"
			_hover={{ paddingRight: "4rem" }}
			{...props}
		/>
	);
};

export default CustomButton;
