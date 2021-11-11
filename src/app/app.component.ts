import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'football';


  teams: string[] = [
    'Manchester',
    'Arsenal',
    'Chelsea',
  ];

constructor(){

}

  // public newPlayer: Players[] = [
  //   {name: "Alhaji", nationality: "Sierra Leone", age: 19, position: 7, team: "Arsenal"},
  //   {name: "Momoh", nationality: "Liberia", age: 28, position: 6, team: "Chelsea"},
  //   {name: "Kabba", nationality: "Ghana", age: 19, position: 10, team: "Manchester"},
  //
  // ];



}


