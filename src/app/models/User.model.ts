import {Authentication} from './Authentication';

export class UserModel {
  constructor(public id: string, public username: string, public email: string) {
  }
}
