
import { useState, useEffect } from "react"
import { auth } from "../services/firebaseConection"
import { onAuthStateChanged } from "firebase/auth"
import { Navigate } from "react-router-dom"


//everytime when children is calling it is calling whatwhever there is inside private
export default function Private({children}) {

    // first validations will check if the user is signed or not (always starting as true) and the second one is false because
    // it will check the user situation and after the validation it will give access to user or not 
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false);


    useEffect(() => {


        //onAuthStateChanged is responsible to check if there is any user logged when user logout the onAuthStateChanged change 
        //the setsigned state to (false) then it is necessary to login again again 

        async function checkLogin() {

            const unsub = onAuthStateChanged(auth, (user) => {

                if(user) {

                    const userData = {
                        uid: user.uid,
                        email: user.email
                    };

                    localStorage.setItem("@detailUser", JSON.stringify(userData))
                    setLoading(false);
                    setSigned(true);
                }

                else{
                    setLoading(false);
                    setSigned(false);

                }
            })
        }

        checkLogin();
    }, [] )
    
    if(loading) {

        return(
            <div>

            </div>
        )
    }

    if(!signed) {

        return <Navigate to="/login"/>


    }


    return children;
}

