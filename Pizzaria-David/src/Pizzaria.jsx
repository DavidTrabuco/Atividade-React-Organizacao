




import './index.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import AboutUsPage from './pages/AboutUsPage'
import MenuPage from './pages/MenuPage'
import AppPage from './pages/AppPage'
import NewsletterPage from './pages/NewsletterPage'
import ContactPage from './pages/ContactPage'
import Reservation from './components/Reservation/Reservation'
import Login from './components/Login/Login'
import AdminLogin from './components/AdminLogin/AdminLogin'


function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/app" element={<AppPage />} />
                <Route path="/newsletter" element={<NewsletterPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin/login" element={<AdminLogin />} />
            </Routes>
        </div>
    )
}

export default App
