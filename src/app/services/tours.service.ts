import { Injectable } from "@angular/core";
import { Tour } from "../models/tour.model";

@Injectable({
    providedIn:'root'
})
export class ToursServices{
    myTours:Tour[] = [{id : 1, title:'desert', description:'comportement est appelée autcomportement est appelée autcomportement est appelée autcomportement est appelée autcomportement est appelée automatiquement par Angular au moment de la création de chaque instance du component.',
        prix:6000, imageURL:'https://www.riya.travel/images/travel-img02.png'
      },
      {id !: 2, title:'encienne medina', description:'comportement est appelée automatiquement par Angular au moment de la création',
      prix:1000,imageURL:'http://www.mapexpress.ma/wp-content/uploads/2016/12/Medina-Casablanca-1.jpg'},
      {id !: 3, title:'montagnes du maroc',description:'comportement est appelée automatiquement par Angular au moment de la création',
        prix:7000, 
        imageURL:'https://media.istockphoto.com/photos/views-of-the-high-atlas-mountains-from-skoura-morocco-picture-id1280956210?k=20&m=1280956210&s=612x612&w=0&h=gPSXbywht9I7_gnduE8azOjdHJA2MtWZIcmpu6kfHgw='
      },
      { id !: 4, title:'desert', description:'comportement est appelée automatiquement par Angular au moment de la création de chaque instance du component.',
      prix:6000, imageURL:'https://www.riya.travel/images/travel-img02.png'
      },
      {id !: 2, title:'encienne medina', description:'comportement est appelée automatiquement par Angular au moment de la création',
      prix:1000,imageURL:'http://www.mapexpress.ma/wp-content/uploads/2016/12/Medina-Casablanca-1.jpg'},
      {id !: 3, title:'montagnes du maroc',description:'comportement est appelée automatiquement par Angular au moment de la création',
        prix:7000, 
        imageURL:'https://media.istockphoto.com/photos/views-of-the-high-atlas-mountains-from-skoura-morocco-picture-id1280956210?k=20&m=1280956210&s=612x612&w=0&h=gPSXbywht9I7_gnduE8azOjdHJA2MtWZIcmpu6kfHgw='
      },
      { id !: 4, title:'desert', description:'comportement est appelée automatiquement par Angular au moment de la création de chaque instance du component.',
      prix:6000, imageURL:'https://www.riya.travel/images/travel-img02.png'
      }
    ];
  getAllTour(): Tour[]{
      return this.myTours;
  }
  getTourById(tourId : number): Tour{
    const myTour = this.myTours.find(myTour => myTour.id === tourId)
    if( !myTour){
      throw new Error('Tour not found!!')
    }
    else
      return myTour
  }


}