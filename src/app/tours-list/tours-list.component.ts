import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../models/tour.model';
import { ToursServices } from '../services/tours.service';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent implements OnInit {

  myTours !: Tour[];
  myTour !: Tour
  constructor(private toursServices: ToursServices, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.myTours = this.toursServices.getAllTour();
  }

}
