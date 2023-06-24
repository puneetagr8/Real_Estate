import { Component, OnInit } from '@angular/core';
import { DetailsService} from 'src/app/services/details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private service:DetailsService) { }
  feat:any;
  det:any;

  ngOnInit(): void {
    this.feat = this.service.features;
    this.det = this.service.detail;
  }
}
