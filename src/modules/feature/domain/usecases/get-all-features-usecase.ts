import { IAppError } from "src/core/shared/errors/i-app-error";
import { Either, right } from "src/core/shared/logic/either";
import { FeatureEntity } from "../entities/feature_entity";
import { IFeatureRepository } from "../repositories/i-feature-repository";

export class GetAllFeaturesUsecase {
  constructor(
    private featureRepository: IFeatureRepository
  ) { }

  async execute(): Promise<Either<IAppError, FeatureEntity[]>> {
    const result = await this.featureRepository.getAllFeatures();

    return right(result);
  }
}