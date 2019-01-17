// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { keychain } from "src/api-keys";

export const environment = {
  production: false,
  firebase: {
    apiKey: keychain.firebase,
    authDomain: 'lpatapp-rc4.firebaseapp.com',
    databaseURL: 'https://lpatapp-rc4.firebaseio.com',
    projectId: 'lpatapp-rc4',
    storageBucket: 'lpatapp-rc4.appspot.com',
    messagingSenderId: '209180008028'
  }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
