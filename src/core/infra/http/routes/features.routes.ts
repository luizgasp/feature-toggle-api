import { Router } from 'express';

import { ExpressRouteAdapter } from '../../adapters/express-route-adapter';
import { CreateFeatureControllerFactory } from '../factories/controllers/create-feature-controller-factory';
import { GetFeaturesControllerFactory } from '../factories/controllers/get-features-controller-factory';

const featuresRoutes = Router();

featuresRoutes.get('/', ExpressRouteAdapter.adapt(GetFeaturesControllerFactory.instance()));
featuresRoutes.post('/', ExpressRouteAdapter.adapt(CreateFeatureControllerFactory.instance()));

export { featuresRoutes };