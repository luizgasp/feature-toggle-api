import { FeatureEntity } from "../entities/feature_entity";

export interface IFeatureRepository {
  getAllFeatures(): Promise<FeatureEntity[]>;
}