import { DomainError } from "../../../../core/shared/errors/domain-error";
import { Either, left, right } from "../../../../core/shared/logic/either";

import { UpdateFeatureDTO } from "../dtos/update-feature-dto";
import { FeatureEntity } from "../entities/feature_entity";

import { FeatureNameAlreadyExistsDomainError } from "../errors/feature-name-already-exists-domain-error";
import { FeatureNotExistsDomainError } from "../errors/feature-not-exists-domain-error";
import { InvalidNameDomainError } from "../errors/invalid-name-domain-error";

import { IFeatureRepository } from "../repositories/i-feature-repository";

export class UpdateFeatureUsecase {
  constructor(
    private featureRepository: IFeatureRepository,
  ) { }

  async execute(dto: UpdateFeatureDTO): Promise<Either<DomainError, boolean>> {
    const feature = await this.featureRepository.findById(dto.id);

    if (!feature) {
      return left(new FeatureNotExistsDomainError());
    }

    if (dto.name == '') {
      return left(new InvalidNameDomainError());
    }

    const featureExists = await this.featureRepository.findByName(dto.name ?? '');

    if (featureExists instanceof FeatureEntity && dto.name !== '') {
      return left(new FeatureNameAlreadyExistsDomainError());
    }

    await this.featureRepository.updateFeature({
      id: dto.id,
      name: dto.name ?? feature?.props.name,
      enabled: dto.enabled ?? feature?.props.enabled
    });

    return right(true);
  }
}