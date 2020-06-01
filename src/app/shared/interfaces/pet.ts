import { IPetType } from '.';
export interface IPet {
  avatar: string,
  description: string,
  name: string,
  petType: IPetType,
  gender: string,
  id: string,
  creationDate: string,
  adopted: boolean
}