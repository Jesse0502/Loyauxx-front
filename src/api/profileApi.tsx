import { server } from "./config";
import axios from "axios";
import useAuth from "../customHooks/useAuth";
import jwt from "jsonwebtoken";

export let profileDat = null;

export let getProfileData = async (username: string) => {
	if (username) {
		let res = await axios.get(`${server}/profile/${username}`);
		profileDat = res.data;
		console.log(profileDat);
	}
};

export let putProfileEdit = async (data: any) => {
	let authInfo: any = jwt.decode(localStorage.getItem("token") ?? "");
	if (authInfo) {
		let res = await axios.put(`${server}/profile/edit`, {
			data,
			authInfo,
		});
		await getProfileData(authInfo.username);
		console.log(res.data);
		return { data: true };
	} else {
		console.log("Something went wrong");
		return { data: false };
	}
};

export let postSubmission = async (url: string) => {
	let authInfo = jwt.decode(localStorage.getItem("token") ?? "");
	if (authInfo) {
		const res = await axios.post(`${server}/profile/submission`, {
			authInfo,
			url: url,
		});
		console.log(res);
	} else {
		console.log(authInfo);
		return "Some Error Occurred";
	}
};
