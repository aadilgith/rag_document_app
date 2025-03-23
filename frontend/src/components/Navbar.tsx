import { Link } from "react-router-dom";
import { logout } from "../api/auth";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">DocRAG</Link>
      <div>
        <Link to="/upload" className="px-4">Upload</Link>
        <Link to="/qa" className="px-4">Q&A</Link>
        <button onClick={logout} className="px-4">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
