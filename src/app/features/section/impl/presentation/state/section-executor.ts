
import {Injectable} from "@angular/core";
import {SectionState} from "./section-state";
import {SectionAction} from "./section-action";
import {SectionResultAction, SectionResultActionTypes} from "./section-result-action";
import {SectionService} from "../../domain/section-service";
import {Executor} from "../../../../../core/mvi/store";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SectionExecutor extends Executor<SectionState, SectionAction, SectionResultAction> {

  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService
  ) {
    super();
    this.route.paramMap.subscribe((params: any) => {
      const sectionId = +params.get('id');
      const section = sectionService.getSection(sectionId)
      this.reduce({
        type: SectionResultActionTypes.UPDATE_SECTION,
        section: section
      })
    })
  }

  execute(action: SectionAction) {
    // switch (action.type) {
    //
    //
    // }
  }

}
