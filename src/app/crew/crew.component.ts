import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crewArray: string[] = ["Jessica Watkins", "Raja Chari", "Jasmin Moghbeli", "Titi"];
  constructor() { }

  ngOnInit(): void {
  }

}
