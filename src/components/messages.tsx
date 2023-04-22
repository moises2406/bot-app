import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { DatosMesage } from "../interface/reques.interface";
import { Link } from "react-router-dom";
import { port } from "../App";
import { useBearStore } from "./static/zustanstate";
import { socket } from "../socket";

export default function Messages() {
  socket.on('miMsg',(arg) =>{
    console.log(arg,'titititi2');
  })
  
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
      img:"",
    },
  ]);
  const {_id} = useBearStore((state) => state);

  const GetMesage = useCallback( async () => {
    const res =
      await axios.get(`${port}/uris/${_id}`)
    ;
    setMensages(res.data);
  },[_id])

  useEffect(() => {
    GetMesage();
  }, [GetMesage]);

  
  //const ingmsg ='https://static.xx.fbcdn.net/rsrc.php/yQ/r/mPS7QGFKKuf.ico?_nc_eui2=AeHkpHG2IinvyH3qVSzw0qXpj32ZkYkSqnePfZmRiRKqd52AwrgxgaapvLp71NiojaTBeeDVXmc-wMGeIkDo6CTn'
  
    if (Mensages.length > 0) {
    return (
      <div>
        <ul
          aria-roledescription="list"
          className="p-6 divide-y divide-slate-200"
        >
          {Mensages.map((i) => (
            
            <Link key={i._id} className="w-72 bg-slate-100 flex py-4 first:pt-0 last:pb-0 " to= {`/msg/${i._id}`} >
              <img className="h-10 w-10 rounded-full" src={i.img} alt="moises" />
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-slate-900">
                  {i.cliente}
                </p>
                <p className="text-sm text-slate-500 truncate">{i.precio}</p>
              </div>
            </Link>
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


