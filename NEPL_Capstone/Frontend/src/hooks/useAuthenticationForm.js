import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthenticationForm = ({ user }) => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState({
		email: null,
		first_name: null,
		last_name: null,
		password: null,
		passwordConfirm: null,
		title: null,
		birthday: null,
		isManager: false,
	});

	// useEffect(() => {
	// 	if (user?.email) {
	// 		navigate("/UserDashboard");
	// 	}
	// }, [user, navigate]);

	const emailRegex = /[^@]+@[^@]+\.[^@]+/;

	function validateEmail(email) {
		return String(email).toLowerCase().match(emailRegex);
	}
	const handleOnInputChange = (event) => {
		console.log(event);

		if (event?.isManager != null) {
			setForm((f) => ({ ...f, isManager: event.isManager }));

			//Resets the fields that are exclusive to a type of user
			if (!event.isManager) setForm((f) => ({ ...f, ["company"]: "" })); //If user, reset company
			if (event.isManager) setForm((f) => ({ ...f, ["token"]: "" })); //If manager, reset token
		}

		if (event.constructor.name == "Date") {
			setForm((f) => ({ ...f, birthday: new Date(event) }));
		}

		if (event.target?.name === "email") {
			if (!validateEmail(event.target.value)) {
				setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
			} else {
				delete errors.email;
			}
		}
		if (
			event.target?.name === "password" ||
			event.target?.name === "passwordConfirm"
		) {
			if (event.target.value !== form.password) {
				setErrors((e) => ({
					...e,
					passwordConfirm: "Passwords do not match.",
				}));
			} else {
				delete errors.passwordConfirm;
			}
		}

		if (event?.title && event.title != "Preferred Title") {
			setForm((f) => ({ ...f, title: event.title }));
		}
		if (event?.company && event.company != "Select Company") {
			setForm((f) => ({ ...f, company: event.company }));
		}

		setForm((f) => ({ ...f, [event.target?.name]: event.target?.value }));

		console.log("Form Set!");
	};

	return {
		form,
		errors,
		setErrors,
		handleOnInputChange,
	};
};
