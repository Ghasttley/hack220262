import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-slate-200 py-3 px-4 sm:px-8 flex justify-between items-center shadow-sm">
      <div className="text-xl font-bold text-slate-800"></div>
      <ul className="flex space-x-2">
        <li className="py-2 px-4 hover:bg-slate-300 rounded-full transition-colors">
          <Link to="/register" className="font-semibold text-slate-700">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
}