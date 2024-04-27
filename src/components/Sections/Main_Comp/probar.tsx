import useTaskStore from '@/app/storages/taskStorage';

function MyComponent() {
  const { tasks, addTask } = useTaskStore();

  const handleAddTask = () => {
    // Crear una nueva tarea
    const newTask = {
      id: '1', // Aquí deberías generar un ID único, por ejemplo con uuid
      nombre: 'Nueva tarea',
      descripcion: 'Descripción de la nueva tarea',
      color: '#ffffff',
      ciclo: false,
      frecuencia: 'diaria',
      dias: [],
      categoria: 'trabajo',
      estado: "pendiente" as const,
    };

    // Agregar la nueva tarea al almacenamiento
    addTask(newTask);
  };

  return (
    <div>
      <button onClick={handleAddTask}>Agregar tarea</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;
