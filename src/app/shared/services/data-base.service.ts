import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class DataBaseService {

  constructor(
    private afS: AngularFirestore
  ) {
  }

  public getCollection(
    collectionName: string
  ): Observable<any[]> {
    const ref = this.afS.collection(collectionName).snapshotChanges();
    return ref;
  }

  public getCollectionById(
    collectionName: string,
    id: string
  ) {
    return this.afS.collection(collectionName).doc(id).get();
  }

  public saveCollection(
    collectionName,
    data
  ) {
    return this.afS.collection(collectionName).add(data);
  }

  public deleteCollection(
    collectionName,
    collectionId
  ) {
    return this.afS.collection(collectionName).doc(collectionId).delete();
  }

}
