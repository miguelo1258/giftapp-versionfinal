import { Component } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';
import { Git } from '../../interfaces/git.interfaces';

@Component({
  selector: 'gits-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private gifsService:GiftsService){ }

  get gifs():Git[]{
    return this.gifsService.gifList
  }

}
