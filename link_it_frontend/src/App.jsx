import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import Feed from "./pages/Feed";
import Navbar from "./components/Navbar";
import UserProfile from './pages/UserProfile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/create" element={<CreatePost />} />
        <Route path="/" element={<Feed />} />
        <Route path="/profile/:userId" element={<UserProfile />} />

      </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

