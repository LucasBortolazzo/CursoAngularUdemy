import { Routes } from '@angular/router'
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component'
import { OrderComponent } from './order/order.component'
import { MenuComponent } from './restaurant-detail/menu/menu.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component'
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component'
import { RestaurantsComponent } from './restaurants/restaurants.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'review', component: ReviewsComponent }
        ]
    },
    { path: 'order', component: OrderComponent },
    { path: 'about', component: AboutComponent },
]