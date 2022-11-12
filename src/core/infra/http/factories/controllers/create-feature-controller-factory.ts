import { FeatureRepositoryImpl } from "../../../../../modules/feature/data/repositories/feature-repository-impl";
import { CreateFeatureUsecase } from "../../../../../modules/feature/domain/usecases/create-feature-usecase";
import { CreateFeatureController } from "../../../../../modules/feature/presentation/controllers/create-feature-controller";

export class CreateFeatureControllerFactory {
  static instance(): CreateFeatureController {
    const featureRepository = new FeatureRepositoryImpl();

    const createFeatureUsecase = new CreateFeatureUsecase(featureRepository);

    const createFeatureController = new CreateFeatureController(createFeatureUsecase);

    return createFeatureController;
  }
}