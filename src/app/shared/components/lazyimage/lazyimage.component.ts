import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazyimage',
  templateUrl: './lazyimage.component.html',
  styleUrl: './lazyimage.component.css'
})
export class LazyimageComponent implements OnInit {
  ngOnInit(): void {
    if(!this.url)throw new Error('URL property is required.');
  }

  @Input()
  public url!:string;

  @Input()
  public alt!:string;

  public hasloaded:boolean =false;

  onLoad ():void {
    setTimeout(() => {

      this.hasloaded= true;

    }, 500);




  }

}
