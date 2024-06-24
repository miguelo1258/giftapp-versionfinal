import { Component, Input, OnInit } from '@angular/core';
import { Git } from '../../interfaces/git.interfaces';

@Component({
  selector: 'gifts-card',
  templateUrl: './gifts-card.component.html',
  styleUrl: './gifts-card.component.css'
})
export class GiftsCardComponent implements OnInit {
  ngOnInit(): void {
    if(!this.gif) throw new Error('Git property is requiered');
  }

  @Input()
  public gif!:Git;



}
