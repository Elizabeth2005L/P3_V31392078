import { db } from "../lib/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const authService = {
  async login(email, password) {
    try {
      if (!email || !password) {
        throw new Error("Email y contraseña son requeridos");
      }

      const user = await db.user.findUnique({
        where: { email },
        select: { id: true, password: true },
      });

      if (!user) {
        throw new Error("Credenciales inválidas");
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error("Credenciales inválidas");
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "secret", {
        expiresIn: "1h",
      });

      return token;
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  },

  async register(email, password) {
    try {
      if (!email || !password) {
        throw new Error("Email y contraseña son requeridos");
      }

      const existingUser = await db.user.findUnique({
        where: { email },
        select: { id: true },
      });

      if (existingUser) {
        throw new Error("Email ya registrado");
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const userData = await db.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });

      const token = jwt.sign({ id: userData.id }, process.env.JWT_SECRET || "secret", {
        expiresIn: "1h",
      });

      return token;
    } catch (error) {
      console.error("Error en registro:", error);
      throw error;
    }
  },
};

export { authService };
