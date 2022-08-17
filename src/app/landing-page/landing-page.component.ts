import { Component, OnInit } from '@angular/core';
import { ToursServices } from '../services/tours.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {



  selectedIndex = 0;

  constructor(private toursServices : ToursServices) { }

  ngOnInit(): void {
  }
}
