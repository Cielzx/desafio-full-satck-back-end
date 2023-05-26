import { Router } from "express";
import TokenController from "../controllers/login.controller";

const loginRoutes = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     LoginUserRequest:
 *       type: object
 *       required:
 *          - email
 *          - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         email: johndoe@example.com
 *         password: mypassword
 */
/**
 * @swagger
 * tags:
 *   name: Login
 *   description: Operação relacionada ao login usuários
 */
/**
 * @swagger
 * /login:
 *   post:
 *     summary: Criação de usuario
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUserRequest'
 *     responses:
 *       200:
 *         description: Retorna o token do usuario
 *       403:
 *         description: Invalid Credientials
 */
loginRoutes.post("", TokenController);

export default loginRoutes;
