export interface Task {
    TareaId: number;
    Titulo: string;
    Descripcion: string;
    FechaCreacion: string;
    FechaVencimiento: string;
    Completada: boolean;
    UsuarioId: number;
    ProyectoId: number;
}