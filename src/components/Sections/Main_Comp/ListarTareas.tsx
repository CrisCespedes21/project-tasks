import {
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import useTaskStore from "@/app/storages/taskStorage";
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";
import { TextSearch } from "lucide-react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export const ListarTareas = () => {
  const {tasks, deleteTask} = useTaskStore();
  const handleDelete = (id: string) => {
    deleteTask(id);
  };
  return (
    <>
      <div className="flex justify-center w-full">
        <div className="flex w-full items-center flex-col  max-w-screen-lg">
          <div className="flex justify-between w-full items-center mb-3">
            <h1 className="text-xl sm:text-2xl font-bold mr-2">
              Tus Tareas de Hoy
            </h1>
            <div className="flex">
              <Button variant="default">
                <Link className="flex gap-3" to="/nueva-tarea">
                  <Plus className="w-[18px] h-[18px]" />
                  Nueva Tarea
                </Link>
              </Button>
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-4 items-center w-full">
            {tasks
              .sort((a, b) => (a.id > b.id ? -1 : 1))
              .map((tarea) => (
                <div
                  key={tarea.id}
                  className={`p-2 px-4 grid-cols-2 grid gap-4  bg-${tarea.color}-300 shadow border rounded-xl w-full`}
                >
                  <div className="flex justify-start items-center gap-3 ">
                    <Checkbox />
                    <div className="space-y-1 leading-none">
                      <div className="font-semibold text-base text-slate-900">
                        {tarea.nombre}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center gap-3 ">
                    <Button variant="ghost" size="icon">
                      <TextSearch className="w-[18px]  h-[18px]" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Link to={`/editar-tarea/${tarea.id}`}>
                        <Pencil className="w-[18px]  h-[18px}" />
                      </Link>
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-[18px]  h-[18px]" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Eliminar Tarea</AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta acción no se puede deshacer. ¿Estás seguro de
                            eliminar la tarea?
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <Button onClick={() => handleDelete(tarea.id)}>
                            Continuar
                          </Button>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
