import { createContext, useState, useContext, useEffect } from "react";
import apiClient from "../services/apiClient";
import { useAuthContext } from "./auth";
const ProgressContext = createContext(null);

export const ProgressContextProvider = ({ children }) => {
	const { user } = useAuthContext();
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState({ progress: "" });
	useEffect(() => {
		async function fetchProg() {
			const { data } = await apiClient.fetchProgress();
			setProgress(data);
		}
		fetchProg();
		console.log("data:", progress);
	}, []);

	const progressValue = { progress };
	console.log(progressValue, " HREERERERERER");
	return (
		<ProgressContext.Provider value={progressValue}>
			<>{children}</>
		</ProgressContext.Provider>
	);
};

export const useProgressContext = () => useContext(ProgressContext);
