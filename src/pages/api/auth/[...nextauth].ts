import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId:
        "1028124840646-belq8vdq0tvnii7n32s797ivduu8b11i.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

export default NextAuth(authOptions);
