// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  assets: {
    images: '/src/assets/images'
  },
  urls: {
    ftepUrl: 'https://forestry-tep.eo.esa.int',
    ssoUrl: 'https://eo-sso-idp.evo-pdgs.com'
  },
  apiServer: {
    apiUrl: 'http://158.234.89.204:8080/secure/api/v2.0'
  },
  tokens: {
    mapboxToken: 'pk.eyJ1IjoidmFuemV0dGVucCIsImEiOiJjaXZiZTM3Y2owMDdqMnVwa2E1N2VsNGJnIn0.A9BNRSTYajN0fFaVdJIpzQ'
  },
  production: false
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
