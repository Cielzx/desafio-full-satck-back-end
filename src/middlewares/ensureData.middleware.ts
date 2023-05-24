import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const ensureData =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validate = schema.parse(req.body);

    req.body = validate;

    return next();
  };

export default ensureData;
