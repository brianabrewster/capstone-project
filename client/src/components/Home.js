import React, {useState} from 'react';
import Login from './Login';
import Signup from './Signup';

function Home({handleLogin, setCurrentUser}) {
    const [show, setShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSignupShow = () => setSignupShow(true)
    const handleSignupClose = () => setSignupShow(false);

    return(
        <div>
            <h1>Schedule A Music Lesson</h1>
            <h2>Sign In / Register</h2>
            <div>
                <Login 
                handleLogin={handleLogin}
                setCurrentUser={setCurrentUser}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}/>
                <Signup 
                handleLogin={handleLogin}
                show={signupShow}
                handleClose={handleSignupClose}
                handleShow={handleSignupShow}/>
            </div>
        </div>
    )
}

export default Home;