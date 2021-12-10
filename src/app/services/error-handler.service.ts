import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  static call(status: number, modelName?: string) {
    if (modelName && (status == 404))
      return `${modelName} não encontrado.`;

    return "Houve um erro inesperado, tente novamente mais tarde.";
  }
}
