// src/server.js
import { createServer, Model, Response } from "miragejs";
import { popular, recommended, users } from "./data";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {},

    routes() {
      this.namespace = "api";

      this.get("/recommededCourses", (schema) => {
        return recommended;
      });
      this.get("/popularCourses", (schema) => {
        return popular;
      });

      this.post("/login", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        let result = users.find((x) => x.email == attrs.email);

        if (result && result.password == attrs.password) {
          return new Response(200, {}, { message: "Success" });
        }
        if (result && result.password != attrs.password) {
          return new Response(400, {}, { message: "Invalid Password..." });
        } else {
          return new Response(400, {}, { message: "Invalid Cred..." });
        }
      });
    },
  });

  return server;
}
