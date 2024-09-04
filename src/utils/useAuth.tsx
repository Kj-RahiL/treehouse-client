import { useContext } from "react";
import { AuthContext } from "../Providres/AuthProviders";



const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;