import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthContext } from "../../../context/context";
import { privateRoutes, publicRoutes } from "../../../router/routes";
import Loader from "../Loader/Loader";



const AppRouter = () => {

const {isAuth, loading} = useContext(AuthContext);

if(loading) {
    return <Loader/>;
}

    



    return (
        isAuth
            ?
            <Routes>

                {privateRoutes.map(route =>
                    <Route element={<route.element />} path={route.path} key={route.path} />
                )}

                <Route path="/*" element={<Navigate to="/Posts" replace />} />
            </Routes>
            :
            <Routes>

                {publicRoutes.map(route =>
                    <Route element={<route.element />} path={route.path} key={route.path} />
                )}

                <Route path="/*" element={<Navigate to="/Login/" replace />} />
            </Routes>

    )
}
export default AppRouter;