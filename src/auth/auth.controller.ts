import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}


    @Get('transaction/:id/status')
    async updateTrxn( 
     @Param('id') id: string,
     @Body('status') status: string,
    ){
       ;
        console.log(`Updating transaction ${id} with status: ${status}`);
        
        return this.authService.setStatus(id, status)

    }


    @Post('register')
    register() {   
        return this.authService.register();
     }

    @Get('login')
    login() {
        return {message : "Implement login logic here\n"};
    }


    @Post('logout')
    logout() {
    }



}

