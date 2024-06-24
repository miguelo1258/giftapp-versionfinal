import { Component } from '@angular/core';
import { GiftsService } from '../../../gifs/services/gifts.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsServices:GiftsService){}

  get tags(){
   return this.gifsServices.tagsHistory1;
  }






  SearchTag (tag:string):void{
    this.gifsServices.searchTag(tag);

  }

}
