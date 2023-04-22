import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Messages from "./components/messages";
import Nav from "./components/Nav";
import MsgId from "./components/MsgId";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import { useBearStore } from "./components/static/zustanstate";
import { UsuariO } from "./interface/stado";
import Users from "./components/Users";
import CountAcount from "./components/CountAcount";
import Dl from "./components/delete";

export const port = process.env.PORT ? process.env.PORT : 'http://localhost:5000';

function App() {
  const [state, setstate] = useState<UsuariO>({
    _id: "",
        email: "",
        password: "",
        cuentas: [],
        palabras: [],
        createdAt: "",
        updatedAt: "",
  })
  const bears:UsuariO = useBearStore((state) => state);
//TODO: stado
  useEffect(() => {
    setstate(bears)
  },[bears])

  //TODO: socket
  useEffect(() => {
    function onConnect() {
      console.log(true,"el socket esta connectado con el id :", socket.id);
    }

    function onDisconnect() {
      console.log(false,"Sea desconnectado el socket con el id :", socket.id);
    }

    function onFooEvent(value: any) {
      console.log((previous: any) => [...previous, value]);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
    };
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Nav />
        <Dl />

        {state._id ? (
          <Routes>
          <Route path="/" element={<Messages />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/UsersAcount" element={<CountAcount />} />
          <Route path="/msg/:id" element={<MsgId />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
        ) : (
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
