import { Logger } from '@lib';
import { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@lib/prisma.client';
import { isAuthenticated } from '@lib/is-authenticated';
import { InternalServerError, UnsupportedMethodError } from '@lib/http-errors';

const logger = new Logger('api/connections');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const decodeIdToken = await isAuthenticated(req, res);
  if (!decodeIdToken) {
    return res.status(403).json({ error: 'Unauthenticated' });
  }

  try {
    switch (req.method) {
      case 'GET':
        return prismaClient.tempConnections
          .findMany({
            where: {
              user: {
                firebaseId: decodeIdToken.uid,
              },
              eventId: decodeIdToken['event_id'],
            },
          })
          .then((connections) =>
            connections
              ? res.status(200).json(connections)
              : res.status(404).json({ error: 'Connections not found' })
          )
          .catch((err) => {
            logger.error('unable to get connections:', err);
            return res.status(500).json(InternalServerError);
          });
      case 'PUT':
        return prismaClient.tempConnections
          .update({
            where: {
              id: Number(req.query.id as string),
              eventId: decodeIdToken['event_id'],
            },
            data: {
              met: true,
            },
          })
          .then((connection) =>
            connection
              ? res.status(200).json(connection)
              : res.status(404).json({ error: 'Connection not found' })
          )
          .catch((err) => {
            logger.error('unable to get connections:', err);
            return res.status(500).json(InternalServerError);
          });
      default:
        return res.status(405).json(UnsupportedMethodError);
    }
  } catch (err) {
    logger.error('unable to perform op based on method:', err);
    return res.status(500).json(InternalServerError);
  }
}

export default handler;
