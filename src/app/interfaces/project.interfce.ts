import { Task } from "./task.interface";

export interface Project {
    ProyectoId: number;
    Nombre: string;
    Descripcion: string;
    UsuarioId: number;
    Tareas: Task[];
}