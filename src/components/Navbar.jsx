import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Avatar } from "@material-tailwind/react";
const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)

    console.log(user)

    const handleLogout = () => {
        logOut() .then()
    }
    return (
        <div className="bg-[#f7f5ec] md:py-6">
            <div className="navbar px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 list-none">
        <li >
        <NavLink
     to="/"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#1f7b76] underline" : ""
    }
    >
     Home
    </NavLink>
        </li>
        <li>
        <NavLink
     to="/blogs"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#1f7b76] underline" : ""
    }
    >
     Blog
    </NavLink>
        </li>
        <li>
        <NavLink
     to="/register"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#1f7b76] underline" : ""
    }
    >
     Register
    </NavLink>
        </li>
      </ul>
    </div>
    <div>
        <h1 className="text-3xl font-extrabold hidden md:block"><span className="text-[#1f7b76]">Social</span> <span className="text-[#75b482]">Event</span></h1>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-4 text-xl font-medium">
    <li>
        <NavLink
     to="/"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#1f7b76] underline" : ""
    }
    >
     Home
    </NavLink>
        </li>
        <li>
        <NavLink
     to="/blogs"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#1f7b76] underline" : ""
    }
    >
     Blog
    </NavLink>
        </li>
        <li>
        <NavLink
     to="/register"
    className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "text-[#1f7b76] underline" : ""
    }
    >
     Register
    </NavLink>
        </li>
    </ul>
  </div>
  <div className="navbar-end">
        {
            user ?
            <div className="flex justify-center items-center gap-7">
                <div>
                    {
                      user.photoURL ?
                      <div className="flex flex-col justify-center items-center mr-1">
                        <Avatar src={user.photoURL} alt="avatar" size="sm" />
                        <h1 className="text-sm hidden md:block">
                            {user.displayName}
                        </h1>
                      </div>
                      :
                      <h1 className="text-sm mr-1">
                      {user.email}
                    </h1>  
                    }
                </div>
                <div className=" text-3xl text-[#75b482] font-semibold">
            <NavLink
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#1f7b76]" : ""
                }
                 onClick={handleLogout}>
                Logout
                </NavLink>
            </div>
            </div>

            :
            
            <div className="text-3xl text-[#75b482] font-semibold">
            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#1f7b76]" : ""
                }
                >
                Login
                </NavLink>
            </div>

        }
  </div>
  
</div>
        </div>
    );
};

export default Navbar;