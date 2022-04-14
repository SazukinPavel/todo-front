import { User } from './../types/User';
import { AuthResponseDto } from './../types/dto/AuthResponse.dto';
import { RegisterDto } from './../types/dto/Register.dto';
import { $axios } from '../http';
import { LoginDto } from './../types/dto/Login.dto';

export class AuthService{

    static login(dto:LoginDto){
        return $axios.post<AuthResponseDto>('auth/login',dto)
    }

    static register(dto:RegisterDto){
        return $axios.post<AuthResponseDto>('auth/register',dto)
    }

    static checkToken(){
        return $axios.get<User>('auth/')
    }

}