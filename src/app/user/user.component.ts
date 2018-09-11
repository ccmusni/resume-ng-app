import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
    //Properties
    user: User

    //Methods
    constructor() {
        this.user = {
            firstName: 'Clifford',
            lastName: 'Musni',
            age: 19,
            address: {
                street: 'Trees',
                city: 'Quezon City'
            }
        }
    }

}