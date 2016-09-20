import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aah-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent implements OnInit {

  private title: string = 'Todos';


  ngOnInit() {
  }

}
