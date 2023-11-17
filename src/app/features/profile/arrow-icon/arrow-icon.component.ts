import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-icon',
  templateUrl: './arrow-icon.component.html',
})
export class ArrowIconComponent {
  @Input() 
  public pictureColor: string = "#000";
  @Input() 
  public backgroundColor: string = "none";
  @Input() 
  public class: string |  string[] = [];
}
