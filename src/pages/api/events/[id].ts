import { firebaseAdminSDK } from "@lib/firebase.admin";
import { Logger } from "@lib";
import { NextApiRequest, NextApiResponse } from "next";
import { AuthCookie } from "@lib/AuthCookie";
import { prismaClient } from "@lib/prisma.client";

const auth = firebaseAdminSDK.auth();
const logger = new Logger('api/login');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const idToken = req.headers.authorization;
  // Precaution, but should never be hit.
  if (!idToken) return res.status(400).json({ error: 'Unauthenticated' });

  try {
    await auth.verifyIdToken(idToken);

    switch (req.method) {
      case 'GET':
        return res.status(200).json({
        });
      case 'POST':
        return res.status(201).json({
        });
      default:
        return res.status(400).json({ error: 'Unsupported method' });
    }
  } catch (err) {
    logger.error(err);
    return res.status(500).json({ error: 'Unexpected error' });
  }

  return res.status(200).json({ success: true });
}

export default handler;
