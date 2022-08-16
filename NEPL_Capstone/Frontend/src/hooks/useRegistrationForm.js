import { useState } from "react";
import { useAuthenticationForm } from "../hooks/useAuthenticationForm";
import { useAuthContext } from "../contexts/auth";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";

export const useRegistrationForm = () => {
	const { user, setUser } = useAuthContext();
	const { form, errors, setErrors, handleOnInputChange } =
		useAuthenticationForm({ user });

	console.log(form)
	const [isProcessing, setIsProcessing] = useState(false);
	const navigate = useNavigate();
	const handleOnSubmit = async () => {
		setIsProcessing(true);
		setErrors((e) => ({ ...e, form: null }));

		if (form.passwordConfirm !== form.password) {
			setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
			setIsProcessing(false);
			return;
		} else {
			delete errors.passwordConfirm;
		}

		const userData = {};

		if (form?.email) userData.email = form.email;
		if (form?.password) userData.password = form.password;
		if (form?.first_name) userData.first_name = form.first_name;
		if (form?.last_name) userData.last_name = form.last_name;
		if (form?.title) userData.title = form.title;
		if (form?.birthday) userData.birthday = form.birthday;
		if (form?.token) userData.token = form.token;
		if (form?.company) userData.company = form.company;
		if (form?.isManager) userData.isManager = form.isManager;
		
		const requiredFields = [
			"email",
			"password",
			"first_name",
			"last_name",
			"birthday",
			"title",
		];

		const tooltips = [
			"email",
			"password",
			"first name",
			"last name",
			"birthday",
			"title",
		];

		var skipRest = false;
		let counter = 0;

		requiredFields.forEach((property) => {
			if (!userData.hasOwnProperty(property)) {
				setErrors({ form: `You forgot to add your ${tooltips[counter]}!` });
				skipRest = true;
				counter++;
			}
		});

		const { data, error } = await apiClient.signupUser(userData);

		if (data) {
			setUser(data.user);
			apiClient.setToken(data.token);
			navigate("/UserDashboard");
		}
		if (error && !skipRest) {
			setErrors((e) => ({ ...e, form: error }));
		}

		setIsProcessing(false);
	};

	return {
		form,
		errors,
		isProcessing,
		handleOnInputChange,
		handleOnSubmit,
	};
};
