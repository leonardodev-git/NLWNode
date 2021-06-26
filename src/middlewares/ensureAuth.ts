import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(
      token,
      "2e0a5be8af9c8f2d9b4b66fff0373b98"
    ) as Payload;

    request.user_id = sub;
    return next();
  } catch (error) {
    return response.status(401).end();
  }
}
