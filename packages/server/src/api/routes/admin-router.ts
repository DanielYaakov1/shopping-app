import { Router } from 'express';
import { getAllAdmins, checkIsAdmin } from '../controllers/admins-controller';

export const adminRouter = Router();

adminRouter.get('/', getAllAdmins);
adminRouter.get('/:id', checkIsAdmin);
