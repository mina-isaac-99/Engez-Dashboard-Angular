export interface Message {
  id: number,
  user_id:number,
  subject:string,
  message: string,
  user:
  {
    name:string,
    email : string
  }
}
