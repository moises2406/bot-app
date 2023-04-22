export interface UsuariO {
    _id: string;
    email: string;
    password: string;
    cuentas: object[];
    palabras: object[];
    createdAt: string;
    updatedAt: string;
  }

  export interface BearState {
    _id: string;
    email: string;
    password: string;
    cuentas: object[] | Users[];
    palabras: object[];
    createdAt: string;
    updatedAt: string;
    increase: (Usuario: UsuariO) => void;
    removeAllBears: (Usuario: UsuariO) => void;
  }

  export interface Users {
    email: string;
    password: string;
  }