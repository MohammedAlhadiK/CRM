import { address } from './addressVM';

export class customer {
  iD: number = 0;
  code: string = '';
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  addresses: address[] = [];
  isActive: number = 0;
}
