import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    register() {   
        return "Implement registration logic here";
     }

    @Get('login')
    login() {
        return {message : "Implement login logic here\n"};
    }


    @Post('logout')
    logout() {
    }
}

