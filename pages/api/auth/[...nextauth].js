import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import {hash} from "bcrypt"

export const authOptions = {

  providers: [
    CredentialProvider({
        name:"Credentials",

        async authorize(credentials,req){
          if(credentials?.login){
            console.log("in first if")
            const {email,password} = credentials
            console.log(process.env.SALT_ROUNDS)
            const hashedPassword = await new Promise((resolve, reject) => {
              hash(password, parseInt(process.env.SALT_ROUNDS), function(err, hash) {
                if (err) reject(err)
                resolve(hash)
              });
            })
          
            console.log(hashedPassword)
            let user = await fetch(`${process.env.NEXTAUTH_URL}/api/login?email=${email}&password=${hashedPassword}`)

            if(user?.status==302){
                return user
            }
            return null
        }else{

          const {email,password,firstName,lastName,delegate,role} = credentials
          const hashedPassword = await new Promise((resolve, reject) => {
            hash(password, parseInt(process.env.SALT_ROUNDS), function(err, hash) {
              if (err) reject(err)
              resolve(hash)
            });
          })

          let user = await fetch(`${process.env.NEXTAUTH_URL}/api/register?email=${email}&password=${hashedPassword}&firstName=${firstName}&lastName=${lastName}&delegate=${delegate}&role=${role}`)

          if(user?.status==201){
              return user
          }else{
            return null
          }

        }
      } 
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token,user,account }) {
      if(account){
        token.user.id = user?.id,
        token.userRole = user?.role || "none"
      }
        return token
    },
    async session({token}){
        session.userRole = token.userRole
        session.user.id = token.user.id
        return session
    }
  },
  session:{
    maxAge: 24*60*60,
    strategy: "jwt"
  }
}

export default NextAuth(authOptions)