import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../../service/apiservice.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.scss'
})
export class NoticiasComponent implements OnInit {
result: any;


  constructor(private service : ApiserviceService ){
  }

  ngOnInit():void{
    this.getValues();

  }
  
  

  dbNot:any=[];
  
  getValues(){

    this.service.getGoogleSheetValue().subscribe((result)=> {
      console.log(result);
      this.dbNot = result.data;
      console.log(this.dbNot);
      


    })
  }

}
