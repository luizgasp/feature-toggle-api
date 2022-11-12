import { prisma } from "../../../../core/infra/prisma/client";

import { FeatureEntityMapper } from "../mappers/feature-entity-mapper";

import { FeatureEntity } from "../../domain/entities/feature_entity";
import { IFeatureRepository } from "../../domain/repositories/i-feature-repository";

export class FeatureRepositoryImpl implements IFeatureRepository {
  async getFeatures(): Promise<FeatureEntity[]> {
    const features = await prisma.features.findMany();

    if (features.length === 0) return [];

    return features.map((feature) => FeatureEntityMapper.toDomain(feature));
  }
}