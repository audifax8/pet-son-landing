// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { isDevMode } from '@angular/core';
export const environment = {
  production: false,
  api_url: 'http://localhost:3000/api/',
  isDevMode: isDevMode(),
  crytpo_hash: 'crytpo_hash_dev',
  session: 'PetSonUser',
  captcha_key: '6LfnXbMZAAAAAC8H3gDop54mO976thXpOX4ql7o4'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
