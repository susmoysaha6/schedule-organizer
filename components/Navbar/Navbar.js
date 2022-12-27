

import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";


const Navbar = ({ children }) => {
    const { user, googleSignIn, logOut } = useContext(AuthContext);
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }
    console.log(user);
    const menuItems = <React.Fragment>
        {
            user && user?.uid ?
                <div className="flex flex-col lg:flex-row lg:items-center">
                    <div className="avatar mx-auto lg:mr-5 my-2">
                        <div className="w-12 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL
                            } alt="" />
                        </div>
                    </div>
                    <p className="lg:mr-5 font-bold text-center my-2">{user?.displayName}</p>
                    <button className="btn bg-blue-800" onClick={handleLogOut}>Sign Out</button>
                </div>
                :
                <button className="btn bg-blue-800" onClick={handleGoogle}>Sign In</button>
        }
    </React.Fragment>


    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="max-w-[1440px] mx-auto navbar">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1  text-2xl font-bold">SCHEDULE ORGANIZER</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            {/* <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100">
                    {menuItems}
                </ul>
            </div> */}
        </div>
    );
};

export default Navbar;