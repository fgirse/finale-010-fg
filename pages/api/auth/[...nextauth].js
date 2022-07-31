import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../auth/lib/mongodb";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook"
import Auth0Provider from "next-auth/providers/auth0"
// import AppleProvider from "next-auth/providers/apple"
export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [

    
    EmailProvider({
    server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
        }
    },
    from: process.env.EMAIL_FROM,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],


  

  pages: {
    signIn: "/auth/signin",
  },

jwt: {
  encryption: true,
},

secret: process.env.SECRET,

callbacks: {
  async jwt(token, account) {
    if (account?.accessToken) {
      token.accessToken = account.accessToken;
    }
    return token;
  },

  redirect: async (url, _baseUrl) => {
    if (url === '/profile') {
      return Promise.resolve('/');
    }
    return Promise.resolve('/');
  },
},
});