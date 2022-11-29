import '../App.css';
import React, {useState, useEffect} from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import Browse from './Browse';
import NewLessonForm from './NewLessonForm';
import Signup from './Signup';

function App() {

  const history = useHistory()
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [currentUser, setCurrentUser] = useState({})
  const [lessons, setLessons] = useState([]);

  function handleLogin(user){
    history.push(`/profile`)
    setCurrentUser(user)
  }

  useEffect(() => {
    fetch("/lessons")
      .then((r) => r.json())
      .then((lessons) => setLessons(lessons));
  }, []);


  useEffect(() => {
    fetch("/students")
      .then((r) => r.json())
      .then((students) => setStudents(students));
  }, []);


  useEffect(() => {
    fetch("/teachers")
      .then((r) => r.json())
      .then((teachers) => setTeachers(teachers));
  }, []);
  
  return (
    <div className="App">
      <header>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home handleLogin={handleLogin} setCurrentUser = {setCurrentUser}/>
          </Route>
          <Route path="/profile">
            <Profile lessons={lessons} students={students} teachers={teachers}/>
          </Route>
          <Route path="/browse">
            <Browse students={students} teachers={teachers}/>
          </Route>
          <Route path="/newlesson">
            <NewLessonForm lessons={lessons} students={students} teachers={teachers}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
