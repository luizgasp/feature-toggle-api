import { Features } from "@prisma/client";
import { FeatureEntity, FeatureEntityProps } from "../../domain/entities/feature_entity";

export class FeatureEntityMapper {
  static toDomain(object: Features): FeatureEntity {
    const props: FeatureEntityProps = {
      name: object.name,
      enabled: object.enabled,
      created_at: object.created_at,
      updated_at: object.updated_at,
    };

    return FeatureEntity.create(props, object.id);
  }
}