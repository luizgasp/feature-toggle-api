import { DomainError } from "../../../../core/shared/errors/domain-error";

export class FeatureNameAlreadyExistsDomainError extends DomainError {
  constructor() {
    super('This feature already exists', 400);
  }
}