import { useContext } from "react";
import { AuthContext } from "../Context/ProviderContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();



    //loader 
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <div className="w-16 h-16 border-4 border-gray-900 border-dashed rounded-full animate-spin "></div>
        </div>
    }

    if (!user) {
        return <Navigate to='/' state={{ from: location }} replace > </Navigate>
    }

    else {
        return children;
    }

};

export default PrivateRouter;