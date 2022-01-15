import { useEffect, useState } from "react";
import {
	Box,
	Heading,
	Text,
	Flex,
	Stack,
	Avatar,
	Link,
	Image,
} from "@chakra-ui/react";
import djNight from "../../assets/Group12.png";
import ProfileStats from "./Stats";
import ProfileTracks from "./ProfileTracks";
import Navigation from "./Navigation";
import Submit from "./Submit";
import Settings from "./Settings";
import useAuth from "../../customHooks/useAuth";
import { getProfileData, profileDat } from "../../api/profileApi";

function Profile(props: any) {
	const [profileNav, setProfileNav] = useState("Profile");
	const [profile, setProfile] = useState<any>(null);
	const { authInfo } = useAuth();

	useEffect(() => {
		if (!profileDat) {
			const getData = async () => {
				if (authInfo && authInfo !== undefined) {
					await getProfileData(authInfo.username);
				}
			};
			getData();
		} else {
			setProfile(profileDat);
		}
	}, [profileDat, profileNav]);

	return (
		<Box>
			<Stack direction="row" spacing="0">
				<Box flex="1" w="full">
					<Navigation setProfileNav={setProfileNav} current={profileNav} />
				</Box>
				<Box flex="6">
					{profileNav === "Profile" && (
						<Box>
							<Image
								src={profile?.data?.profile?.banner}
								h={"32vh"}
								w="full"
								objectFit={"cover"}
							/>
							<Box pos="relative" px={{ lg: "10", base: "0" }}>
								<Avatar
									pos="absolute"
									size={"2xl"}
									top="-16"
									src={profile?.data?.profile?.avatar}
									left={{ lg: "10", base: "5" }}
								/>
								<Flex>
									<Stack pt="16" pb="5" spacing="3">
										<Heading
											fontSize={{ lg: "5xl", base: "5xl" }}
											px={{ base: "3", lg: "0" }}>
											{profile?.data?.profile?.name}
										</Heading>
										<Text color="blackAlpha.700" px={{ base: "3", lg: "0" }}>
											@{profile?.data?.profile?.username}
										</Text>
										<Text px={{ base: "3", lg: "0" }}>
											{profile?.data?.profile?.description}
										</Text>
										<Link px={{ base: "3", lg: "0" }} color="blue" href="">
											{profile?.data?.profile?.link}
										</Link>
									</Stack>
								</Flex>
							</Box>
							<Box px={{ lg: "10", base: "0" }} overflow={"hidden"}>
								<Heading color="blackAlpha.700">Tracks</Heading>
								<hr />
								{profile?.data?.tracks && profile.data.tracks.length ? (
									<ProfileTracks tracks={profile.data.tracks} />
								) : (
									<Box>
										<Heading>No tracks to show!</Heading>
									</Box>
								)}
							</Box>
						</Box>
					)}

					{profileNav === "Stats" && <ProfileStats />}
					{profileNav === "Submission" && <Submit />}
					{profileNav === "Settings" && <Settings />}
				</Box>
			</Stack>
		</Box>
	);
}

export default Profile;
