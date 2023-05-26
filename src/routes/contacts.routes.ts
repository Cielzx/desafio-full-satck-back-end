import { Router } from "express";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureData from "../middlewares/ensureData.middleware";
import { contactSchemaResponse } from "../schemas/contacts.schema";
import {
  createContactsController,
  deleteContactController,
  listContactController,
  updateContactController,
} from "../controllers/contact.controller";

const contacRoutes = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     ContactRequest:
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
 *         telephone:
 *            type: string
 *       example:
 *         name: John Doe
 *         email: johndoe@example.com
 *         telephone: 4002-8922
 */
/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Operações relacionadas aos contatos
 */
/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Criação de contato
 *     tags: [Contacts]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactRequest'
 *     responses:
 *       201:
 *         description: Contato criado
 *       400:
 *         description: Erros relacionados a validação de campo ou requisição mal sucedida
 */
contacRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureData(contactSchemaResponse),
  createContactsController
);

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Operações relacionadas aos contatos
 */
/**
/**
 * @swagger
 * /contacts/{id}:
 *   patch:
 *     summary: Criação de contato
 *     tags: [Contacts]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContactRequest'
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           schema:
 *             type: string
 *     responses:
 *       201:
 *         description: Atualização do contato
 *       400:
 *         description: Erros relacionados a validação de campo ou requisição mal sucedida
 */
contacRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureData(contactSchemaResponse),
  updateContactController
);

/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Operações relacionadas a contatos
 */
/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Retorna a lista de contatos
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Lista de contatos retornada com sucesso
 *       500:
 *         description: Erro ao retornar a lista de contatos
 */
contacRoutes.get("", listContactController);

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Deleta um contato
 *     security:
 *         - BearerAuth: []
 *     tags: [Contacts]
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
contacRoutes.delete("/:id", deleteContactController);

export default contacRoutes;
