import { DomainError } from "../../../../core/shared/errors/domain-error";

export class FeatureNotExistsDomainError extends DomainError {
  constructor() {
    super("Feature doesn't exists", 400);
  }
}