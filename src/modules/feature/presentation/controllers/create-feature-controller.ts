import { Controller } from '../../../../core/shared/contracts/controller';
import { HttpResponse } from "../../../../core/infra/protocols/http_response";

import { CreateFeatureUsecase } from "../../domain/usecases/create-feature-usecase";
import { CreateFeatureDTO } from "../../domain/dtos/create-feature-dto";

export class CreateFeatureController implements Controller<CreateFeatureDTO> {
  constructor(
    private createFeatureUsecase: CreateFeatureUsecase,
  ) { }

  async handle(request: CreateFeatureDTO): Promise<HttpResponse> {
    const response = await this.createFeatureUsecase.execute(request);

    if (response.isLeft()) {
      return HttpResponse.badRequest({ error: response.value.message, statusCode: response.value.statusCode });
    }

    return HttpResponse.created({ message: "Feature created successfully" });
  }
}