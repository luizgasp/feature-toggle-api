import { prisma } from "../../../../core/infra/prisma/client";
import { Maybe } from "../../../../core/shared/logic/maybe";

import { FeatureEntityMapper } from "../mappers/feature-entity-mapper";

import { FeatureEntity } from "../../domain/entities/feature_entity";
import { IFeatureRepository } from "../../domain/repositories/i-feature-repository";
import { CreateFeatureDTO } from "../../domain/dtos/create-feature-dto";
import { UpdateFeatureDTO } from "../../domain/dtos/update-feature-dto";

export class FeatureRepositoryImpl implements IFeatureRepository {
  async getFeatures(): Promise<FeatureEntity[]> {
    const features = await prisma.features.findMany();

    if (features.length === 0) return [];

    return features.map((feature) => FeatureEntityMapper.toDomain(feature));
  }

  async createFeature(dto: CreateFeatureDTO): Promise<void> {
    const { name, enabled } = dto;

    await prisma.features.create({ data: { name, enabled } });
  }

  async updateFeature(dto: UpdateFeatureDTO): Promise<void> {
    const { id, name, enabled } = dto;

    await prisma.features.update({ where: { id }, data: { name, enabled } });
  }

  async findByName(name: string): Promise<Maybe<FeatureEntity>> {
    const feature = await prisma.features.findFirst({ where: { name } });

    if (!feature) return null;

    return FeatureEntityMapper.toDomain(feature);
  }

  async findById(id: string): Promise<Maybe<FeatureEntity>> {
    const feature = await prisma.features.findFirst({ where: { id } });

    if (!feature) return null;

    return FeatureEntityMapper.toDomain(feature);
  }
}