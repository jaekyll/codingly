import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.html',
  encapsulation : ViewEncapsulation.None
})
export class LoadingIndicatorComponent implements OnInit {
  @Input() name: ICustomerName;
  
  // Which life cycle hook will you use to find change in the value of customer's first name
  constructor() { }

  ngOnChanges(){
    
  }

  ngOnInit() {
  }

}

