import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../models/tour.model';
import { ToursServices } from '../services/tours.service';

@Component({
  selector: 'app-single-tour',
  templateUrl: './single-tour.component.html',
  styleUrls: ['./single-tour.component.scss']
})
export class SingleTourComponent implements OnInit {

  @Input() tour !: Tour;

  constructor( private toursService : ToursServices, private route : ActivatedRoute){}

  title !: string;
  description !: string;
  prix !: number;
  imageURL !: string;
  buttonText !: string;
  
  ngOnInit(){
    this.buttonText = 'mode light!';
    const tourId = +this.route.snapshot.params['id']
    this.tour = this.toursService.getTourById(tourId)
  }

  modeDarck() {
    if (this.buttonText === 'mode light!') {
      this.buttonText = 'Oops, darck!';
    } else {
      this.buttonText = 'mode light!';
    }
  }

}
