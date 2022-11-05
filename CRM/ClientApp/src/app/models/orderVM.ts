import { address } from './addressVM';

export class order {
  iD: number = 0;
  status: string = '';
  customerID: number = 1;
  tax: number = 14;
  subTotal: number = 14;
  grantTotal: number = 14;
  addresses: address[] = [];
}
