import { HttpResponse } from "../../infra/protocols/http_response";

export interface Controller<T = any> {
  handle(request: T): Promise<HttpResponse>;
}