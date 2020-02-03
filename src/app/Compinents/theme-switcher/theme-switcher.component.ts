import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  // let's define default theme
  themeColor = 'light-app-theme';
  currentSetTheme = '';
  themeList = [];

  constructor() { }

  ngOnInit() {

    this.themeList.push('lime-theme');
    this.themeList.push('dark-theme');
    this.themeList.push('light-blue-theme');
    this.setDefaultTheme();
    

}

setDefaultTheme(){
    this.currentSetTheme = this.themeColor;

      // if theme is stored in storage - use it

      if(localStorage.getItem('pxTheme')){

          //set theme color to one from storage
          this.themeColor = localStorage.getItem('pxTheme');

          //add that class to body
          const body = document.getElementsByTagName('body')[0];
          body.classList.add(this.themeColor);
          
      }
}

themeSwitcher(theme){
  

      const body = document.getElementsByTagName('body')[0];
      console.log(this.currentSetTheme)
      body.classList.remove(this.currentSetTheme);
      console.log(theme)
      

      body.classList.add(theme);

      //save it to local storage

      localStorage.setItem('pxTheme',theme);
      this.currentSetTheme = theme;
}

}