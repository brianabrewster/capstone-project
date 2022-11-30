import React, {useState} from 'react';
import Login from './Login';
import StudentSignup from './StudentSignup';
import TeacherSignup from './TeacherSignup';

function Home({handleLogin, currentUser, setCurrentUser, isStudent, setIsStudent}) {
    const [show, setShow] = useState(false);
    const [signupShow, setSignupShow] = useState(false);
    const [teacherSignupShow, setTeacherSignupShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSignupShow = () => setSignupShow(true)
    const handleTeacherSignupShow = () => setTeacherSignupShow(true)
    const handleSignupClose = () => setSignupShow(false);
    const handleTeacherSignupClose = () => setTeacherSignupShow(false);

    return(
        <div>
            <h1>Schedule A Music Lesson</h1>
            <h2>Sign In / Register</h2>
            <div>
                <Login 
                isStudent={isStudent}
                setIsStudent={setIsStudent}
                handleLogin={handleLogin}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}/>
                <StudentSignup 
                isStudent={isStudent}
                setIsStudent={setIsStudent}
                handleLogin={handleLogin}
                show={signupShow}
                handleClose={handleSignupClose}
                handleShow={handleSignupShow}/>
                <TeacherSignup 
                isStudent={isStudent}
                setIsStudent={setIsStudent}
                handleLogin={handleLogin}
                show={teacherSignupShow}
                handleClose={handleTeacherSignupClose}
                handleShow={handleTeacherSignupShow}/>
            </div>
        </div>
    )
}

export default Home;