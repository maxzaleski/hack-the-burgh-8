import { firebaseAdminSDK } from '@lib/firebase.admin';
import { Logger } from '@lib';
import { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@lib/prisma.client';
import { isAuthenticated } from '@lib/is-authenticated';
import { InternalServerError, UnexpectedError, UnsupportedMethodError } from '@lib/http-errors';

const logger = new Logger('api/login');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const decodeIdToken = await isAuthenticated(req, res);
  if (!decodeIdToken) {
    return res.status(403).json({ error: 'Unauthenticated' });
  }

  try {
    switch (req.method) {
      case 'GET':
        prismaClient.event
          .findUnique({
            where: {
              id: Number(req.query.id as string),
            },
          })
          .then((event) =>
            event ? res.status(200).json(event) : res.status(404).json({ error: 'Event not found' })
          )
          .catch((err) => {
            logger.error('unable to get event:', err);
            return res.status(500).json(InternalServerError);
          });
        break;
      case 'POST':
        prismaClient.event
          .create({
            data: {
              title: req.body.title as string,
              imgUrl: req.body.imgUrl as string,
              startDate: new Date(req.body.startDate as string),
              endDate: new Date(req.body.endDate as string),
              createdAt: new Date(),
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
        return res.status(405).json(UnsupportedMethodError);
    }
  } catch (err) {
    logger.error('unable to perform op based on method:', err);
    return res.status(500).json(InternalServerError);
  }
}

export default handler;
