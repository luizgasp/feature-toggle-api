import { Entity } from "src/core/shared/contracts/entity";

export type FeatureEntityProps = {
  name: string;
  enabled: boolean;
  created_at: Date;
  updated_at: Date;
}

export class FeatureEntity extends Entity<FeatureEntityProps> {
  private constructor(props: FeatureEntityProps, id?: string) {
    super(props, id);
  }

  public static create(props: FeatureEntityProps, id?: string): FeatureEntity {
    const feature = new FeatureEntity(props, id);

    return feature;
  }
}