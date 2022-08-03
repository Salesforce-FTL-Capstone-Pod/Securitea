import { useAuthContext } from "../../contexts/auth";
import Login from "../Login/Login";

export default function AuthRoute({ element }) {
	const { user, initialized } = useAuthContext();
	if (!initialized) return null;

	if (initialized && !user?.email) return <Login />;

	return <>{element}</>;
}
