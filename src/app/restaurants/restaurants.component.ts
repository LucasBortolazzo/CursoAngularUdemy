import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantService } from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Array<Restaurant> = []

  constructor(private restaurantServices: RestaurantService) { }

  ngOnInit() {
    this.restaurantServices.restaurants().subscribe(
      restaurants => this.restaurants = restaurants
    );
  }

}
