import axios from "axios";

class ApiClient {
	constructor(remoteHostUrl) {
		this.remoteHostUrl = remoteHostUrl;
		this.token = null;
		this.tokenName = "token";
	}

	setToken(token) {
		this.token = token;
		localStorage.setItem(this.tokenName, token);
	}

	async request({ endpoint, method = `GET`, data = {} }) {
		const url = `${this.remoteHostUrl}/${endpoint}`;

		const headers = {
			"Content-Type": "application/json",
			Authorization: this.token ? `Bearer ${this.token}` : "",
		};

		try {
			const res = await axios({ url, method, data, headers });
			return { data: res.data, error: null };
		} catch (error) {
			console.error("APIclient.makeRequest.error:");
			console.error({ errorResponse: error.response });
			const message = error?.response?.data?.error?.message;
			return { data: null, error: message || String(error) };
		}
	}

	async fetchUserFromToken() {
		return await this.request({ endpoint: `auth/me`, method: `GET` });
	}

	async signupUser(credentials) {
		return await this.request({
			endpoint: `auth/register`,
			method: `POST`,
			data: credentials,
		});
	}

	async loginUser(credentials) {
		return await this.request({
			endpoint: `auth/login`,
			method: `POST`,
			data: credentials,
		});
	}

	async logoutUser() {
		localStorage.removeItem(this.tokenName);
	}

	async fetchProgress() {
		return await this.request({
			endpoint: `progress/getProgress`,
			method: `GET`,
		});
	}

	async fetchManagerToken() {
		return await this.request({
			endpoint: `manage/getAccessToken`,
			method: `GET`,
		});
	}

	async fetchEmployees() {
		return await this.request({
			endpoint: `manage/getPeople`,
			method: `GET`,
		});
	}

	async pingAllEmployees(credentials) {
		console.log("CREDENTIALS ", credentials);
		return await this.request({
			endpoint: `manage/pingAll`,
			method: `PATCH`,
			data: { module: credentials },
		});
	}
	async pingEmployee(email, modules) {
		console.log("this is whats being passed: ", email, " ", modules);
		return await this.request({
			endpoint: `manage/pingUser`,
			method: `PATCH`,
			data: { email: email, module: modules },
		});
	}

	async addProgress(module) {
		return await this.request({
			endpoint: `progress/addProgress`,
			method: `PATCH`,
			data: { module: module },
		});
	}

	async fetchSlackExchange(url, location) {
		return await this.request({
			endpoint: `auth/slackExchange`,
			method: `POST`,
			data: { url, location },
		});
	}

	async fetchPingStatus(module){
		return await this.request({
			endpoint: `manage/amIPinged`,
			method: `PATCH`,
			data: {module: module}
		})
	}
}

const API = new ApiClient("http://localhost:3001");
//TODO: this needs to be changed when deployed
export default API;
