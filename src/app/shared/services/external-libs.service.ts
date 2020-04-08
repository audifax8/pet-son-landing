import { Injectable, isDevMode } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ExternalLibsService {

  public isDevMode = isDevMode();

  constructor() {
  }

  public generateGuiId() : string {
    return uuidv4();
  }
}
