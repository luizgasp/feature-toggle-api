import { HttpResponse } from "../../../../core/infra/protocols/http_response";
import { Controller } from "../../../../core/shared/contracts/controller";
import { UpdateFeatureDTO } from "../../domain/dtos/update-feature-dto";
import { UpdateFeatureUsecase } from "../../domain/usecases/update-feature-usecase";

export class UpdateFeatureController implements Controller<UpdateFeatureDTO> {
  constructor(
    private updateFeatureUsecase: UpdateFeatureUsecase,
  ) { }

  async handle(request: UpdateFeatureDTO): Promise<HttpResponse> {
    const response = await this.updateFeatureUsecase.execute(request);

    if (response.isLeft()) {
      return HttpResponse.badRequest({ errorMessage: response.value.message });
    }

    return HttpResponse.ok({ message: "Feature updated successfully" });
  }
}