import { Router } from "express";
import ensureData from "../middlewares/ensureData.middleware";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userUpdate,
} from "../schemas/user.schema";
import {
  createuserController,
  deleteUserController,
  listOwnAccController,
  listUserController,
  updateUserController,
} from "../controllers/user.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsOwner from "../middlewares/ensureIsOwner.middleware";

const userRoutes = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     CreateUserRequest:
 *       type: object
 *       required:
 *          - name
 *          - email
 *          - password
 *          - telephone
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         telephone:
 *            type: string
 *       example:
 *         name: John Doe
 *         email: johndoe@example.com
 *         password: mypassword
 *         telephone: 4002-8922
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operações relacionadas a usuários
 */
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criação de usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserRequest'
 *     responses:
 *       201:
 *         description: Usuario criado
 *       400:
 *         description: Erros relacionados a validação de campo ou requisição mal sucedida
 */
userRoutes.post("", ensureData(userSchemaRequest), createuserController);

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operações relacionadas a usuários
 */
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retorna a lista de usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 *       500:
 *         description: Erro ao retornar a lista de usuários
 */
userRoutes.get("", listUserController);

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operações relacionadas a usuários
 */
/**
 * @swagger
 * /users/acc:
 *   get:
 *     summary: Retorna o usuario logado, o usuario é obtido através do token passado para a requisição
 *     security:
 *         - BearerAuth: []
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Retorna o proprio usuario
 *       401:
 *         description: "Invalid token"
 */
userRoutes.get("/acc", ensureAuthMiddleware, listOwnAccController);

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateUserRequest:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         telephone:
 *            type: string
 *       example:
 *         name: John Jones
 *         email: johnjones@example.com
 *         telephone: 800-8922
 */
/**
/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Atualiza os dados do usuario
 *     security:
 *         - BearerAuth: []
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateUserRequest'
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Retorna o usuario atualizado
 *       401:
 *         description: "Invalid token"
 */
userRoutes.patch("/:id", ensureData(userUpdate), updateUserController);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deleta um usuario
 *     security:
 *         - BearerAuth: []
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *     responses:
 *       204:
 *         description: No content
 *       401:
 *         description: "Invalid token"
 */
userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwner,
  deleteUserController
);

export default userRoutes;
