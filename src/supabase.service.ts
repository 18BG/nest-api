// supabase.service.ts
import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      "process.env.SUPABASE_URL",       // ton URL Supabase
      "process.env.SUPABASE_KEY"       // ta clé "anon" ou "service_role"
    );
  }

  getClient(): SupabaseClient {
    return this.supabase;
  }
}
// SUPABASE_URL=https://xxxx.supabase.co
// SUPABASE_KEY=eyJhbGciOi... (clé service_role si tu veux insert/update/delete)
