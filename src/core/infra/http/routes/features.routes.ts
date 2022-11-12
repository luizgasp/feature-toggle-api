import { Router } from 'express';

import { ExpressRouteAdapter } from '../../adapters/express-route-adapter';
import { CreateFeatureControllerFactory } from '../factories/controllers/create-feature-controller-factory';
import { GetFeaturesControllerFactory } from '../factories/controllers/get-features-controller-factory';
import { UpdateFeatureControllerFactory } from '../factories/controllers/update-feature-controller-factory';

const featuresRoutes = Router();

featuresRoutes.get('/', ExpressRouteAdapter.adapt(GetFeaturesControllerFactory.instance()));
featuresRoutes.post('/', ExpressRouteAdapter.adapt(CreateFeatureControllerFactory.instance()));
featuresRoutes.put('/:id', ExpressRouteAdapter.adapt(UpdateFeatureControllerFactory.instance()));

export { featuresRoutes };