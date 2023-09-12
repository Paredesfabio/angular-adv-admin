import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-promises',
    templateUrl: './promises.component.html',
    styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

        this.getUsuarios().then( users => {
            console.log(users);
        })
        // const promise = new Promise( (resolve, reject) => {
        //     if(false){
        //         resolve('hola mundo');
        //     }else{
        //         reject('Error: algo salio mal');
        //     }

        // });

        // promise.then( (data) => {
        //     console.log(data);
        // }).catch((error) => {
        //     console.log('Error en mi promesa: ', error);
        // })

        // console.log('fin del init');
    }

    getUsuarios() {
        return new Promise( resolve => {
            fetch('https://reqres.in/api/users?page=2')
            .then( resp =>  resp.json() )
            .then( body => resolve(body.data) );
        });
    }

}
