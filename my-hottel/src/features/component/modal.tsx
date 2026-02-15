import useModal from "@/features/hook/useModalHook";

interface AuthModalProps {
  mode: "signin" | "signup";
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Modal({ mode, open, setOpen }: AuthModalProps) {
  const { email, setEmail, password, setPassword } = useModal();
 
  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${mode}:`, { email, password });
    setOpen(false);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => setOpen(false)}
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <input
              type="email"
              placeholder="Email address"
              className="w-full mb-4 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all mb-4"
            >
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </button>

            {mode === "signin" && (
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  Create one
                </button>
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
