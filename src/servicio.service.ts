import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const URL='assets/DatosDE/Benavides.json';
@Injectable({
    providedIn: 'root'
})
export class ServicioService{
    URL="assets/DatosDE/Benavides.json";

    constructor(private http:HttpClient){

    }
    get(){
        return this.http.get(URL);
    }
}