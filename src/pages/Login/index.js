import "./login.css"
import { Logo } from "../../components/Logo"
import { useState } from "react"

import { auth } from "../../services/firebaseConection"
import { signInWithEmailAndPassword} from "firebase/auth"

import {useNavigate} from "react-router-dom" 
import { toast } from "react-toastify"

import{Input} from "../../components/Input"

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();


    function handleLogin(event) {
        event.preventDefault();

        if( email === "" || password === "") {

            toast.error("Please fill all fields")
            return;
        }

        //it is getting the fiels from firebase db that it is already registered and it is using the auttetication 
        // from firebase library that it is already imported above

       signInWithEmailAndPassword(auth, email, password)

       .then(() => {


        //toast library that emits a pop up that says its succeful or not and it is using the navigate from react route library
        // and it is sending to admin page 

        toast.success("Success")
        navigate("/admin", {replace: true})

       })

       .catch(() => {

        toast.error("Error login")
        console.log("error login")

       })
    }
    
    //in this part it is using Input from components so just to make easier as it is already stylized and pattern to use in all pages 
    return(
        <div className="login-container">
        <Logo/>
        <form className="form" onSubmit={handleLogin}>
          
            <Input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={ (event) => setEmail(event.target.value) }
            />

            <Input 
            type="password"
            placeholder="Password"
            autoComplete="on"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            />

            <button type="submit">Access</button>

        </form>
        </div>
    )
}