import { useState } from "react";
import { useAuthenticationForm } from "../hooks/useAuthenticationForm";
import { useAuthContext } from "../contexts/auth";
import apiClient from "../services/apiClient";
import { useNavigate } from "react-router-dom";

export const useRegistrationForm = () => {
	const { user, setUser } = useAuthContext();
	const { form, errors, setErrors, handleOnInputChange } =
		useAuthenticationForm({ user });
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
			setErrors((e) => ({ ...e, passwordConfirm: null }));
		}

		const { data, error } = await apiClient.signupUser({
			email: form.email,
			password: form.password,
			first_name: form.first_name,
			last_name: form.last_name,
			title: form.title,
			birthday: form.birthday,
			token: form.token || null,
			company: form.company || null,
			isManager: form.isManager,
		});
		if (data) {
			console.log(data)
			setUser(data.User)
			apiClient.setToken(data.token);
			navigate("/UserDashboard");
		}
		if (error) {
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
