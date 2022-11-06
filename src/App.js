import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Contact, Login, Register, Password} from "./pages" 
import { Header, Footer } from "./components" 
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/contact" element={ <Contact/> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/resetpassword" element={ <Password /> } />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
