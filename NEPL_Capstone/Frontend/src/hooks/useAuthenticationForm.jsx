import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthenticationForm = ({ user }) => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	const [form, setForm] = useState({
		email: "",
		first_name: "",
		last_name: "",
		password: "",
		passwordConfirm: "",
		title: "",
		birthday: "",
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
		if (event?.target?.name == "isManagerName") {
			setForm((f) => ({ ...f, isManager: event.target.checked }));
			console.log(form.isManager);

			//Resets the fields that are exclusive to a type of user
			if (!event.target.checked) setForm((f) => ({ ...f, ["company"]: "" })); //If user, reset company
			if (event.target.checked) setForm((f) => ({ ...f, ["token"]: "" })); //If manager, reset token
		}

		if (event?.constructor.name == "Date") {
			setForm((f) => ({ ...f, birthday: new Date(event) }));
		}

		if (event?.target?.name === "email") {
			if (!validateEmail(event.target.value)) {
				setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
			} else {
				delete errors.email;
			}
		}
		if (
			event?.target?.name === "password" ||
			event?.target?.name === "passwordConfirm"
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

		setForm((f) => ({ ...f, [event?.target?.name]: event?.target?.value }));
	};

	return {
		form,
		errors,
		setErrors,
		handleOnInputChange,
	};
};
