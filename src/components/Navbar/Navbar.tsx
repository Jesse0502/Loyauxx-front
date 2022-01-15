import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import {
	Box,
	Flex,
	HStack,
	Text,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	DrawerHeader,
	useDisclosure,
	Stack,
} from "@chakra-ui/react";
import djNight from "../../assets/djNight.jpg";
import { FiMenu } from "react-icons/fi";
import { useHistory, useLocation } from "react-router-dom";
import { MdHome } from "react-icons/md";
import "./Navbar.css";
import NavSearch from "./NavSearch";
import useAuth from "../../customHooks/useAuth";

function Navbar(props: any) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const location = useLocation();
	const btnRef = React.useRef();
	const history = useHistory();
	const { authInfo } = useAuth();
	console.log(authInfo);
	return (
		<Box pos="relative" bg="main" h="8vh" zIndex="999" w="100%">
			<Flex
				h={{ md: "9vh", base: "8vh" }}
				pos="fixed"
				top="0"
				shadow="lg"
				px={{ base: "5", md: "10" }}
				w="full"
				justify={"space-between"}
				alignItems={"center"}
				bg="main"
				color="bgText">
				<Flex>
					<Text
						display={{ base: "none", md: "block" }}
						onClick={() => {
							history.push("/");
						}}
						fontSize={{ md: "4xl", base: "3xl" }}
						className="logo"
						cursor={"pointer"}>
						LOYAUXX
					</Text>
					<Box display={{ base: "block", md: "none" }}>
						<Box cursor={"pointer"} onClick={onOpen} p="1" rounded="lg">
							<FiMenu size="28" />
						</Box>
						<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
							<DrawerOverlay />
							<DrawerContent>
								<DrawerCloseButton color="white"></DrawerCloseButton>

								<DrawerHeader
									as={Flex}
									objectFit={"cover"}
									h="40"
									bgImg={djNight}>
									<Text className="logo" fontSize={"3xl"} color="white" py="20">
										LOYAUXX
									</Text>
								</DrawerHeader>
								<DrawerBody color="blackAlpha.800" bg="mainLight">
									<Stack textAlign={"left"} flexDir={"column"}>
										<Stack
											cursor="pointer"
											direction={"row"}
											alignItems={"center"}>
											<MdHome size="28" color="#313033" />
											<Text
												fontSize={"2xl"}
												onClick={() => {
													history.push("/");
												}}
												fontWeight={location.pathname === "/" ? "bold" : ""}>
												Home
											</Text>
										</Stack>
										<hr />

										<Box pt="3">
											<NavSearch drawer={true} />
										</Box>
									</Stack>
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</Box>
					<HStack
						pl="10"
						fontSize={"lg"}
						spacing="5"
						display={{ base: "none", md: "flex" }}>
						<Text
							cursor={"pointer"}
							onClick={() => {
								history.push("/history");
							}}>
							History
						</Text>
					</HStack>

					<HStack
						pl="10"
						fontSize={"lg"}
						spacing="5"
						display={{ base: "none", md: "flex" }}>
						<Text
							cursor={"pointer"}
							onClick={() => {
								history.push(`/top-artists`);
							}}>
							Top Artists
						</Text>
					</HStack>
				</Flex>
				<HStack spacing={"5"} alignItems={"center"} fontSize={"lg"}>
					<HStack>
						<Box display={{ lg: "block", base: "none" }}>
							<NavSearch drawer={false} />
						</Box>
						<Text
							cursor={"pointer"}
							onClick={() => {
								authInfo ? history.push("/profile") : history.push("/signup");
							}}>
							{authInfo ? authInfo.name : "SIGNUP"}
						</Text>
						<FaUserCircle size="32px" />
					</HStack>
				</HStack>
			</Flex>
		</Box>
	);
}

export default Navbar;
