import app from "./app";
import { PORT } from "./config";

// db
import "./config/mongoose";

// Inicio del server
app.listen(PORT);
console.log("Server on port", app.get("port"));
