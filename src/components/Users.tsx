import axios from "axios";
import {  useState } from "react";
import { port } from "../App";
import Img from "../img/bot.jpeg";
import { useBearStore } from "./static/zustanstate";

interface User {
  email: string;
  password: string;
}
export default function Users() {
  const [Usuario, setUsuario] = useState<User>({
    email: "",
    password: "",
  });
  const {increase,_id} = useBearStore((state) => state);

  const datosUser = (name: string, value: string) => {
    setUsuario({ ...Usuario, [name]: value });
  };
  
  const FromData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
      const res = await axios.put(`${port}/users/${_id}`, Usuario);
      if (res.status === 200) {
        increase(res.data);
        console.log(res.data)
        setUsuario({email:'',password:''})
      } else {
        console.log('hay un problema con la peticion put');
      }
    
  };
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src={Img} alt="Your Company" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            crea un nuevo usuario
          </h2>
          
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
                value={Usuario.email}
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
                value={Usuario.password}
                className="relative block w-full rounded-b-md border-0 p-3 m-1 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Password"
                onChange={(e) => datosUser(e.target.name, e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              crear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
