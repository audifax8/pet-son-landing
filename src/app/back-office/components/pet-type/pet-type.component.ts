import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormService, CommandService } from '../../../shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pet-type',
  templateUrl: './pet-type.component.html',
  styleUrls: ['./pet-type.component.scss']
})
export class PetTypeComponent implements OnInit {

  public petTypeForm: FormGroup;

  public petTypes$: Observable<any>;

  public items$: Observable<any>;

  public petTypeConstants = {
    NAME: 'NAME'
  };

  constructor(
    private commandS: CommandService,
    public formS: FormService,
    private afs: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.petTypeForm = this.getFormInstance();
    this.getPetTypes();
    this.items$ = this.afs.collection('petType').valueChanges();
    this.petTypes$ = this.afs.collection('petType').valueChanges();
  }

  private getFormInstance(): FormGroup {
    const petTypeForm = new FormGroup({});
    const nameFormControl = new FormControl();
    petTypeForm.addControl(this.petTypeConstants.NAME, nameFormControl);
    return petTypeForm;
  }

  private async getPetTypes() {
    // await this.afs.collection('petType').doc();

    /*await this.afs.collectionGroup('petType').get().subscribe(
      (querySnapshot) => {
        this.petTypes$ = querySnapshot;
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
        });
    });*/
  }

}
