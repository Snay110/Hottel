import { AuthModal } from "../component/AuthModal";
import { useSignInModal } from "@/features/hook/useSignInModal";
import { NavLink } from "react-router-dom";
import { ROUTES } from "@/shered/model/routes";

export function Header() {
  const { open, setOpen, mode, setMode } = useSignInModal();
 
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b border-gray-100 sticky top-0 z-30">
        <div className="text-2xl font-bold text-indigo-600">MyHotel</div>

        <nav className="hidden md:flex gap-8 flex-1 justify-center">
          <NavLink
            to={ROUTES.HOME}
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
          >
            Home
          </NavLink>
          <NavLink
            to={ROUTES.ROOMS}
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
          >
            Rooms
          </NavLink>
          <a
            href="#"
            className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
          >
            Contact
          </a>
        </nav>

        <div className="flex gap-3">
          <button
            onClick={() => {
              setMode("signin");
              setOpen(true);
            }}
            className="px-6 py-2.5 text-indigo-600 border-2 border-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Sign In
          </button>

          <button
            onClick={() => {
              setMode("signup");
              setOpen(true);
            }}
            className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Sign Up
          </button>
        </div>
      </header>

      <AuthModal mode={mode} open={open} setOpen={setOpen} />
    </>
  );
}
