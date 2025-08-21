import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { DbService } from './db/db.service';
import { TrxnController } from './trxn/trxn.controller';
import { SupabaseModule } from './supabase/supabase.module';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule, SupabaseModule],
  providers: [DbService],
  controllers: [TrxnController],
})
export class AppModule {}

