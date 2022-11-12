import { IAppError } from "../../../../core/shared/errors/i-app-error";
import { Either, right } from "../../../../core/shared/logic/either";

import { FeatureEntity } from "../entities/feature_entity";
import { IFeatureRepository } from "../repositories/i-feature-repository";

export class GetFeaturesUsecase {
  constructor(
    private featureRepository: IFeatureRepository
  ) { }

  async execute(): Promise<Either<IAppError, FeatureEntity[]>> {
    const result = await this.featureRepository.getFeatures();

    return right(result);
  }
}