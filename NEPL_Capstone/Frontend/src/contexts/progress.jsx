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
	}, []);

	const progressOne = progress?.progress["1"] || 0;
	const progressPercentOne =
		(progressOne?.progress / progressOne?.steps) * 100 || 0;

	const progressTwo = progress?.progress["2"] || 0;
	const progressPercentTwo =
		(progressTwo?.progress / progressTwo?.steps) * 100 || 0;

	const progressValue = {
		progress: progress,
		percentOne: progressPercentOne,
		percentTwo: progressPercentTwo,
	};
	return (
		<ProgressContext.Provider value={progressValue}>
			<>{children}</>
		</ProgressContext.Provider>
	);
};

export const useProgressContext = () => useContext(ProgressContext);
