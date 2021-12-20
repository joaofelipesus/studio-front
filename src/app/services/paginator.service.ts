import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  constructor() { }

  static call(response, factory, elements_key) : Object {
    let tableMetadata = { elements: [], totalPages: 1, currentPage: 1}
    tableMetadata.elements = response[elements_key].map(exercise => factory.build(exercise));
    tableMetadata.totalPages = Number(response['total_pages']);
    tableMetadata.currentPage = Number(response['current_page']);
    return tableMetadata;
  }
}
