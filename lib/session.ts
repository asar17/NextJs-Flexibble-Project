import {getServerSession} from 'next-auth/next'
import { NextAuthOptions ,User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import {AdapterUser} from 'next-auth/adapters'
import jsonwebtoken from 'jsonwebtoken'
import { JWT } from 'next-auth/jwt'
import { SessionInterface, UserProfile } from '../common.types'
import { createUser, getUser } from './actions'

export const authOptions : NextAuthOptions={
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID!,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET!
        }),
    ],
    jwt : {
        encode: ({ secret, token }) => {
            const encodedToken = jsonwebtoken.sign(
              {
                ...token,
                iss: "grafbase",
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
              },
              secret
            );
            
            return encodedToken;
          },
          decode: async ({ secret, token }) => {
            const decodedToken = jsonwebtoken.verify(token!, secret);
            return decodedToken as JWT;
          },
    },
    theme:{
        colorScheme:'light',
        logo:'/logo.svg'
    },
    callbacks: {
        async session ({session}){
          return session
         },
        async signIn ({user}:{ user: AdapterUser | User }){
            try{
                //if the user exits
                const userExits= await getUser(user?.email as string, user?.id as string) as {user?:UserProfile}
                //if the user not exits and create user for the first time
                if(!userExits){
                  await  createUser(user?.name as string, user?.email as string, user?.image as string, user?.id as string)
                  console.log('user exits',userExits)

                }
                return true;
            }
            catch(error:any){
                console.log("Error checking if user exists: ", error.message);
                console.log('user',user)

                return false;

            }

        }

    }

}
//to return current session
export async function getCurrentUser (){
     const session= await getServerSession(authOptions) as SessionInterface;
     return session
 }