import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { RestaurantService } from 'app/restaurants/restaurants.service';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restauranteService: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restauranteService.getRestaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);

    console.log('restaurente atual: ' + this.restaurant);
  }

}
