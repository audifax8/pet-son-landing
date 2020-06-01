export interface IBackResponse<T> {
  status: number,
  data: T;
  totalItems: number,
  errors: Array<String>
}
