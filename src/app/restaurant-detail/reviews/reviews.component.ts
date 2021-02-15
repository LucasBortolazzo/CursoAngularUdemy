import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private service: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('init do review')
    this.reviews = this.service.getReviewRestaurant(this.route.parent.snapshot.params['id']);
    console.log('fim do review')
  }

}
