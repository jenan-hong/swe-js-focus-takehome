import express, { Express } from "express";
import path from "path";
import { logger } from "./middlewares/logger";
import { registerRoutes } from "./routes"; // Updated import
import { authenticate } from "./middlewares/authenticate";
import { errorHandler } from "./middlewares/errorHandler";

class Server {
  public server: Express;

  constructor() {
    this.server = express();
    this.initializeMiddleware();
    this.configureRoutes();
    this.serveStaticFiles();
  }

  private initializeMiddleware() {
    this.server.use(logger);
    this.server.use(authenticate);
    this.server.use(errorHandler);
  }

  private configureRoutes() {
    registerRoutes(this.server);
  }

  private serveStaticFiles() {
    this.server.use(
      "/public",
      express.static(path.join(__dirname, "../public"), {
        maxAge: 365 * 24 * 60 * 60 * 1000,
      })
    );
  }
}

const { server } = new Server();

export { server };
