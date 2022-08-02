import './styles/styles.scss'
import Header from './components/main/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/main/Home/Home';
import PageNotFound from './components/general/PageNotFound'
import LoginContextProvider from './context/LoginContext';
import LoginForm from './components/main/login/LoginForm';
import CoursesContextProvider from './context/CoursesContext';
import ProtectedRoute from './components/general/ProtectedRoute';
import AddStudentForm from './components/users/professor/AddStudentForm';
import Students from './components/users/professor/Students';
import MyInformation from './components/users/MyInformation';
import StudentInformation from './components/users/StudentInformation';
import AddCoursePage from './components/courses/AddCoursePage';
import CourseStudents from './components/courses/course/CourseStudents';
import ModalContextProvider from './context/ModalContext';
import Modal from './components/courses/course/class/Modal';
import ProfessorViewCourses from './components/courses/ProfessorViewCourses';
import StudentViewCourses from './components/courses/StudentViewCourses';
import ProfessorHome from './components/users/ProfessorHome';
import StudentHome from './components/users/StudentHome';
import ProfessorViewCourse from './components/courses/course/ProfessorViewCourse';
import StudentViewCourse from './components/courses/course/StudentViewCourse';

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <CoursesContextProvider>
          <ModalContextProvider>
            <Header />

            <Routes>
              <Route path="/*" element={<PageNotFound />} />
              <Route path="login" element={<LoginForm />} />

              <Route path="" element={<ProtectedRoute replace />} >

                <Route path="home" element={<Home />} />

                <Route path='professors'>
                  <Route path="home" element={<ProfessorHome />} />
                  <Route path="me" element={<MyInformation />} />

                  <Route path='students'>
                    <Route path="" element={<Students />} />
                    <Route path=":studentId" element={<StudentInformation />} />
                    <Route path="add-student" element={<AddStudentForm />} />
                  </Route>

                  <Route path='courses'>
                    <Route path="" element={<ProfessorViewCourses />} />
                    <Route path="add-course" element={< AddCoursePage />} />
                    <Route path=":courseId" element={<ProfessorViewCourse />} />
                    <Route path=":courseId/students" element={<CourseStudents />} />
                  </Route>
                </Route>

                <Route path='students'>
                  <Route path="home" element={<StudentHome />} />
                  <Route path="me" element={<MyInformation />} />
                  <Route path="me/courses" element={<StudentViewCourses />} />
                  <Route path="me/courses/:courseId" element={<StudentViewCourse />} />
                </Route>

              </Route>
            </Routes>

            <Modal />
          </ModalContextProvider>
        </CoursesContextProvider>
      </LoginContextProvider>
    </BrowserRouter>
  )
}

export default App;
