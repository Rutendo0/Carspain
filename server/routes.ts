import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });

  // Test endpoint for cars data
  app.get("/api/cars", (req, res) => {
    const cars = [
      {
        id: 1,
        name: "BMW X5",
        category: "SUV",
        price: 120,
        image: "/api/placeholder/400/300",
        features: ["GPS", "Bluetooth", "AC"]
      },
      {
        id: 2,
        name: "Mercedes C-Class",
        category: "Sedan",
        price: 100,
        image: "/api/placeholder/400/300",
        features: ["GPS", "Bluetooth", "AC", "Leather Seats"]
      },
      {
        id: 3,
        name: "Audi A4",
        category: "Sedan",
        price: 95,
        image: "/api/placeholder/400/300",
        features: ["GPS", "Bluetooth", "AC"]
      }
    ];
    res.json(cars);
  });

  // Add your API routes here
  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
