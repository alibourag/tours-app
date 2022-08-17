import { Component, OnInit, Input} from '@angular/core';
import {Tour} from '../models/tour.model'

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {

  @Input() tour !: Tour;

  buttonText !: string;
  
  ngOnInit(){
    this.buttonText = 'mode light!';
  }

  modeDarck() {
    if (this.buttonText === 'mode light!') {
      this.buttonText = 'Oops, darck!';
    } else {
      this.buttonText = 'mode light!';
    }
  }
}
