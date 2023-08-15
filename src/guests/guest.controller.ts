import {
    Body,
    Controller,
    Post,
    Get,
    Param,
    Put,
    Delete,
    Query,
    ParseIntPipe,
  } from '@nestjs/common';
  import { GuestService } from './guest.service';
  import { CreateGuestDto } from './dto/create-guest.dto';
  
  @Controller('guest')
  export class GuestController {
    constructor(private readonly usersService: GuestService) {}
  
    @Post('/create')
    async registerAdminHandler(@Body() payload: CreateGuestDto): Promise<object> {
      await this.usersService.createGuest(payload);
      return {
        status: 'success',
        message: 'Data tamu telah ditambahkan',
      };
    }
  
  
    @Get('/')
    async getAllAdminHandler(): Promise<object> {
      const data = await this.usersService.getAllGuest();
  
      return {
        status: 'success',
        data: data,
      };
    }
  
    @Get('/:guid')
    async getUserByGuidHandler(@Param('guid') guid: string): Promise<object> {
      const data = await this.usersService.getGuestById(guid);
  
      return {
        status: 'success',
        data: data,
      };
    }

  }
  