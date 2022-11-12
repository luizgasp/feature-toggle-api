import { CreateFeatureDTO } from "../dtos/create-feature-dto";
import { FeatureEntity } from "../entities/feature_entity";

export interface IFeatureRepository {
  getFeatures(): Promise<FeatureEntity[]>;
  createFeature(dto: CreateFeatureDTO): Promise<void>;
}