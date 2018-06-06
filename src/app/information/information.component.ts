import { Component, OnInit } from '@angular/core';
import {DetailspageService} from '../geet/detailspage.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  profile: any [];
  repos:any [];
  username: string;

  constructor(private detailspageServe: DetailspageService) { }

  ngOnInit() {
  }

}
