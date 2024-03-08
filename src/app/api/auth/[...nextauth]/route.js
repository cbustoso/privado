import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { fetchUsers } from "@/services/UsersServices";
import { redirect } from "next/dist/server/api-utils";

const searchUser = async email => {
  const response = await fetchUsers()
  const user = response.users.filter(user => user.email === email)
  return user
}

const handler = NextAuth({
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })],
  callbacks: {
    async signIn({ account, profile }) {
      try {
        const user = await searchUser(profile.email)
        console.log('USER', user);
        if (user.length === 0) {
          console.log('ENTRÓ AL ERROR');
            // Si el usuario no tiene un correo electrónico, significa que la autenticación ha fallado.
            throw new Error('No se pudo acceder. Correo no autorizado.');
        }

        if (account.provider === "google") {
          return profile.email_verified && profile.email.endsWith("@gmail.com")
        }

        return true // Do different verification for other providers that don't have `email_verified`
      } catch (error) {
        console.log('ERRRRRRRRR', error);
      }

    },
  }
})

export { handler as GET, handler as POST }