import { Router } from 'express';
import { featuresRoutes } from './features.routes';

const router = Router();

router.use('/features', featuresRoutes);

export { router };