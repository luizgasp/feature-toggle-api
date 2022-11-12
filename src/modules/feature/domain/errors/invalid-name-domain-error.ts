import { DomainError } from "../../../../core/shared/errors/domain-error";

export class InvalidNameDomainError extends DomainError {
  constructor() {
    super('Invalid name', 400);
  }
}