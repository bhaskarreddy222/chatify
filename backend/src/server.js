/*import express from "express";
import dotenv from "dotenv";
import path from "path";


import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
dotenv.config();
const app = express();
const __dirname =Path.resolve();

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get("*", (req,res) =>{
        res.sendFile(path.join(__dirname, "../frontend",));
    });
}


app.listen(PORT, () => console.log("server running on port: " + PORT));*/
/*import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";   // ✅ import this

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html")); 
    });
};
app.listen(PORT, () => console.log("Backend server is running!")
);*/

import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// ✅ Root route for development
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get("*", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}

app.listen(PORT, () => console.log(`Backend server is running on http://localhost:${PORT}`));

