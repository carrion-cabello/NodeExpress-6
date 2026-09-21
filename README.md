### Entorno de desarrollo

- Node.js: v24.21.0
- npm: 11.19.0
- Sistema operativo: Windows 10 PRO

Contenido inicial:

```markdown
## Node & Express Web App

Aplicación web desarrollada con Node.js y Express como proyecto incremental.

### Requisitos

- Node.js 18 o superior
- npm

### Instalación

```bash
npm install
```

### Ejecución

#### Modo normal

```bash
npm start
```

#### Modo desarrollo

```bash
npm run dev
```

### Variables de entorno

Crear un archivo `.env` a partir de `.env.example`:

```env
PORT=3000
```

### Archivo principal

Se utiliza `src/app.js` como punto de entrada porque contiene la configuración
inicial y el arranque de la aplicación Express.
```

La documentación continuará creciendo en las siguientes clases.

---

### Rutas

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/` | Página principal |
| GET | `/status` | Estado del servidor |
| GET | `/api/usuarios` | Lista de usuarios |
| GET | `/api/usuarios/:id` | Usuario por identificador |

#### Filtros

```text
GET /api/usuarios?activo=true
GET /api/usuarios?activo=false
GET /api/usuarios?nombre=ana