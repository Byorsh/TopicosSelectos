import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(){

    }
    @Post()
    Create(@Body() params):void{
        console.log('nombre: ', params.nombre);
    }

    @Get()
    getUser(): string {
        return 'Jorge'
    }
}
