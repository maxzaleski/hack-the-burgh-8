import { Logger } from '@lib';
import { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@lib/prisma.client';
import { isAuthenticated } from '@lib/is-authenticated';
import { InternalServerError, UnexpectedError, UnsupportedMethodError } from '@lib/http-errors';

const logger = new Logger('api/users');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const decodeIdToken = await isAuthenticated(req, res);
  if (!decodeIdToken) {
    return res.status(403).json({ error: 'Unauthenticated' });
  }

  try {
    switch (req.method) {
      case 'POST':
        return prismaClient.user
          .create({
            data: {
              eventId: req.body.eventId as number,
              firebaseId: decodeIdToken.uid,
              email: req.body.email as string,
              name: req.body.name as string,
              imgUrl: req.body.imgUrl as string,
              jobTitle: req.body.jobTitle as string,
              tagline: req.body.tagline as string,
              pronouns: req.body.pronouns as string,
              createdAt: new Date(),
            },
          })
          .then((event) => res.status(201).json(event))
          .catch((err) => {
            logger.error('unable to create event:', err);
            return res.status(500).json(InternalServerError);
          });
      default:
        return res.status(405).json(UnsupportedMethodError);
    }
  } catch (err) {
    logger.error('unable to perform op based on method:', err);
    return res.status(500).json(UnexpectedError);
  }
}

export default handler;
