import React, { useState } from "react";

export default function Auth() {
  const [formType, setFormType] = useState("login");

  //login credentials
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
    role: "",
  });

  const onChangeLogin = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    //add your login route from backend
    // all states managment with respect to it is done by me
    // if need toaster or alert after connecting it let me know
    e.preventDefault();
    console.log(loginCredentials);
  };

  //signup credentials
  const [signupCredentials, setSignupCredentials] = useState({
    sname: "",
    semail: "",
    spassword: "",
    scpassword: "",
    sgender: "",
    srole: "",
    sdob: "",
  });
  const onChangeSignup = (e) => {
    setSignupCredentials({
      ...signupCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    // add signup  route from backend
    // all states managment with respect to it is done by me
    // if need toaster or alert after connecting it let me know
    e.preventDefault();
    console.log(signupCredentials);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      {formType === "login" ? (
        <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              name="email"
              value={loginCredentials.email}
              onChange={onChangeLogin}
              type="email"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>

          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              name="password"
              value={loginCredentials.password}
              type="password"
              onChange={onChangeLogin}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">
              Role
            </span>
            <select
              name="role"
              value={loginCredentials.role}
              onChange={onChangeLogin}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="" disabled>
                Select your Role
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide your role.
            </p>
          </label>

          <button
            type="submit"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Sign In
          </button>

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => setFormType("signup")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign Up
            </span>
          </p>
        </form>
      ) : (
        <form className="  max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">
              Name
            </span>
            <input
              name="sname"
              value={signupCredentials.sname}
              onChange={onChangeSignup}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide your name
            </p>
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">
              Gender
            </span>
            <select
              name="sgender"
              value={signupCredentials.sgender}
              onChange={onChangeSignup}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="female">Other</option>
            </select>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide the gender.
            </p>
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">
              Date of Birth
            </span>
            <input
              name="sdob"
              value={signupCredentials.sdob}
              onChange={onChangeSignup}
              type="date"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />

            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide your date of birth
            </p>
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">
              Role
            </span>
            <select
              name="srole"
              value={signupCredentials.srole}
              onChange={onChangeSignup}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              <option value="" disabled>
                Select your Role
              </option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide your role.
            </p>
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              name="semail"
              value={signupCredentials.semail}
              onChange={onChangeSignup}
              type="email"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>

          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
              name="spassword"
              value={signupCredentials.spassword}
              onChange={onChangeSignup}
              type="password"
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </label>
          <label className="block mb-4">
            <span className="block text-sm font-medium text-slate-700">
              Confirm Password
            </span>
            <input
              type="password"
              name="scpassword"
              value={signupCredentials.scpassword}
              onChange={onChangeSignup}
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
          </label>

          <button
            type="submit"
            onClick={handleSignUp}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Sign Up
          </button>

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => setFormType("login")}
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </p>
        </form>
      )}
    </div>
  );
}
