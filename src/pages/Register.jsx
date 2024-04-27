import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { NavLink} from "react-router-dom";
import bannerImageUrl from '../assets/user.png'
import { AuthContext } from "../provider/AuthProvider";
const Register = () => {
  const { createUser, logOut, updateUserData } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");

    
    if (password.length < 6) {
      toast.error("Password Must Be 6 Character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Must have an Uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Must have an Lowercase letter");
      return;
    }

    createUser(email, password)
    .then((result) => {
      // Registration successful
      toast.success("Successfully Registered!");
      return updateUserData(name, photo);
    })
    .then(() => {
      logOut();
    })
    .catch((error) => {
      
      toast("Registration failed: " + error.message);
    });
  
      
     
  };

  return (
    <>
   
    <div className="px-8 lg:px-0 relative h-[100vh] overflow-hidden flex justify-center items-center rounded-3xl" style={{
    background: `linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)), url(${bannerImageUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
}}>


        <div className="card shadow-2xl bg-base-100 w-full md:w-1/2 lg:w-1/3">
          <h1 className="text-center text-2xl text-black font-semibold mt-6">
            Please Register
          </h1>
          <form onSubmit={handleRegister} className="card-body p-6">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                name="photo"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <span 
                onClick={() => setShowPass(!showPass)}
                className="absolute bottom-4 right-2 cursor-pointer"
              >
                {showPass ?<FaEye></FaEye>: <FaEyeSlash></FaEyeSlash> }
              </span>
            </div>
            <div className="form-control">
              <button className="btn bg-black hover:bg-gray-dark hover:text-black text-white">
                Register
              </button>
            </div>

            <p>
              Already Have An Account?{" "}
              <NavLink className="text-black" to="/login">
                Login
              </NavLink>
            </p>

            <p className="text-red-400"></p>
          </form>
        </div>
      </div>

    

     

      
    </>
  );
};

export default Register;
