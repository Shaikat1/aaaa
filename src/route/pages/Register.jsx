/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { updateProfile } from "firebase/auth"
import Swal from 'sweetalert2'
   
  const Register = () => {
    const {loginWithGoogle,register}=useContext(AuthContext)
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);
    const [name, setName] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    
    // get email and password
    const handleRegister = () =>{

      if(!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/.test(password)){
        return setError("password should be at least 8 character, one uppercase and one special character")
      }else{
        setError("")

        register(email,password)

        .then(result=>{
          Swal.fire('Registration successful')

          // use navigate
          navigate("/")
          
          // update user information
          updateProfile(result.user, {
            displayName: name , photoURL: photoURL? photoURL : "https://i.ibb.co/SBQGmnX/blank-profile-picture-973460-960-720-1.png"
          }).then(() => {
           
          }).catch((error) => {
            console.log(error)
          });
          

        })
        .catch(error => {
          setError(error.message)
        })
      }
        
    }
    
  const handleLoginWithGoogle = () => {
        loginWithGoogle()
        .then(result => {
          Swal.fire('Registration successful')
          navigate("/")
          
        })
        .catch(error => {
          console.log(error)
        })
  }

  

    return (
      <div className="flex justify-center items-center">
        <div className="mx-auto">
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray" className="text-center mt-6">
          Register
        </Typography>
        
        {
          error ? 
          <Typography color="gray" className="mt-1 font-normal text-center text-red-600">
          {error}
        </Typography>
        :
        <Typography color="gray" className="mt-1 font-normal text-center">
          Enter your details to register.
        </Typography>
        }
          <div className="flex justify-center">      
          <form className="mt-6 mb-2 w-80 sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Photo URL" onChange={(e)=> setPhotoURL(e.target.value)}/>
            <Input size="lg" label="Name" name="name" onChange={(e)=> setName(e.target.value)} required/>
            <Input size="lg" type="email" label="Email" name="email" required onChange={(e)=> setEmail(e.target.value)}/>
            <Input type="password" size="lg" label="Password" name="password" required onChange={(e)=> setPassword(e.target.value)}/>
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
          <Button className="mt-6 bg-[#1f7b76] hover:bg-[#75b482]" fullWidth onClick={handleRegister}>
            Register
          </Button>
        </form>
          </div>
        <div className="text-center">
              <h1>or</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="flex items-center"> Sign up with <button className="ml-2" onClick={handleLoginWithGoogle}><FcGoogle className="text-2xl"></FcGoogle></button></h1>
            </div>
        <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login">
                  <div>
                  <a href="#" className="font-medium text-[#1f7b76] underline ">
                Login
                </a>
                  </div>
            </Link>
          </Typography>
      </Card>
      </div>
      </div>
    );
  }

  export default Register;