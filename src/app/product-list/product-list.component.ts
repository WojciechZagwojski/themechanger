import { Component, Input, HostBinding } from '@angular/core';

import { themes } from '../themes';
import { AppComponent } from '../app.component'
import { OverlayContainer} from '@angular/cdk/overlay';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(public overlayContainer: OverlayContainer) {}

  @HostBinding('class') componentCssClass;
  

  onSetTheme(theme) {
    document.getElementById('themeTag').classList.remove("light-theme", "dark-theme", "default-theme");
    document.getElementById('themeTag').classList.add(theme);
    console.log(document.getElementById('themeTag').classList)
    
    
  }


}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/