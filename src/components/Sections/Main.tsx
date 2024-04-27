"use client"
import { Header } from "./Main_Comp/Header";
import { Routes, Route } from "react-router-dom";
import { ListarTareas } from "./Main_Comp/ListarTareas";
import { NuevaTarea } from "./Main_Comp/NuevaTarea";
import { EditarTarea } from "./Main_Comp/EditarTarea";
import MyComponent from "./Main_Comp/probar";

export function Main() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="p-3">
        <Routes>
          <Route path="/" element={<ListarTareas />} />
          <Route
            path="nueva-tarea"
            element={<NuevaTarea/>}
          />
          <Route
            path="editar-tarea/:id"
            element={
              <EditarTarea/>
            }
          />
          <Route path="prueba" element={
           <MyComponent/>
          } />
        </Routes>
      </div>
    </>
  );
}
