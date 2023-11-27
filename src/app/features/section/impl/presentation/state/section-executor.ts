
import {Injectable} from "@angular/core";
import {SectionState} from "./section-state";
import {SectionAction} from "./section-action";
import {SectionResultAction} from "./section-result-action";
import {SectionService} from "../../domain/section-service";
import {Executor} from "../../../../../core/mvi/store";

@Injectable({
  providedIn: 'root'
})
export class SectionExecutor extends Executor<SectionState, SectionAction, SectionResultAction> {

  constructor(
    private sectionService: SectionService
  ) {
    super();
  }

  execute(action: SectionAction) {
    // switch (action.type) {
    //
    //
    // }
  }

}
