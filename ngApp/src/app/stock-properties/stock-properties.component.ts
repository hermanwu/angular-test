import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-properties',
  templateUrl: './stock-properties.component.html',
  styleUrls: ['./stock-properties.component.scss']
})
export class StockPropertiesComponent implements OnInit {
  stock: any;

  constructor(private _route: ActivatedRoute) {
    this.stock = this._route.snapshot.data['stock'];
  }

  ngOnInit() {}
}
