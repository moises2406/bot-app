import axios from "axios";
import React, { useEffect, useState } from "react";
import { port } from "../App";
import { useBearStore } from "./static/zustanstate";


let myarre: object[] =[];

export default function CountAcount() {
  const [user, setUser] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const { cuentas, _id,increase } = useBearStore((state) => state);

  useEffect(() => {
    if (cuentas.length > 0) {
      const use = cuentas.map((i: any) => i);
      setUser(use);
    }
  }, [cuentas]);
  const Apdate = async(numero:number) => {
    for (let index = 0; index < cuentas.length; index++) {
      const element = cuentas[index];
      if (index !== numero) {
        myarre.push(element);
      }
      if (index === cuentas.length-1) {
        const res = await axios.put(`${port}/apdateUsers/${_id}`,myarre);
        increase(res.data);
        myarre = [];
        console.log(user);
      }
    }
    //
  };
  return (
    <div className="m-2 p-3">
      <div className="grid grid-cols-3 gap-4">
        {user.map((i,n) => {
          return (
            <div key={i.email} className="...">
              <div
                
                className="w-72 p-3 bg-sky-200 shadow rounded-lg mx-auto mr-5 "
              >
                <h3 className="text-xs border-b font-mono">{i.email}</h3>
                <p className="font-serif">{i.password}</p>
                <button
              type="submit"
              className="basis-1/4 ml-2 group w-20 relative flex w-full justify-center rounded-md bg-red-600 py-2 px-3 text-sm font-semibold text-white hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              onClick={() => Apdate(n)}
           >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Deletes
            </button>
              </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
}
