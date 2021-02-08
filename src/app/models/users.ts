import {IAddress} from './address';


export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
}
