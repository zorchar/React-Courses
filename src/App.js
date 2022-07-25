import './styles/styles.scss'
import Header from './components/main/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/main/Home/Home';
import PageNotFound from './components/general/PageNotFound'
import LoginContextProvider from './context/LoginContext';
import LoginForm from './components/main/login/LoginForm';
import CoursesContextProvider from './context/CoursesContext';
import ProtectedRoute from './components/general/ProtectedRoute';
import Courses from './components/courses/Courses';
import Course from './components/courses/course/Course';
import AddStudentForm from './components/users/professor/AddStudentForm';
import Students from './components/users/professor/Students';
import MyInformation from './components/users/MyInformation';
import StudentInformation from './components/users/StudentInformation';
import AddCoursePage from './components/courses/AddCoursePage';
import UserHome from './components/users/UserHome';
import CourseStudents from './components/courses/course/CourseStudents';
import ModalContextProvider from './context/ModalContext';
import Modal from './components/courses/course/class/Modal';

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <CoursesContextProvider>
          <ModalContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="courses/:courseName" element={<Course />} />
              <Route path="/professors/" element={
                <ProtectedRoute>
                  <UserHome />
                </ProtectedRoute>
              } />
              <Route path="/professors/students" element={
                <ProtectedRoute>
                  <Students />
                </ProtectedRoute>
              } />
              <Route path="/courses/:courseName/students" element={
                <CourseStudents />
              } />
              <Route path="/professors/students/:studentId" element={
                <ProtectedRoute>
                  <StudentInformation />
                </ProtectedRoute>
              } />
              <Route path="/professors/students/add-student" element={
                <ProtectedRoute>
                  <AddStudentForm />
                </ProtectedRoute>
              } />
              <Route path="/courses/add-course" element={< AddCoursePage />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/students/" element={
                <ProtectedRoute>
                  <UserHome />
                </ProtectedRoute>
              } />
              <Route path="/professors/me" element={<MyInformation />} />
              <Route path="/students/me" element={<MyInformation />} />
              <Route path="/home" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />
              <Route path="/login" element={<LoginForm />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Modal />
          </ModalContextProvider>
        </CoursesContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  )
}

export default App;
