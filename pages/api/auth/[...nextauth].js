import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import {hash} from "bcrypt"

export const authOptions = {

  providers: [
    CredentialProvider({
        name:"Credentials",

        async authorize(credentials,req){
            const {email,password,firstname,lastname,delegate,role} = credentials
            const hashedPassword =hash(password,process.env.SALT_ROUNDS)
            const details = {
                email:email,
                password:hashedPassword,
                role: role,
                firstname,
                lastname,
                delegate
            }
            let user = await fetch(`${process.env.NEXTAUTH_URL}/api/login?email=${email}&password=${password}`)

            if(user?.status==302){
                return user
            }
            user = await fetch(`${process.env.NEXTAUTH_URL}/api/register?details=${details}`)

            if(user?.status==201){
                return user
            }
            return null
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
    async jwt({ token,user }) {
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