import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  param: string;

  pets$: any;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore
  ) { }

  async ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // {order: "popular"}

        this.param = params.param;
        console.log(this.param); // popular
      });

      /*this.pets$ = await this.afs.collectionGroup('pets').valueChanges().subscribe(
        (data) => console.log
      );*/

      this.pets$ = await this.afs.collectionGroup('pets').get().subscribe(
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
          });
      });
      console.log(this.pets$);
  }

}
