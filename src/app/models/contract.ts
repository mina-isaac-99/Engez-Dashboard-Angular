
export interface Contract {
  id: number,
  user_id:number,
  freelancer_id:number,
  title: string,
  description: string,
  price:number,
  created_at:string,
  user:
  {
    name:string ,
    email : string
  } ,
  freelancer:
  {
    name:string ,
    email:string
  } ,
  job:{
    id:number,
    title:string,
  }
}
