import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { menuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<menuItem[]>;

  constructor(private service: RestaurantService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.service.getMenuRestaurant(this.route.parent.snapshot.params['id']);
  }

  AdicionouItemMenu(itemMenu: menuItem) {
    console.log('menu compoenent recebeu evento: ' + itemMenu.name)
  }

}
