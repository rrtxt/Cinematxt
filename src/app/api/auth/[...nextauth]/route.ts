import client from "@/lib/prisma"
import { compare } from "bcrypt"
import { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions : NextAuthOptions = {
    providers : [
        CredentialsProvider({
            credentials: {
                email : {label : 'email', type : 'text'},
                name : {label : 'name', type : 'text'},
                password : {label : 'password', type : 'password'}
            },
            //@ts-expect-error
            authorize: async (credentials: {email : string, name : string, password : string}) => {
                const { email, name, password } = credentials
        
                if (!email || !password) {
                  throw new Error('Missing username or password')
                }
                const user = await client.user.findUnique({
                  where: {
                    email,
                  },
                })
                // if user doesn't exist or password doesn't match
                if (!user || !(await compare(password, user.password))) {
                  throw new Error('Invalid username or password')
                }
                return user
              }
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
          return {
            ...session,
            user: {
              ...session.user,
              id: token.id,
            },
          }
        },
        jwt: ({ token, user }) => {
          if (user) {
            const u = user as unknown as any
            return {
              ...token,
              id: u.id,
            }
          }
          return token
        },
      },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }