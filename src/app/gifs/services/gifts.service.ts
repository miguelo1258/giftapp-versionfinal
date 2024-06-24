import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Git, SearchResponse } from '../interfaces/git.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private tagsHistory:string[]=[];

  public gifList: Git[]=[];

  private apikey:string='WQ5fuiJphSBamdcDRgYhoVzCPHRBAohZ'

  private servicUrl:string ='https://api.giphy.com/v1/gifs'

  constructor(private http:HttpClient){
    this.loadLocalStorage();
    console.log('Gifs service ready')

  }



  get tagsHistory1(){
    return [...this.tagsHistory];
  }

  private organizeHistory(tag:string){
    tag= tag.toLocaleLowerCase();
    if (this.tagsHistory1.includes(tag)){
      this.tagsHistory= this.tagsHistory1.filter((oldtag) =>oldtag != tag)
    }
    this.tagsHistory1.unshift(tag);
    this.tagsHistory= this.tagsHistory.splice(0,10);
    this.saveLocalStorage();
  }

  private saveLocalStorage():void{

    localStorage.setItem('history',JSON.stringify(this.tagsHistory));

  }

  private loadLocalStorage():void{

    if (!localStorage.getItem('history')) return;
    this.tagsHistory=JSON.parse(localStorage.getItem('history')!);

    if (this.tagsHistory.length ===0)return;

    this.searchTag(this.tagsHistory[0]);

  }
  searchTag(tag: string):void{

    if (tag.length ===0 ) return;
    this.organizeHistory(tag);

    this.tagsHistory.unshift(tag)

    const params = new HttpParams()
    .set('api_key',this.apikey)
    .set('limit',10)
    .set('q',tag)

    this.http.get<SearchResponse>(`${this.servicUrl}/search`,{params:params})
    .subscribe(Resp =>{
      this.gifList= Resp.data
      console.log({gifs: this.gifList})
    });


    //fetch('api.giphy.com/v1/gifs/search?api_key=WQ5fuiJphSBamdcDRgYhoVzCPHRBAohZ&q=valorant&limit=10')
  }



}
