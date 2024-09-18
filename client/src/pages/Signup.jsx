import React from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Signup</h1>
      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="p-3 rounded-lg bg-slate-100"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="p-3 rounded-lg bg-slate-100"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="p-3 rounded-lg bg-slate-100"
        />
        <button
          className="p-3 font-semibold text-white uppercase rounded-lg bg-slate-700 hover:opacity-95 disabled:opacity-75"
        >
          Signup
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Signin</span>
        </Link>
      </div>
    </div>
  );
}
