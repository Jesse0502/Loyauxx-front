import React, { useEffect } from "react";
import {
	Box,
	Heading,
	Text,
	Flex,
	Stack,
	Avatar,
	Link,
	Center,
	Image,
	HStack,
	Grid,
	Container,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";

import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";

import "../../App.css";

function ProfileStats(props: any) {
	const labels = [
		"January ",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
	];

	const data = {
		labels: labels,
		datasets: [
			{
				label: "Points",
				backgroundColor: "#5E15CB",
				borderColor: "#5E15CB",
				data: [0, 12, 23, 23, 23, 23, 64, 88, 104],
			},
		],
	};

	const location = useLocation();

	useEffect(() => {
		const rankChart = new Chart("myChart123", {
			type: "line",
			data: data,
			options: {
				onClick: (e) => {
					const canvasPosition = getRelativePosition(e, rankChart);

					// Substitute the appropriate scale IDs
					const dataX = rankChart.scales.x.getValueForPixel(canvasPosition.x);
					const dataY = rankChart.scales.y.getValueForPixel(canvasPosition.y);
				},
			},
		});
		return () => {
			rankChart.destroy();
		};
	}, []);

	return (
		<>
			<Box px="7" my="5" className="scrollBar" overflowX={"hidden"}>
				<Box overflowX={"auto"} w="100%">
					<canvas id="myChart123" width="600" height="200"></canvas>
				</Box>
				<Flex alignItems={"center"} justify={"space-between"}>
					<Heading color="blackAlpha.800" mt="5" fontSize={"xxx-large"}>
						Total Points :{" "}
						{data.datasets[0].data[data.datasets[0].data.length - 1]}
					</Heading>
					<Text py="3" fontSize={"lg"} fontStyle={"revert"}>
						{" "}
						Current Rank : 2
					</Text>
				</Flex>
				<Stack mt="12">
					<Text
						fontSize={"x-large"}
						color="blackAlpha.800"
						// fontStyle={"italic"}
						>
						Competitions participated
					</Text>
					<Stack pt="3" color="blackAlpha.700">
						<Flex justify={"space-between"} px="5">
							<Text>Name</Text>
							<Flex textAlign={"center"}>
								<Text mr="12">Rank</Text>
								<Text mr="12">Participants</Text>
							</Flex>
						</Flex>
						<Stack maxH="72" className="signupScrollBar" overflow={"auto"}>
							{Array.from(Array(5)).map(() => (
								<Flex
									justify={"space-between"}
									border="2px solid"
									py="2"
									borderRadius={10}
									px="5">
									<HStack>
										<Text>L-BAS May 2021</Text>
										{/* <Box pl='3'>
											<BsThreeDots size={22} />
										</Box> */}
									</HStack>
									<HStack justify={"space-between"}>
										<Text>5</Text>
										{/* <Text >25</Text> */}
									</HStack>
								</Flex>
							))}
						</Stack>
					</Stack>
				</Stack>
				<Stack pt="5">
					<Text
						fontSize={"x-large"}
						color="blackAlpha.800"
						// fontStyle={"italic"}
						>
						Competitions won
					</Text>
					<Stack pt="3" color="blackAlpha.700">
						<Flex justify={"space-between"} px="5">
							<Text>Name</Text>
							<Flex textAlign={"center"}>
								<Text mr="12">Rank</Text>
								<Text mr="12">Participants</Text>
							</Flex>
						</Flex>
						<Stack maxH="72" className="signupScrollBar" overflow={"auto"}>
							{Array.from(Array(2)).map(() => (
								<Flex
									justify={"space-between"}
									border="2px solid"
									py="2"
									borderRadius={10}
									px="5">
									<HStack>
										<Text>L-BAS May 2021</Text>
										{/* <Box pl='3'>
											<BsThreeDots size={22} />
										</Box> */}
									</HStack>
									<Flex>
										<Text mr="24">5</Text>
										<Text mr="24">25</Text>
									</Flex>
								</Flex>
							))}
						</Stack>
					</Stack>
				</Stack>
			</Box>
		</>
	);
}

export default ProfileStats;
