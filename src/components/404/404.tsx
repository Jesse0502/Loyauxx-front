import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Center, Flex, Heading } from "@chakra-ui/react";

const NotFoundPage = (props: any) => {
	const handleGoBack = () => {
		props.history.push("/");
	};
	return (
		<Center justifyContent={"center"} alignItems={"center"} h="92vh" w="100%">
			<Box>
				<Heading>This Page doesn't exist!</Heading>
				<Button onClick={handleGoBack}>Go Back</Button>
			</Box>
		</Center>
	);
};
export default NotFoundPage;
