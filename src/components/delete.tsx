import axios from "axios";
import { port } from "../App";

// TODO: borrar mensages
export default function Delete() {
  const DeleteMsg = async () => {
    await axios.delete(`${port}/user/`)
    await axios.delete(`${port}/usermodel/`)
    //TODO: artis: https://behemoth.orange.com.do/adept-services/altice/rest/guest/contract-info/40224498671 termina con el numero de cedula GET
    //const res = await axios.get(`https://behemoth.orange.com.do/adept-services/altice/rest/guest/contract-info/40224498671`);
    //console.log(res.data); funciona
   
  };
  return (
    <div>
      <button
        onClick={() => DeleteMsg()}
        className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
        dlete1
      </button>
    </div>
  );
}
