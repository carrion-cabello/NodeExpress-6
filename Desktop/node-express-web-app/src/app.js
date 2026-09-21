import "dotenv/config";
import express from "express";
import { obtenerMensajeInicio } from "./utils/mensajes.js";
import { obtenerUsuarios, obtenerUsuarioPorId, obtenerUsuariosActivos } from "./services/usuarios.service.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Node & Express Web App</h1><p>Servidor funcionando.</p>");
});

app.get("/acerca", (req, res) => {
  res.send(`
    <h1>Acerca del proyecto</h1>
    <p>Nombre: Node & Express Web App</p>
    <p>Versión: 1.0.0</p>
    <p>Autor: Melina</p>
  `);
});

app.get("/status", (req, res) => {
  res.json({
    status: "ok",
    message: "Servidor funcionando",
    data: {
      node: process.version,
      pid: process.pid,
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || "development"
    }
  });
});

app.get("/api/usuarios", async (req, res) => {
  try {
    const usuarios = await obtenerUsuarios();

    res.json({
      status: "ok",
      message: "Usuarios encontrados",
      data: usuarios
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "No fue posible obtener los usuarios",
      data: null
    });
  }
});

app.get("/api/usuarios/:id", async (req, res) => {
  try {
    const usuario = await obtenerUsuarioPorId(req.params.id);

    if (!usuario) {
      res.status(404).json({
        status: "error",
        message: "Usuario no encontrado",
        data: null
      });
      return;
    }

    res.json({
      status: "ok",
      message: "Usuario encontrado",
      data: usuario
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
      data: null
    });
  }
});

app.get("/api/usuarios-activos", async (req, res) => {
  try {
    const usuariosActivos = await obtenerUsuariosActivos();

    res.json({
      status: "ok",
      message: "Usuarios activos encontrados",
      data: usuariosActivos
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      status: "error",
      message: "No fue posible obtener usuarios activos",
      data: null
    });
  }
});

app.listen(PORT, () => {
  console.log(obtenerMensajeInicio(PORT));
});

