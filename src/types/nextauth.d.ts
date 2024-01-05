import User from "@/app/models/user";
import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface Session {
        user : User
    }
}