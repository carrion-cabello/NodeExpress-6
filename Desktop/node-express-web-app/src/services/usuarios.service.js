import { leerJson } from "../utils/archivos.js";
import { RUTA_USUARIOS } from "../utils/rutas.js";

export async function obtenerUsuarios() {
  console.time("lectura-usuarios");
  const usuarios = await leerJson(RUTA_USUARIOS);

  console.timeEnd("lectura-usuarios");

  if (!Array.isArray(usuarios)) {
    throw new Error("El archivo de usuarios debe contener un arreglo.");
  }

  return usuarios;
}

export async function obtenerUsuarioPorId(id) {
  const usuarios = await obtenerUsuarios();
  const idNumerico = Number(id);

  if (!Number.isInteger(idNumerico) || idNumerico <= 0) {
    throw new Error("El identificador debe ser un número entero positivo.");
  }

  return usuarios.find((usuario) => usuario.id === idNumerico) ?? null;
}
export async function obtenerUsuariosActivos() {
  const usuarios = await obtenerUsuarios();
  return usuarios.filter((usuario) => usuario.activo);
}