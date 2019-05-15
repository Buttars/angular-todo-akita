import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { untilDestroyed } from 'ngx-take-until-destroy';

import { VISIBILITY_FILTER, TodoFilter } from './filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() active: VISIBILITY_FILTER;
  @Input() filters: TodoFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();

  control: FormControl;

  constructor() { }

  ngOnInit() {
    this.control = new FormControl(this.active);

    this.control.valueChanges
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(c => {
        this.update.emit(c);
      });
  }

  ngOnDestroy() { }

}
