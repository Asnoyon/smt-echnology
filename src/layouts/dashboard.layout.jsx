import { Outlet } from "react-router-dom";


export const DashboardLayout = () => {
    return (
        <>
            <section className="container">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 my-5">
                    <div className=" col-span-4">
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    );
};
