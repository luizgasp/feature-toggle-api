import { FeatureRepositoryImpl } from "../../../../../modules/feature/data/repositories/feature-repository-impl";
import { UpdateFeatureUsecase } from "../../../../../modules/feature/domain/usecases/update-feature-usecase";
import { UpdateFeatureController } from "../../../../../modules/feature/presentation/controllers/update-feature-controller";

export class UpdateFeatureControllerFactory {
  static instance(): UpdateFeatureController {
    const featureRepository = new FeatureRepositoryImpl();

    const updateFeatureUsecase = new UpdateFeatureUsecase(featureRepository);

    const updateFeatureController = new UpdateFeatureController(updateFeatureUsecase);

    return updateFeatureController;
  }
}