import { Injectable } from "@nestjs/common";
import { createClient } from '@supabase/supabase-js'
import { SupabaseService } from "src/supabase.service";

@Injectable({})
export class AuthService {
    constructor(private readonly supabaseService: SupabaseService) {}
    // Create a single supabase client for interacting with your database
    login() {
    }
    register() {
        return "User registered successfully";
    }
    logout() {
    }
    refreshToken() {
    }
    validateUser() {
    }
    getUserProfile() {
    }
    updateUserProfile() {
    }
    deleteUserAccount() {
    }
    changePassword() {
    }
    forgotPassword() {
    }
    resetPassword() {
    }
 
    async setStatus(id: string, status: string) {
        const supabase = this.supabaseService.getClient();
        const { data, error } = await supabase
            .from('users')
            .update({status: status })
            .eq('id', id);
        if (error) {
            throw new Error(`Error updating status: ${error.message}`);
        }
        return data;
    }
}