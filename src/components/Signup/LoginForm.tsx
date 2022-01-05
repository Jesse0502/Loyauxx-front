import React, { useState } from "react";
import {
	Stack,
	FormControl,
	Input,
	FormLabel,
	Button,
	Heading,
	Text,
	Box,
	InputRightElement,
	InputGroup,
} from "@chakra-ui/react";
import { userEmail, login } from "../../api/indexApi";
import useAuth from "../../customHooks/useAuth";

function LoginForm() {
	const [showPass, setShowPass] = useState(false);
	const [showErrorMsg, setShowErrorMsg] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleLoginSubmit = async (e: any) => {
		e.preventDefault();
		setShowErrorMsg("");

		const userData = {
			email: e.target[0].value,
			password: e.target[1].value,
		};
		const user = await login(userData);
		if (!user.token) {
			setShowErrorMsg(user.msg);
			return;
		}
		localStorage.setItem("token", user.token);
		setRedirect(true);
		window.location.href = "/profile";
	};
	const handleShowPass = () => {
		setShowPass(!showPass);
	};
	return (
		<Box>
			<form onSubmit={handleLoginSubmit}>
				<Stack spacing="2">
					<Heading>Login to your account</Heading>
					<Text color="blackAlpha.600" fontSize={"sm"} pb="5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias atque
						est laborum?
					</Text>
				</Stack>
				<Stack spacing="7" pb="24">
					<FormControl isRequired>
						<FormLabel>Email</FormLabel>
						<Input placeholder="Enter your email" defaultValue={userEmail} />
					</FormControl>
					<FormControl isRequired>
						<FormLabel>Password</FormLabel>
						<InputGroup size="md">
							<Input
								placeholder="Enter password"
								type={showPass ? "text" : "password"}
							/>
							<InputRightElement width="4.5rem">
								<Button h="1.75rem" size="sm" onClick={handleShowPass}>
									{showPass ? "Hide" : "Show"}
								</Button>
							</InputRightElement>
						</InputGroup>
					</FormControl>
					<Button
						_hover={{ bg: "main" }}
						_active={{ bg: "main" }}
						type="submit"
						bg="main"
						color="bgText">
						Login
					</Button>
					<Text color="red">{showErrorMsg}</Text>
				</Stack>
			</form>
		</Box>
	);
}

export default LoginForm;
