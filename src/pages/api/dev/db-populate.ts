import { Logger } from '@lib';
import { NextApiRequest, NextApiResponse } from 'next';
import { prismaClient } from '@lib/prisma.client';
import Prisma from '@prisma/client';

const logger = new Logger('api/dev/db-data-setup');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Add create calls here:
    await createEvent();
    return res.status(200).json({ status: true });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const BASE_EVENT_ID = 1;

async function createEvent(): Promise<Prisma.Event> {
  const now = new Date();
  const endDate = new Date();
  endDate.setDate(now.getDate() + 2);
  return prismaClient.event.create({
    data: {
      id: BASE_EVENT_ID,
      title: 'Acme Social',
      createdAt: now,
      startDate: now,
      endDate,
    },
  });
}

export default handler;
