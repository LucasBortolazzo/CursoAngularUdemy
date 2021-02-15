import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { MEAT_API } from "app/api.api";
import { Observable } from "rxjs/Observable";
import { Restaurant } from "./restaurant/restaurant.model";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "app/app.error-handler";
import { menuItem } from "app/restaurant-detail/menu-item/menu-item.model";

@Injectable()
export class RestaurantService {
    constructor(private http: Http) { }


    restaurants(): Observable<Restaurant[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    getRestaurantById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    getReviewRestaurant(id: string): Observable<any> {
        console.log(`${MEAT_API}/restaurants/${id}/reviews`);
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }

    getMenuRestaurant(id: string): Observable<menuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(response => response.json())
            .catch(ErrorHandler.handleError)
    }
}