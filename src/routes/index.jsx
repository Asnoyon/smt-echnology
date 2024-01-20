import { Navigate } from "react-router-dom"

const appRoutes = [
    {
        path: "dashboard",
        element: "dashboard",
        children: [
            { path: "*", element: <Navigate to="/404" /> },
            
        ],
    }, 
];

/* Generate permitted routes */
export const permittedRoutes = () => {
    // const token = localStorage.getItem("token");
    const token = "ok"
    if (token) {
        return appRoutes;
    }
    return [];
};