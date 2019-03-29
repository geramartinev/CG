import { Component, OnInit } from '@angular/core';
import { DefaultValuesService } from '../_services/default-values.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  defaultValues: Array<string>;

  constructor(private defaultService: DefaultValuesService) { }

  ngOnInit() {
    this.defaultService.getValues().subscribe(v => {
      this.defaultService.getValues().subscribe(values => {
        this.defaultValues = values;
      });
    });
    console.log('observable passed');
  }

}
