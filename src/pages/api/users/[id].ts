import { firebaseAdminSDK } from '@lib/firebase.admin';
import { Logger } from '@lib';
import { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@lib/prisma.client';
import { isAuthenticated } from '@lib/is-authenticated';
import { InternalServerError, UnexpectedError } from '@lib/http-errors';

const logger = new Logger('api/login');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const decodeIdToken = await isAuthenticated(req, res);
  if (!decodeIdToken) {
    return res.status(403).json({ error: 'Unauthenticated' });
  }

  try {
    switch (req.method) {
      case 'GET':
        prismaClient.user
          .findUnique({
            where: {
              id: Number(req.query.id as string),
            },
          })
          .then((user) =>
            user ? res.status(200).json(user) : res.status(404).json({ error: 'Event not found' })
          )
          .catch((err) => {
            logger.error('unable to get event:', err);
            return res.status(500).json(InternalServerError);
          });
        break;
      case 'POST':
        prismaClient.user
          .create({
            data: {
              eventId: req.body.eventId as number,
              email: req.body.email as string,
              name: req.body.name as string,
              imgUrl: req.body.imgUrl as string,
              jobTitle: req.body.jobTitle as string,
              tagline: req.body.tagline as string,
              createdAt: new Date(),

              languages: req.body.languages,
              interests: req.body.interests,  
            },
          })
          .then((event) => res.status(201).json(event))
          .catch((err) => {
            logger.error('unable to create event:', err);
            return res.status(500).json(InternalServerError);
          });
        break;
      case 'PUT':
        prismaClient.event
          .update({
            where: {
              id: Number(req.query.id as string), // TODO(MZ): replace with claims
            },
            data: {
              title: req.body.title as string,
              imgUrl: req.body.imgUrl as string,
              startDate: new Date(req.body.startDate as string),
              endDate: new Date(req.body.endDate as string),
              createdAt: new Date(),
            },
          })
          .then((event) => res.status(200).json(event))
          .catch((err) => {
            logger.error('unable to create event:', err);
            return res.status(500).json(InternalServerError);
          });
        break;
      default:
        return res.status(400).json(InternalServerError);
    }
  } catch (err) {
    logger.error('unable to perform op based on method:', err);
    return res.status(500).json(UnexpectedError);
  }
}

export default handler;
