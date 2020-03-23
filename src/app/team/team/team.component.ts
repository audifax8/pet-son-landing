import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  public members: TeamMember[];

  constructor() { }

  ngOnInit(): void {
    this.members = [
      {
        id: '1',
        name: 'audi',
        picture: '',
        role: 'CEO',
        facebook: 'string',
        linkedin: 'string',
        whatsapp: 'string',
        instagram: 'string',
        description: 'string'
      }
    ];
  }

}
