import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { port } from "../App";
import { DatosMesage } from "../interface/reques.interface";
import { socket } from "../socket";



export default function MsgId() {
  const paramas = useParams();

  const callback = useCallback(async () => {
    const res = await (
      await axios.get(`${port}/id/${paramas.id}`)
    ).data;
    setMensages(res);
  },[paramas.id])
  useEffect(() => {
    callback()
  },[callback]);
  const [Mensages, setMensages] = useState<DatosMesage>({
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
  });
  const [SendMensages, setSendMensages] = useState('')


  // TODO: envia mensages
  const Enviar = () => {
    if (SendMensages.length > 0) {
      socket.emit("msg-client", {
        user: Mensages.dueño,
        url: Mensages.identificador,
        msg: SendMensages,
      });
      console.log('enviado');
      setSendMensages('')
      
    } else {
    console.log('no enviado');
    }
    
  };
  socket.on('miMsg',(arg) =>{
    console.log(arg,'titititi2');
    
  })
 
  return (
    <div className="relative">
  
    <div>
    
        {/* TODO: mensages */}
  
              
    <div>
          <div className="flex p-6 font-mono">
            <div className="flex-none w-28 h-28 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
              <img
                src={Mensages.img}
                alt=""
                className="absolute z-10 inset-0 w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            <form className="flex-auto pl-6">
              <div className="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
                <h1 className="relative w-full flex-none mb-1 text-2xl font-semibold text-white">
                  {Mensages.clase}
                </h1>
                <p className="relative text-lg text-white">
                  {Mensages.precio}
                </p>
                <p className="relative uppercase text-teal-400 ml-3">
                  {Mensages.cliente}
                </p>
              </div>
            </form>
          </div>
          <br />
        </div>
  
          {Mensages.conversacion.map((i, index) => {
            if (i.cliente === "Tu") {
              return (
                <div key={index}>
                  <div className="w-72 p-3 bg-sky-200 shadow rounded-lg mx-auto mr-5 ">
                    <h3 className="text-xs border-b font-mono">font-serif</h3>
                    <p className="font-serif">{i.conversacion}</p>
                  </div>
  
                  <br />
                </div>
              );
            } else {
              return (
                <div key={index}>
                  <div className="w-72 p-3 bg-white shadow rounded-lg shadow-md ml-5">
                    <p className="font-serif">{i.conversacion}</p>
                  </div>
                  <br />
                </div>
              );
            }
          })}
        </div>
       
        <div className="fixed bottom-0 left-0 right-0  p-2 flex flex-row bg-white">
          
         <label className="block flex-initial basis-3/4">
          <span className="sr-only">send</span>
          
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="send"
            type="text"
            value={SendMensages}
            onChange={(i) =>setSendMensages(i.target.value)}
          />
           
         </label>
         <button
              type="submit"
              className="basis-1/4 ml-2 group w-20 relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
           onClick={()=> Enviar()}
           >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              Send
            </button>
        </div>
      
  </div>

  );
}
