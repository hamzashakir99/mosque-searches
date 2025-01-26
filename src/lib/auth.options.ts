import { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { IAuthGoogleProfile } from "@/types/next.auth.types";
import { createAccount } from "@/services/user.service";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === "google") {
        const googleProfile = {
          ...profile,
        } as IAuthGoogleProfile;
        if (!googleProfile?.email_verified) {
          return false;
        }
        const user = await createAccount({
          email: googleProfile.email,
          name: googleProfile.name,
          profile: googleProfile.picture,
          email_verified: googleProfile.email_verified,
        });
        if (!user) {
          return false;
        }
        return true;
      }
      return false;
    },
  },
};
