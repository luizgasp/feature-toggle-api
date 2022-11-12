import { Entity } from "src/core/shared/contracts/entity";

export type FeatureEntityProps = {
  name: string;
  enabled: boolean;
}

export class FeatureEntity extends Entity<FeatureEntityProps> {
  private constructor(props: FeatureEntityProps) {
    super(props);
  }

  public static create(props: FeatureEntityProps): FeatureEntity {
    const feature = new FeatureEntity(props);

    return feature;
  }
}