declare global {
  namespace Express {
    export interface Request {
      user?: TUser;
      cookies?: any;
    }
  }
}
