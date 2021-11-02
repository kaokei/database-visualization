import { Module } from '@nestjs/common';
import { ServerModule } from './server/server.module';
import { DatabaseModule } from './database/database.module';
import { TableModule } from './table/table.module';
import { FieldModule } from './field/field.module';

@Module({
  imports: [ServerModule, DatabaseModule, TableModule, FieldModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
