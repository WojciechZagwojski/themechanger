import {Component, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OverlayContainer} from '@angular/cdk/overlay';
import {ThemeSwitcherComponent} from './Compinents/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

constructor(
    public themeSwitch: ThemeSwitcherComponent
 ){}

// call theme switch on init
ngOnInit(){
  this.themeSwitch.setDefaultTheme();
}
} 




