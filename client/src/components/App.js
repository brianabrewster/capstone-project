import '../App.css';
import React, {useState, useEffect} from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import NavBar from './NavBar';
import Home from './Home';
import Profile from './Profile';
import Browse from './Browse';
import NewLessonForm from './NewLessonForm';

function App() {

  const history = useHistory()
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)
  const [lessons, setLessons] = useState([]);
  const [isStudent, setIsStudent] = useState(false)

  function handleLogin(user){
    history.push(`/profile`)
    setCurrentUser(user)
  }

  function addLesson(newLesson) {
    setLessons((lessons) => [...lessons, newLesson]);
  }


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);


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
  

  function removeLesson(id) {
    const removeSelectedLesson = lessons.filter(
      (lesson) => lesson.id !== id
    );
    setLessons(removeSelectedLesson);
  }


  function updateLesson(updatedLesson) {
    const updatedLessons = lessons.map((lesson) => {
      if (lesson.id === updatedLesson.id) {
        return updatedLesson;
      } else {
        return lesson;
      }
    });
    setLessons(updatedLessons);
  }


  return (
    <div className="App">
      <header>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <Switch>
          <Route exact path="/">
            <Home isStudent={isStudent} setIsStudent={setIsStudent} handleLogin={handleLogin} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path="/profile">
            <Profile lessons={lessons} students={students} teachers={teachers} removeLesson={removeLesson} updateLesson={updateLesson} currentUser={currentUser}/>
          </Route>
          <Route path="/browse">
            <Browse setStudents={setStudents} setTeachers={setTeachers} students={students} teachers={teachers} isStudent={isStudent} currentUser={currentUser}/>
          </Route>
          <Route path="/newlesson">
            <NewLessonForm students={students} teachers={teachers} addLesson={addLesson}/>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
