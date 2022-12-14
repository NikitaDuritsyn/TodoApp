/* eslint-disable no-async-promise-executor */
import axios from 'axios';

const url = 'http://localhost:3000/api/'
class authService {
    static login(email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(url + "login", { email, password });
                const token = response.data.token
                const userData = response.data.user;
                localStorage.setItem('token', token)
                localStorage.setItem('userid', userData.id)
                localStorage.setItem('username', userData.name)
                // localStorage.setItem('userData',userData)
                resolve(response.data);
            } catch (e) {
                reject(e)
            }
        })
    }
    static logout(email, password) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(email, password);
                localStorage.clear();
            } catch (e) {
                reject(e)
            }
        })
    }
    static registrationNewUser(name, lastname, email, phone, role, password) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(url + "registration", { name, lastname, email, password, phone, role })
                resolve(response.data)
            } catch (e) {
                reject(e)
            }
        })
    }
}

export default authService;