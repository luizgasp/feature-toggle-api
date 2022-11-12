import { FeatureEntity } from "../entities/feature_entity";

export interface IFeatureRepository {
  getFeatures(): Promise<FeatureEntity[]>;
}