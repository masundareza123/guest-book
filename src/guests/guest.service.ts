import {
    BadRequestException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
  } from '@nestjs/common';
  import { v4 as uuidv4 } from 'uuid';
  import { InjectModel } from '@nestjs/mongoose';
  import { Guest } from './guest.schema';
  import mongoose from 'mongoose';
  import * as bcrypt from 'bcrypt';
//   import { CreateUserDto } from './dto/create-users.dto';
//   import { UpdateUserDto } from './dto/update-users.dto';
//   import { UpdateUserPasswordDto } from './dto/update-userPassword.dto';
  import { CreateGuestDto } from './dto/create-guest.dto';

  @Injectable()
  export class GuestService {
    constructor(
      @InjectModel(Guest.name)
      private readonly guestModel: mongoose.Model<Guest>,
    ) {}
  
    async createGuest(payload: CreateGuestDto): Promise<void> {
      const {
        guest_name,
        instance,
        description,
        email,
      } = payload;
  
      const guest_guid = `Guest-${uuidv4()}`;
      const createdAt = new Date().toISOString();
      const updatedAt = createdAt;
  
      const schema = {
        guest_guid,
        guest_name,
        instance,
        description,
        email,
        createdAt,
        updatedAt,
      };
  
      const createUser = new this.guestModel(schema);
  
      await createUser.save();
    }
  
    async getAllGuest(): Promise<Guest[]> {
      const admin = await this.guestModel
        .find()
        .select(
          'guest_guid guest_name instance description email createdAt updatedAt',
        );
  
      if (!admin.length) {
        throw new NotFoundException('Belum ada data yang mendaftar');
      }
  
      return admin;
    }
  
    async getGuestById(guest_guid: string): Promise<Guest | null> {
      const user = await this.guestModel
        .findOne({ guest_guid })
        .select('guest_guid guest_name instance description email createdAt updatedAt');
  
      if (!user) {
        throw new NotFoundException('Data tamu tidak ditemukan');
      }
  
      return user;
    }
  

  }