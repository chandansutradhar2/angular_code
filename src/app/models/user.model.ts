
export interface User{
    uid?:string;
    fName:string;
    lName:string;
    email:string;
    password:string;
    qualification:string;
    employed:boolean;
    companyName?:string;
    role:ROLE;
  }

  export enum ROLE{
      "admin"="admin",
      "instructor"="instructor",
      "student"="student"
  }