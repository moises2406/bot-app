export interface DatosMesage {
  _id: string;
  clase: string;
  cliente: string;
  conversacion: Datas[];
  createdAt: string;
  dueño: string;
  identificador: string;
  precio: string;
  updatedAt: string;
  img:string;
}
interface Datas {
  cliente:string; 
  conversacion:string; 
  posicion: number;
}