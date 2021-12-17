import { Injectable } from '@angular/core';
import { TableMetadata } from '../OLD_components/table/table_metadata';

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  constructor() { }

  static call(response, factory, elements_key) : TableMetadata {
    let tableMetadata = new TableMetadata();
    tableMetadata.elements = response[elements_key].map(exercise => factory.build(exercise));
    tableMetadata.totalPages = Number(response['total_pages']);
    tableMetadata.currentPage = Number(response['current_page']);
    return tableMetadata;
  }
}
