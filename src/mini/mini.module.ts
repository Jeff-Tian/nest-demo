import { Module } from '@nestjs/common';
import { MiniController } from './mini.controller';

@Module({
  controllers: [MiniController],
})
export class MiniModule {}
