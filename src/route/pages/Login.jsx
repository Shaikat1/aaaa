/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
  import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
   
 const Login= () => {
  const {loginWithGoogle,login}=useContext(AuthContext)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

  const handleLoginWithGoogle = () => {
        loginWithGoogle()
        .then(result => {
          Swal.fire('Login successful')
          navigate(location?.state ? location.state : "/")
          
        })
        .catch(error => {
          console.log(error)
        })
  }

  const handleLogin = () =>{
    if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/.test(password)){
      return setError("password should be at least 8 character, one uppercase and one special character")
    }else{
      setError("")

      login(email,password)

      .then(result=>{
        Swal.fire('Login successful')
        navigate(location?.state ? location.state : "/")
        
      })
      .catch(error => {
        setError(error.message)
      })
    }
  }

    return (
      <div className="flex justify-center">
        <div className="">
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center mt-5">
          Login
        </Typography>
          {
          error ? 
            <Typography color="gray" className="mt-1 font-normal text-center text-red-600">
          {error}
          </Typography>
          :
          <Typography color="gray" className="mt-1 font-normal text-center">
          Enter your details to login.
          </Typography>
          }
          <div className="flex justify-center">
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Email" onChange={(e)=> setEmail(e.target.value)} required/>
            <Input type="password" size="lg" label="Password" required onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 hover:bg-[#1f7b76] bg-[#75b482]" fullWidth onClick={handleLogin}>
            Login
          </Button>
        </form>
            </div>
            <div className="text-center">
              <h1>or</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="flex items-center">Login with <button className="ml-2" onClick={handleLoginWithGoogle}><FcGoogle className="text-2xl"></FcGoogle></button></h1>
            </div>

        <Typography color="gray" className="mt-4 text-center font-normal ">
            Already have an account?{" "}
            <Link to="/register">
                  <div>
                  <a href="#" className="font-medium text-[#1f7b76] underline ">
              Register
                </a>
                  </div>
            </Link>
          </Typography>
      </Card>
      </div>
      </div>
    );
  }

  export default Login;