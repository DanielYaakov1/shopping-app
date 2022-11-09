import { Admins } from '../../models/admins-modal';
import { IAdmin } from '../interfaces/interfaces';

export class AdminHandler {
  async getAdminByEmail(email: string): Promise<IAdmin | null> {
    return Admins.findOne({ email: email });
  }
  async getAllAdmins(): Promise<IAdmin[]> {
    return await Admins.find();
  }
}
