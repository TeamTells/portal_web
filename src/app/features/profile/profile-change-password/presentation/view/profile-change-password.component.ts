import { Component } from '@angular/core';
import { Store } from 'src/app/core/mvi/store';
import { ChangePasswordState } from '../state/profile-change-password-state';
import { ChangePasswordExecutor } from '../state/profile-change-password-executor';
import { ChangePasswordAction, ChangePasswordActionType } from '../state/profile-change-password-action';
import { ChangePasswordResultAction } from '../state/profile-change-password-result-action';
import { ChangePasswordReducer } from '../state/profile-change-password-reducer';

@Component({
  selector: 'app-profile-change-password',
  templateUrl: './profile-change-password.component.html',
})
export class ProfileChangePasswordComponent extends Store<
  ChangePasswordState, 
  ChangePasswordExecutor, 
  ChangePasswordAction, 
ChangePasswordResultAction>  {
  constructor(state: ChangePasswordState, executor: ChangePasswordExecutor, reducer: ChangePasswordReducer){
    super(state,executor, reducer)
  }
  
  public buttonClick(event: any): void{
    this.performAction(
      {
        type: ChangePasswordActionType.SEND_ON_VERIFICATION,
      }
    )
    console.log(this.state)
  }

  testOnChange(s: string){
    console.log("ver pass",s);
    this.performAction(
      {
          type: ChangePasswordActionType.SET_VERIFICATION_PASSWORD,
          password: s,
      }
    );
  } 

  actualPassT(s: string){
    console.log("act pass",s);
    console.log(this.state);
    this.performAction(
      {
          type: ChangePasswordActionType.SET_ACTUAL_PASSWORD,
          password: s,
      }
  );
  }

  newPassT(s:string){
    console.log("new pass",s);
    this.performAction(
      {
          type: ChangePasswordActionType.SET_NEW_PASSWORD,
          password: s,
      }
    );
    console.log(this.state);
  }

 protected readonly ChangePasswordActionType = ChangePasswordActionType;
}
