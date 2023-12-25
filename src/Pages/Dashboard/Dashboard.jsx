import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { MdClearAll, MdOutlineHomeRepairService } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { BiSkipPrevious } from "react-icons/bi";


const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        // You can customize the loading indicator based on your design
        return <p >Loading...</p>;
    }

    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content  bg-slate-600">
                    <div className=" text-center mt-6 ">
                        <label
                            htmlFor="my-drawer-2"
                            className="btn btn-primary drawer-button lg:hidden"
                        >
                            Open drawer
                        </label>
                    </div>
                    <div className="p-8">

                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side lg:w-full ">
                    <label
                        htmlFor="my-drawer-2"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 lg:w-80 md:w-60 w-64 min-h-full  bg-teal-500 text-base-content ">
                        <>
                            <div className="flex items-center justify-center space-x-4 mb-8">
                                {user && user.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        alt="Profile Avatar"
                                        className="lg:h-16 lg:w-16 md:h-8 md:w-8 w-9 h-9  rounded-full"
                                    />
                                ) : (
                                    <div className="h-16 w-16 bg-gray-300 rounded-full"></div>
                                )}
                                <div>
                                    <h2 className="lg:text-xl md:text-base font-bold">{user.displayName}</h2>
                                    <p className="text-gray-700">{user && user.email}</p>
                                </div>
                            </div>
                            <h1 className="text-3xl font-bold text-white "></h1>

                            <li className="mt-5 lg:text-xl md:text-base font-medium text-white">
                                <NavLink to="/dashboard">
                                    <MdOutlineHomeRepairService />
                                    Task Management
                                </NavLink>
                            </li>
                            <li className="my-5 lg:text-xl md:text-base font-medium text-white">
                                <NavLink to="/dashboard/addtask"><IoIosAddCircleOutline />
                                    Add Task</NavLink>
                            </li>
                            <li className="lg:text-xl md:text-base font-medium text-white">
                                <NavLink to="/dashboard/alltask">
                                    <MdClearAll /> All Task
                                </NavLink>
                            </li>
                            <li className="my-5 lg:text-xl md:text-base font-medium text-white">
                                <NavLink to="/dashboard/previoustask">
                                <BiSkipPrevious />
 Previous Task
                                </NavLink>
                            </li>
                            <li className="my-40 lg:text-xl md:text-base font-medium text-white">
                                <NavLink to="/"><FaHome />
 Back Home page !</NavLink>
                            </li>
                        </>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
