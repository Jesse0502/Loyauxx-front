import React, { useState } from "react";
import {
	Stack,
	FormControl,
	Input,
	FormLabel,
	Button,
	Heading,
	Text,
	InputGroup,
	InputLeftElement,
	Box,
	useToast,
} from "@chakra-ui/react";
import "../../App.css";
import { signup } from "../../api/indexApi";

function SignupForm(props: any) {
	const [errorMsg, setErrorMsg] = useState("");

	const handleSignupSubmit = async (e: any) => {
		setErrorMsg("");
		e.preventDefault();
		const userData = {
			name: e.target[0].value,
			username: e.target[1].value,
			email: e.target[2].value,
			password: e.target[3].value,
			confirmPassword: e.target[4].value,
		};
		if (userData.password !== userData.confirmPassword) {
			setErrorMsg("Passwords must be same!");
			return;
		}
		let signupData = await signup(userData);
		if (signupData.msg !== "Signup successful") {
			setErrorMsg(signupData.msg);
			return;
		}
		toast({
			title: "Signup Successful.",
			description:
				"Your account has been created successfully. You can now login.",
			status: "success",
			duration: 9000,
			isClosable: true,
			position: "bottom-right",
		});
		props.setLoginOrSignin(true);
	};

	const toast = useToast();

	return (
		<Box h="max">
			<form onSubmit={handleSignupSubmit} id="signupSubmit">
				<Stack spacing="1">
					<Heading>Create your free account</Heading>
					<Text color="blackAlpha.600" fontSize={"sm"}>
						Let's setup your account. It just takes a few mins to signup on
						loyauxx.
					</Text>
				</Stack>
				<Stack
					pr="2"
					spacing="5"
					pt="5"
					h={{ base: "max", md: "45vh" }}
					overflow="auto"
					className="signupScrollBar">
					<FormControl isRequired>
						<FormLabel>Name</FormLabel>
						<Input placeholder="Enter your Name" />
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Username</FormLabel>
						<InputGroup>
							<InputLeftElement
								pointerEvents="none"
								bg="wall"
								borderLeftRadius={"md"}
								children={<Text color="blackAlpha.700">@</Text>}
							/>
							<Input placeholder="Enter your username" pl="12" />
						</InputGroup>
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Email</FormLabel>
						<Input placeholder="Enter your email" />
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Password</FormLabel>
						<Input type="password" placeholder="Enter your password" />
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Confirm Password</FormLabel>
						<Input type="password" placeholder="Confirm your password" />
					</FormControl>
				</Stack>
				<Button
					mt="5"
					w="full"
					_hover={{ bg: "main" }}
					_active={{ bg: "main" }}
					type="submit"
					bg="main"
					color="bgText">
					Signup
				</Button>
				<Text color={"red"}>{errorMsg}</Text>
			</form>
		</Box>
	);
}

export default SignupForm;
