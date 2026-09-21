import { readFile } from "node:fs/promises";

export async function leerJson(rutaArchivo) {
  try {
    const contenido = await readFile(rutaArchivo, "utf8");
    return JSON.parse(contenido);
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error("El archivo solicitado no existe.");
    }

    if (error instanceof SyntaxError) {
      throw new Error("El archivo JSON contiene un formato inválido.");
    }

    throw new Error(`No fue posible leer el archivo: ${error.message}`);
  }
}