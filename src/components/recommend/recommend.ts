import { CommonModule } from '@angular/common';
import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-recommend',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './recommend.html',
  styleUrl: './recommend.css'
})
export class Recommend {
  
@Input() recMovie: any[] = [];

}
