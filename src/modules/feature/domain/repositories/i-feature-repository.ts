import { Maybe } from "../../../../core/shared/logic/maybe";

import { CreateFeatureDTO } from "../dtos/create-feature-dto";
import { UpdateFeatureDTO } from "../dtos/update-feature-dto";
import { FeatureEntity } from "../entities/feature_entity";

export interface IFeatureRepository {
  getFeatures(): Promise<FeatureEntity[]>;
  createFeature(dto: CreateFeatureDTO): Promise<void>;
  updateFeature(dto: UpdateFeatureDTO): Promise<void>;

  findByName(name: string): Promise<Maybe<FeatureEntity>>
  findById(id: string): Promise<Maybe<FeatureEntity>>;
}