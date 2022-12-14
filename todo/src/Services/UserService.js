/* eslint-disable no-async-promise-executor */
import axios from 'axios';

const url = 'http://localhost:3000/api/user'
class UserService {
    static getAllUsers(){
        return new Promise(async (resolve,reject)=>{
            try{
                const response = await axios.get(url);
                resolve(response.data);
            }catch(e){
                reject(e) 
            }
        })
    }
    static deleteThisUser(userId){
        return new Promise(async (resolve,reject)=>{
            try{
                const response = await axios.delete(url+`/${userId}`);
                resolve(response.data);
            }catch(e){
                reject(e) 
            }
        })
    }
    static updateThisUser(userId, name, lastname, email, password, phone, role ){
        return new Promise(async (resolve,reject)=>{
            try{
                console.log('id:',userId, 'name:',name, 'lastname:',lastname, 'email:',email, 'password:',password, 'phone:',phone, 'role:',role)
                const response = await axios.put(url+`/${userId}`, {name, lastname, email, password, phone, role});
                resolve(response.data);
            }catch(e){
                reject(e) 
            }
        })
    }
}

export default UserService;