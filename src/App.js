import './styles/styles.scss'
import Header from './components/main/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/main/Home/Home';
import PageNotFound from './components/main/PageNotFound';
import LoginContextProvider from './context/LoginContext';
import LoginForm from './components/main/login/LoginForm';
import Me from './components/edit/Me';
import PasswordReseted from './components/edit/PasswordReseted';
import ChangePassword from './components/edit/ChangePassword';
import CoursesContextProvider from './context/CoursesContext';
import ProfessorHome from './components/professor/ProfessorHome';
import ProtectedRoute from './components/ProtectedRoute';
import Courses from './components/professor/Courses';
import Course from './components/professor/Course';
import AddStudentForm from './components/professor/AddStudentForm';
import Students from './components/professor/Students';
import StudentHome from './components/student/StudentHome';
import UserInformation from './components/UserInformation';

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <CoursesContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/professors/courses/:courseName" element={<Course />} />
            <Route path="/professors/" element={
              <ProtectedRoute>
                <ProfessorHome />
              </ProtectedRoute>
            } />
            <Route path="/professors/students" element={
              <ProtectedRoute>
                <Students />
              </ProtectedRoute>
            } />
            <Route path="/professors/students/:studentId" element={
              <ProtectedRoute>
                <UserInformation />
              </ProtectedRoute>
            } />
            <Route path="/professors/students/add-student" element={
              <ProtectedRoute>
                <AddStudentForm />
              </ProtectedRoute>
            } />
            <Route path="/professors/courses" element={<Courses />} />
            <Route path="/students/" element={
              <ProtectedRoute>
                <StudentHome />
              </ProtectedRoute>
            } />
            <Route path="/professors/me" element={<Me />} />
            <Route path="password-reseted" element={<PasswordReseted />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="/students/me" element={<Me />} />
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/login" element={<LoginForm />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CoursesContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  )
}

export default App;
