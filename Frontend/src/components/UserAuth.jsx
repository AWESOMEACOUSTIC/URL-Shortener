import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";


export default function UserAuth({
  title = "Login with e-mail",
  subtitle = "Please enter your details to login WasDo",
  buttonText = "Login",
  isSignup = false,
  onSubmit
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("selcnguler@gmail.com");
  const [password, setPassword] = useState("**************");

  const handleSubmit = () => {
    if (onSubmit)
      onSubmit(isSignup ? { name, email, password } : { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-xl">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 2xl:py-8 2xl:px-9">
          {/* Logo + headings */}
          <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-12 lg:h-12 bg-black rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-5 lg:h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-semibold text-gray-900">
                WasDo
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-2">
              {title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-500 text-center">
              {subtitle}
            </p>
          </div>

          {/* Form */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-5">
            {/* Name (signup only) */}
            {isSignup && (
              <div className="space-y-2 sm:space-y-3">
                <label
                  htmlFor="name"
                  className="text-sm sm:text-base md:text-lg lg:text-lg font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 sm:pl-12 md:pl-14 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-16 text-sm sm:text-base md:text-lg lg:text-xl border border-gray-200 rounded-lg focus:border-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none px-3 py-2"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div className="space-y-2 sm:space-y-3">
              <label
                htmlFor="email"
                className="text-sm sm:text-base md:text-lg lg:text-lg font-medium text-gray-700 "
              >
                E-mail Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 sm:pl-12 md:pl-14 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-16 text-sm sm:text-base md:text-lg lg:text-xl border border-gray-200 rounded-lg focus:border-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none px-3 py-2"
                  placeholder="selcnguler@gmail.com"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2 sm:space-y-3">
              <label
                htmlFor="password"
                className="text-sm sm:text-base md:text-lg lg:text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 sm:pl-12 md:pl-14 pr-10 sm:pr-12 md:pr-14 h-12 sm:h-14 md:h-16 lg:h-18 xl:h-16 text-sm sm:text-base md:text-lg lg:text-xl border border-gray-200 rounded-lg focus:border-gray-300 focus:ring-1 focus:ring-gray-300 focus:outline-none px-3 py-2"
                  placeholder="**************"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  ) : (
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot pwd (login only) */}
            {!isSignup && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm sm:text-base md:text-lg lg:text-sm text-gray-600 hover:text-gray-800 underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {/* Submit */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full h-12 sm:h-14 md:h-16 lg:h-18 xl:h-15 bg-slate-800 hover:bg-slate-900 text-white text-sm sm:text-base md:text-lg lg:text-lg font-semibold rounded-lg transition-colors"
            >
              {buttonText}
            </button>

            {/* Terms + privacy */}
            <div className="text-center pt-4 sm:pt-6 md:pt-0">
              <p className="text-xs sm:text-sm md:text-base lg:text-md text-gray-500">
                By proceeding, you agree to our{" "}
                <button className="text-gray-700 hover:text-gray-900 underline">
                  Terms
                </button>
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> and acknowledge our </span>
                <span className="sm:hidden">and acknowledge our </span>
                <button className="text-gray-700 hover:text-gray-900 underline">
                  Privacy Policy
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
