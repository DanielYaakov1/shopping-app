import { Request, Response, NextFunction } from 'express';

import { AdminHandler } from '../handlers/admin-handler';

export const checkIsAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const adminHandler = new AdminHandler();
    const { email } = req.query;
    const isAdmin = await adminHandler.getAdminByEmail(String(email));
    res.status(200).send({ isAdmin: !!isAdmin });
  } catch (err) {
    next(err);
  }
};

export const getAllAdmins = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const adminHandler = new AdminHandler();
    const admins = await adminHandler.getAllAdmins();
    res.status(200).send({ admins });
  } catch (err) {
    next(err);
  }
};

export const checkIsAdmin1 = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const adminHandler = new AdminHandler();
    const { email } = req.query;
    const isAdmin = (await adminHandler.getAdminByEmail(String(email))) ? true : false;
    res.status(200).send({ isAdmin });
  } catch (err) {
    next(err);
  }
};
