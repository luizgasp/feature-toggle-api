import { FeatureRepositoryImpl } from "../../../../../modules/feature/data/repositories/feature-repository-impl";
import { GetFeaturesUsecase } from "../../../../../modules/feature/domain/usecases/get-all-features-usecase";
import { GetFeaturesController } from "../../../../../modules/feature/presentation/controllers/get-features-controller";

export class GetFeaturesControllerFactory {
  static instance(): GetFeaturesController {
    const featureRepository = new FeatureRepositoryImpl();

    const getFeaturesUsecase = new GetFeaturesUsecase(featureRepository);

    const getFeaturesController = new GetFeaturesController(getFeaturesUsecase);

    return getFeaturesController;
  }
}