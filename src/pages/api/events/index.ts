import { Logger } from '@lib';
import { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@lib/prisma.client';
import { isAuthenticated } from '@lib/is-authenticated';
import { InternalServerError, UnsupportedMethodError } from '@lib/http-errors';
import { firebaseAdminSDK } from '@lib/firebase.admin';

const auth = firebaseAdminSDK.auth();
const logger = new Logger('api/events');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const decodeIdToken = await isAuthenticated(req, res);
  if (!decodeIdToken) {
    return res.status(403).json({ error: 'Unauthenticated' });
  }

  try {
    switch (req.method) {
      case 'POST':
        return prismaClient.event
          .create({
            data: {
              title: req.body.title as string,
              imgUrl: req.body.imgUrl,
              startDate: new Date(),
              endDate: new Date(),
              createdAt: new Date(),
            },
          })
          .then((event) =>
            auth
              .setCustomUserClaims(decodeIdToken.uid, { event_id: event.id })
              .then(() => res.status(200).json({ event }))
              .catch((err) => {
                logger.error('unable to create event:', err);
                return res.status(500).json(InternalServerError);
              })
          );
      default:
        return res.status(405).json(UnsupportedMethodError);
    }
  } catch (err) {
    logger.error('unable to perform op based on method:', err);
    return res.status(500).json(InternalServerError);
  }
}

export default handler;
