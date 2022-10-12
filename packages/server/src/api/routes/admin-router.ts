import { Router } from 'express';
import { getAllAdmins, getAdminByEmail } from '../controllers/admins-controller';

export const adminRouter = Router();

adminRouter.get('/', getAllAdmins);
adminRouter.get('/a', getAdminByEmail);
