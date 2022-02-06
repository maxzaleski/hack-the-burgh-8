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
      case 'GET':
        return prismaClient.user
          .findUnique({
            where: {
              id: Number(req.query.id as string),
            },
          })
          .then((user) =>
            user ? res.status(200).json(user) : res.status(404).json({ error: 'User not found' })
          )
          .catch((err) => {
            logger.error('unable to get user:', err);
            return res.status(500).json(InternalServerError);
          });
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

      // ****************************************************************************************
      // What is the point of this code? It is not used anywhere.
      //
      // if (req.body.interests) {
      //   req.body.interests.map((interest: any) => ({ uid: Number(req.query.id), interest }));
      //
      //   prismaClient.interests.createMany({
      //     data: req.body.interests,
      //   });
      // } else {
      //   return res.status(400).json({ error: 'Bad Request', message: 'No interests in body' });
      // }
      //
      // interface questions {
      //   question: string;
      //   answer: string;
      // }
      //
      // req.body.questions.map((questions: questions) => ({
      //   uid: req.query.id,
      //   question: questions.question,
      //   answer: questions.answer,
      //   updatedAt: new Date(),
      //   createdAt: new Date(),
      // }));
      //
      // prismaClient.questions.createMany({
      //   data: req.body.questions,
      // });
      //
      // break;
      case 'PUT':
        return prismaClient.user
          .update({
            where: {
              id: Number(req.query.id as string),
            },
            data: {
              eventId: req.body.eventId as number,
              email: req.body.email as string,
              name: req.body.name as string,
              imgUrl: req.body.imgUrl as string,
              jobTitle: req.body.jobTitle as string,
              tagline: req.body.tagline as string,
              createdAt: new Date(),
            },
          })
          .then((user) => res.status(201).json(user))
          .catch((err) => {
            logger.error('unable to update user:', err);
            return res.status(500).json(InternalServerError);
          });

      // ****************************************************************************************
      // What is the point of this code? It is not used anywhere.
      //
      //
      // let data = [];
      //
      // for (let interest in req.body.interests) {
      //   data.push({ uid: Number(req.query.id), interest });
      // }
      //
      // prismaClient.interests.updateMany({
      //   where: {
      //     uid: Number(req.query.id as string),
      //   },
      //   data: data,
      // });
      //
      // interface questions {
      //   question: string;
      //   answer: string;
      // }
      //
      // req.body.questions.map((questions: questions) => ({
      //   uid: req.query.id,
      //   question: questions.question,
      //   answer: questions.answer,
      //   updatedAt: new Date(),
      //   createdAt: new Date(),
      // }));
      //
      // prismaClient.questions.updateMany({
      //   where: {
      //     uid: Number(req.query.id as string),
      //   },
      //   data: req.body.questions,
      // });
      //
      // break;
      default:
        return res.status(405).json(UnsupportedMethodError);
    }
  } catch (err) {
    logger.error('unable to perform op based on method:', err);
    return res.status(500).json(UnexpectedError);
  }
}

export default handler;
