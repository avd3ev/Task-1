import { Router } from 'express';
import { logAction, getActions } from './actionController';

const router = Router();

router.post('/', logAction);
router.get('/', getActions);

export default router;