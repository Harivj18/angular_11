import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  ngOnInit(): void {
  }
 
  value:boolean=false;
  name:string="Angular";
  showOrHide(){
  this.value=!this.value;

  }
}