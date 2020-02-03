import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConfigureThemeComponent } from './configure-theme/configure-theme.component';
import { CreateThemeComponent } from './create-theme/create-theme.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material';
import { MatInputModule} from '@angular/material';
import { MatToolbarModule} from '@angular/material';


import { OverlayModule} from '@angular/cdk/overlay';
import { ThemeSwitcherComponent } from './Compinents/theme-switcher/theme-switcher.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'themelist', component: ThemeSwitcherComponent },
      { path: 'configuratetheme', component: ConfigureThemeComponent },
      { path: 'newtheme', component: CreateThemeComponent },
    ]),
    NoopAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    OverlayModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ConfigureThemeComponent,
    CreateThemeComponent,
    ThemeSwitcherComponent
  ],
  providers: [ThemeSwitcherComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/