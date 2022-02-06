import { NextApiRequest, NextApiResponse } from "next";
import { AuthCookie } from "@lib/AuthCookie";
import { firebaseAdminSDK } from "@lib/firebase.admin";
import { Logger } from "@lib";
import { auth as AdminAuth } from "firebase-admin";

const auth = firebaseAdminSDK.auth();

const logger = new Logger('is-authenticated');

export async function isAuthenticated(req: NextApiRequest, res: NextApiResponse): Promise<AdminAuth.DecodedIdToken | undefined> {
  const cookie = new AuthCookie(req, res);
  try {
   return await auth.verifyIdToken(cookie.get().idToken);
  } catch (err) {
    logger.error("unable to verify id token", err);
    return undefined
  }
}