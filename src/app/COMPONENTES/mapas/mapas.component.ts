import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/servicio.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent {
  BenavidesList: any[]=[];
  constructor(private SVC:ServicioService, private router:Router){
    this.SVC.get().subscribe((result:any)=>{
      this.BenavidesList=result
    })

  }

}
