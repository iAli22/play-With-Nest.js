import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Module } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModule: Module<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModule.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModule.findOne({
      _id: id,
    });
  }

  async create(item: Item): Promise<Item> {
    const NewItem = this.itemModule(item);
    return await NewItem.save();
  }

  async FindAndDelete(id: string): Promise<Item> {
    return await this.itemModule.findByIdAndRemove(id);
  }

  async findAndUpdate(id: string, item: Item): Promise<Item> {
    return await this.itemModule.findByIdAndUpdate(id, item, {
      new: true,
      useFindAndModify: false,
    });
  }
}
