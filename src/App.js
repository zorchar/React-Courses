import './styles/styles.scss'
import Header from './components/main/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/main/Home/Home';
import PageNotFound from './components/main/PageNotFound';
import LoginContextProvider from './context/LoginContext';
import LoginForm from './components/main/login/LoginForm';
import EditSelfForm from './components/edit/EditSelfForm';
import PasswordReseted from './components/edit/PasswordReseted';
import ChangePassword from './components/edit/ChangePassword';

function App() {
  return (
    <BrowserRouter>
      <LoginContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/prof/edit" element={<EditSelfForm />} />
          <Route path="password-reseted" element={<PasswordReseted />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="/student/edit" element={<EditSelfForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </LoginContextProvider>
    </BrowserRouter>
  )
}

export default App;
