import { Request, Response, NextFunction } from "express";
import {
  CustomError,
  GenericErrors,
} from "@repo/generic-shared/utilities/errors";

export function errorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Handle multiple CustomErrors
  if (Array.isArray(error) && error.every((e) => e instanceof CustomError)) {
    console.log(
      "Multiple errors:",
      error.map((e) => e.message)
    );

    return res.status(400).json({
      status: 400,
      code: "MULTIPLE_ERRORS",
      message: "Multiple errors occurred.",
      errors: error.map((e) => ({
        status: e.status,
        code: e.code,
        message: e.message,
      })),
    });
  }

  // Handle a single CustomError
  if (error instanceof CustomError) {
    console.log(error.message);

    return res.status(error.status).json({
      status: error.status,
      code: error.code,
      message: error.message,
    });
  }

  // Fallback for unexpected/unhandled errors
  console.error("Unhandled Error:", error);

  const fallbackError = GenericErrors.internalServerError();
  return res.status(fallbackError.status).json({
    status: fallbackError.status,
    code: fallbackError.code,
    message: fallbackError.message,
  });
}
