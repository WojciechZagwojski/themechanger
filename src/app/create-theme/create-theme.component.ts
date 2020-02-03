import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.css']
})
export class CreateThemeComponent implements OnInit {
  isToggled: boolean;

toggleState() {
  this.isToggled = !this.isToggled;
}

  constructor() { }

  ngOnInit() {
  }

  saveTheme() {
  const div = document.querySelector('div');
    
  }

}
