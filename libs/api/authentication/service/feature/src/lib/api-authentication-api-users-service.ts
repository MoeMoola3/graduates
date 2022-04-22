import { AuthenticationUser } from '@graduates/api/authentication/api/shared/interfaces/data-access';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  private readonly users = [
  {
    id: '1',
    name:'John',
    email:'JohnDoe@gmail.com',
    password:'admin1',
  },
  {
    id: '2',
    name:'Jake',
    email:'JakeDoe@gmail.com',
    password:'admin2',
  },

  ];


  findAll(){
    return this.users;
  }
  

  findOne(username: string){
    return this.users.find((users) => users.name ===username);
  }

  FindIt(name: string){
    return this.users.find(t=>t.name === name)
    
  }

//   async validateUser(name: string, password: string): Promise<any> {
//     const user = await this.usersService.findOne(name);

//     if (user && user.password === password){
//         const {password, ...result } =user;         //result contains the user object without the password
//         return result;
//     }
//     return null;
// }


async validateLogin(name: string, password: string): Promise<any> {

  const user = this.findOne(name);;
      if(name==name){
        // const {password, ...result } =user;         //result contains the user object without the password
        return user;
      }


  // const user = await this.findOne(name);
}

    
}