import { server } from "./config";
import axios from "axios";

export let homeDataStatic: any;
export let signupDataStatic: any;
export let userEmail: any;

export let homeData = async () => {
	let data = await axios.get(`${server}/`);
	return data.data;
};

export let signup = async (data: any) => {
	userEmail = data.email;
	return await axios
		.post(`${server}/signup`, data)
		.then((res) => {
			signupDataStatic = res.data;
			console.log(userEmail);
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			signupDataStatic = err;

			return err;
		});
};

export let login = async (data: any) => {
	userEmail = data.email;
	return await axios
		.post(`${server}/login`, data)
		.then((res) => {
			console.log(res);
			return res.data;
		})
		.catch((err) => {
			console.log(err);
			return err;
		});
};
