import axios from "axios";
import {  useState } from "react";
import { port } from "../App";
import Img from "../img/bot.jpeg";
import { useBearStore } from "./static/zustanstate";

interface User {
  email: string;
  password: string;
}

interface Check {
  checkbox: boolean;
}
export default function Login() {
  const [Usuario, setUsuario] = useState<User>({
    email: "",
    password: "",
  });
  const [checkbox, setcheckbox] = useState<Check>({
    checkbox: false,
  });

  const datosUser = (name: string, value: string) => {
    setUsuario({ ...Usuario, [name]: value });
  };
  const Checkbox = () => {
    if (checkbox.checkbox === true) {
      setcheckbox({ checkbox: false });
    } else {
      setcheckbox({ checkbox: true });
    }
  };

  const FromData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (checkbox.checkbox) {
      const strin = JSON.stringify(Usuario);
      localStorage.setItem("user", strin);
      const res = await axios.post(`${port}/users/`, Usuario);
      if (typeof res.data === typeof {}) {
        increase(res.data);
      } else {
        alert(res.data);
      }
    } else {
      const res = await axios.post(`${port}/users/`, Usuario);
      if (typeof res.data === typeof {}) {
        increase(res.data);
      } else {
        alert(res.data);
      }
    }
    
  };
  const increase = useBearStore((state) => state.increase);
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src={Img} alt="Your Company" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <p className="font-medium text-indigo-600 hover:text-indigo-500">
              call moises and start your 14-day free trial
            </p>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => FromData(e)}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full rounded-t-md border-0 p-3 m-1 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Email address"
                onChange={(e) => datosUser(e.target.name, e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full rounded-b-md border-0 p-3 m-1 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                onChange={(e) => datosUser(e.target.name, e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                name="checkbox"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={() => Checkbox}
              />
              <label
                htmlFor="checkbox"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <p className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
