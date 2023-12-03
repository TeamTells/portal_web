import {Component} from '@angular/core';
import {Store} from "../../../../../core/mvi/store";
import {SectionState} from "../state/section-state";
import {SectionExecutor} from "../state/section-executor";
import {SectionAction, SectionActionTypes} from "../state/section-action";
import {SectionResultAction} from "../state/section-result-action";
import {SectionReducer} from "../state/section-reducer";
import {DepartmentEntity} from "../../../../employees/components/department/department.component";


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent extends Store<SectionState, SectionExecutor, SectionAction, SectionResultAction> {

  constructor(
    state: SectionState,
    executor: SectionExecutor,
    reducer: SectionReducer
  ) {
    super(state, executor, reducer);
  }

  protected readonly document = document;
  protected readonly SectionActionTypes = SectionActionTypes;
}
