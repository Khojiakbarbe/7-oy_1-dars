import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const provider = new GoogleAuthProvider();

import { useNavigate } from 'react-router-dom'


function Login() {

    const navigate = useNavigate();


    function logIN() {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(() => {
                navigate('/')
            }).catch((error) => {
                alert(error.message)
            });
    }

    return (
        <div>
            <button className="logBtn logIn" onClick={logIN}>Log IN</button>
        </div>
    )
}

export default Login