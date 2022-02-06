import { NextApiRequest, NextApiResponse } from 'next';
import { Logger } from '@lib';
import { firebaseAdminSDK } from '@lib/firebase.admin';
import { BASE_EVENT_ID } from './db-populate';

const auth = firebaseAdminSDK.auth();
const logger = new Logger('api/max');

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Define your user object here:
    const userRecord = await auth.createUser({
      email: 'nik@dev.com',
      password: 'password123',
      displayName: 'Nik',
    });
    await auth.setCustomUserClaims(userRecord.uid, {
      event_id: BASE_EVENT_ID,
    });
    return res.status(200).json({ status: true });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: error.message });
  }
}

export default handler;
