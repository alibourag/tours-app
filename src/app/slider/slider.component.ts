import { Component, Input, OnInit } from '@angular/core';
import { Tour } from '../models/tour.model';
import { ToursServices } from '../services/tours.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() tours !: Tour[];
  @Input() indecateur = true
  @Input() controls = true
  @Input() autoSlide = false
  @Input() slideDure = 4000

  selectedIndex = 0;

  constructor(private toursServices : ToursServices) { }

  ngOnInit(): void {
    this.tours = this.toursServices.getAllTour()
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }
  autoSlideImages(){
    setInterval(() =>{
      this.OnPress2();}, this.slideDure);
  }
  selectImage(index : number){
    this.selectedIndex = index;
  }
  OnPress(){
    if(this.selectedIndex ===0){
      this.selectedIndex = this.tours.length - 1;
    }else{
      this.selectedIndex--;
    }
  }
  OnPress2(){
    if(this.selectedIndex === this.tours.length - 1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }
}