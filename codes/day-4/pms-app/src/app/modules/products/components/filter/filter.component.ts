import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  filterData = ''
  @Output('filterValueChanged') filterTextChanged = new EventEmitter<string>()

  fireFilterTextChanged(value: string) {
    this.filterData = value
    this.filterTextChanged.emit(this.filterData)
  }
}
