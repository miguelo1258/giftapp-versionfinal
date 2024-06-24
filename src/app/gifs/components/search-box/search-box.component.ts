import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftsService } from '../../services/gifts.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef <HTMLInputElement>;

  constructor(private gifsService:GiftsService){}

  SearchTag (){
    const newTag= this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag)
    this.tagInput.nativeElement.value= '';
  }
}
