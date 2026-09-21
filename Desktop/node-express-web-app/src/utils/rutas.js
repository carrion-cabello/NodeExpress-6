import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const archivoActual = fileURLToPath(import.meta.url);
const directorioActual = dirname(archivoActual);

export const RUTA_USUARIOS = join(
  directorioActual,
  "..",
  "data",
  "usuarios.json"
);