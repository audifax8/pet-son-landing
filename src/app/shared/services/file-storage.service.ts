import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable()
export class FileStorageService {

  constructor(
    private storageS: AngularFireStorage
  ) {
  }

  public saveFile(
    filePath: string,
    fileName: string,
    file: File
    ): AngularFireUploadTask{
      const fullPath = `${filePath + fileName}`;
      const ref = this.storageS.ref(fullPath);
      return ref.put(file);
  }

  public deleteFile(
    filePath: string,
    fileName: string
  ): Observable<any> {
    const fullPath = `${filePath + fileName}`;
    const ref = this.storageS.ref(fullPath);
    return ref.delete();
  }

  public getFile(
    path: string,
    imgName: string
  ) {
    const fullPath = `${path+imgName}`
    return this.storageS.storage.ref(fullPath).getDownloadURL()
  }

}
