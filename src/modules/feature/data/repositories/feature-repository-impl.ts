
import { prisma } from "../../../../core/infra/prisma/client";
import { FeatureEntity } from "../../domain/entities/feature_entity";
import { IFeatureRepository } from "../../domain/repositories/i-feature-repository";
import { FeatureEntityMapper } from "../mappers/feature-entity-mapper";

export class FeatureRepositoryImpl implements IFeatureRepository {
  async getAllFeatures(): Promise<FeatureEntity[]> {
    const features = await prisma.features.findMany();

    if (features.length === 0) return [];

    return features.map((feature) => FeatureEntityMapper.toDomain(feature));
  }
}