import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  constructor(private http: HttpClient){}
  Tatooine: any;
  arrPersons: Array<any> = [];

  ngOnInit(){
    this.getTatooine();
    
    //this.show({nombre:'new', a:'new'});
  }

  getTatooine(){
    this.http.get('https://swapi.co/api/planets/1').subscribe(
      data => {
        this.Tatooine = data;
        this.getResidents(data['residents']);
    })
  }

  getResidents(val) {
    console.log(val);
    val.forEach((person) => {
      this.http.get(person).subscribe(
        resident => {
          console.log(resident);
           this.arrPersons.push(resident);
        }
      );
    });
  }

}
