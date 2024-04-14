import { Project } from "./project.interfce";
import { Task } from "./task.interface";

export interface User {
    UsuarioId: number;
    Nombre: string;
    Email: string;
    Contrasena: string;
    Proyectos: Project[];
    Tareas: Task[];
}