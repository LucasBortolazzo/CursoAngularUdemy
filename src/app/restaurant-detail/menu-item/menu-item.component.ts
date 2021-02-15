import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { menuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: menuItem;
  @Output() EventoAdicionarItem = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  onAdicionarItem() {
    console.log('Emitiu Evento - inicio')
    console.log(this.menuItem);
    this.EventoAdicionarItem.emit(this.menuItem);
    console.log('Emitiu Evento - Fim')
  }

}
