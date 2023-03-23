import { useEffect, useState } from "react";
import axios from "axios";
import { DatosMesage } from "../interface/reques.interface";
import { useNavigate } from "react-router-dom";

export default function Messages() {
  const navigate = useNavigate();
  useEffect(() => {
    GetMesage();
  }, []);
  const [Mensages, setMensages] = useState<DatosMesage[]>([
    {
      _id: "",
      clase: "",
      cliente: "",
      conversacion: [],
      createdAt: "",
      dueño: "",
      identificador: "",
      precio: "",
      updatedAt: "",
    },
  ]);
  
  const GetMesage = async () => {
    const res = await (
      await axios.get(`http://localhost:5000/uris/moises`)
    ).data;
    setMensages(res);
  };
  const t: string =
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
  if (Mensages) {
    return (
      <div>
        <h1>klk</h1>
        <ul
          aria-roledescription="list"
          className="p-6 divide-y divide-slate-200"
        >
          {Mensages.map((i) => (
            
            <li key={i._id} className="flex py-4 first:pt-0 last:pb-0" onClick= {() =>navigate(`http://localhost:3000/msg/8645685`)} >
              <img className="h-10 w-10 rounded-full" src={t} alt="moises" />
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-slate-900">
                  {i.cliente}
                </p>
                <p className="text-sm text-slate-500 truncate">{i.precio}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h1> no tienes mensages</h1>
      </div>
    );
  }
}


