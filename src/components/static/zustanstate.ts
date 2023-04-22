import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { UsuariO,BearState } from "../../interface/stado";



export const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        _id: "",
        email: "",
        password: "",
        cuentas: [],
        palabras: [],
        createdAt: "",
        updatedAt: "",
        increase: ({
          _id,
          email,
          password,
          cuentas,
          palabras,
          createdAt,
          updatedAt,
        }: UsuariO) =>
          set(() => ({
            _id,
            email,
            password,
            cuentas,
            palabras,
            createdAt,
            updatedAt,
          })),
          removeAllBears: ({
            _id,
            email,
            password,
            cuentas,
            palabras,
            createdAt,
            updatedAt,
          }: UsuariO) =>
            set(() => ({
              _id,
              email,
              password,
              cuentas,
              palabras,
              createdAt,
              updatedAt,
            })),

      }),
      
      {
        name: "bear-storage",
      }
    )
  )
);
