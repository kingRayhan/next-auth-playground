import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: "d627bd9bdf9860b2321e",
      clientSecret: "36727c85ed1ca0213bd886e5037e40ecac86870c",
    }),
    GoogleProvider({
      clientId:
        "1028124840646-belq8vdq0tvnii7n32s797ivduu8b11i.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
};

export default NextAuth(authOptions);
