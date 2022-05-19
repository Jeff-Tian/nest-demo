import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MiniModule } from './mini/mini.module';

@Module({
  imports: [AdminModule, MiniModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
