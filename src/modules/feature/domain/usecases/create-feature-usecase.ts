import { DomainError } from "../../../../core/shared/errors/domain-error";
import { Either, right } from "../../../../core/shared/logic/either";

import { CreateFeatureDTO } from "../dtos/create-feature-dto";
import { IFeatureRepository } from "../repositories/i-feature-repository";

export class CreateFeatureUsecase {
  constructor(
    private featureRepository: IFeatureRepository,
  ) { }

  async execute(dto: CreateFeatureDTO): Promise<Either<DomainError, boolean>> {
    // TODO - validate if feature name already exists

    await this.featureRepository.createFeature(dto);

    return right(true);
  }
}