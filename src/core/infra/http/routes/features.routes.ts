import { Router } from 'express';
import { ExpressRouteAdapter } from '../../adapters/express-route-adapter';
import { GetFeaturesControllerFactory } from '../factories/controllers/get-features-controller-factory';

const featuresRoutes = Router();

featuresRoutes.get('/', ExpressRouteAdapter.adapt(GetFeaturesControllerFactory.instance()));

export { featuresRoutes };