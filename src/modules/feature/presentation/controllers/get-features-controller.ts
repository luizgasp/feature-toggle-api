import { HttpResponse } from '../../../../core/infra/protocols/http_response';

import { Controller } from '../../../../core/shared/contracts/controller';
import { GetFeaturesUsecase } from '../../domain/usecases/get-all-features-usecase';

export class GetFeaturesController implements Controller {
  constructor(
    private getFeaturesUsecase: GetFeaturesUsecase,
  ) { }

  async handle(request: Object): Promise<HttpResponse> {
    const response = await this.getFeaturesUsecase.execute();

    if (response.isLeft()) {
      return HttpResponse.badRequest({ error: response.value.message });
    }

    return HttpResponse.ok({ "data": response.value });
  }
}