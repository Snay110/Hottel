import { useAuthForm } from "../hook/useAuthForm";

interface AuthModalProps {
  mode: "signin" | "signup";
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function AuthModal({ mode, open, setOpen }: AuthModalProps) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    error,
    resetForm,
    handleSubmit,
  } = useAuthForm();

  if (!open) return null;

  const handleClose = () => {
    resetForm();
    setOpen(false);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(mode);
    if (!error) {
      handleClose();
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={handleClose}
      />

      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 animate-in fade-in zoom-in-95"
          style={{ overflow: "hidden" }}
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </h2>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 hover:bg-gray-100 rounded-lg"
              aria-label="Close"
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

          <form onSubmit={onSubmit} className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            <input
              type="email"
              placeholder="Email address"
              className="w-full mb-4 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full mb-6 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? "Loading..."
                : mode === "signin"
                  ? "Sign In"
                  : "Sign Up"}
            </button>

            {mode === "signin" && (
              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    resetForm();
                  }}
                  className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  Create one
                </button>
              </p>
            )}

            {mode === "signup" && (
              <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    resetForm();
                  }}
                  className="text-indigo-600 hover:text-indigo-700 font-semibold"
                >
                  Sign in
                </button>
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
