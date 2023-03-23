import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';
import { DatosMesage } from '../interface/reques.interface';

export default function MsgId() {
    const paramas = useParams();
    console.log(paramas);

    console.log('hola moises');
        
        return (
          <div>
            <ul
              aria-roledescription="list"
              className="p-6 divide-y divide-slate-200"
            >
              <h1>Hola moise ya estoy aqui</h1>
            </ul>
          </div>
        );
     
}
