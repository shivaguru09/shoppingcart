// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API_ENDPOINT: 'http://127.0.0.1:3000',
  API_ENDPOINT_AUTHV2: 'http://127.0.0.1:3000',
  baseUrl: 'http://localhost:4200/',
  mockAuthHeaders: {
    'tenant-id': 'HZ0001',
    'username': 'M1001@HZ0001.com',
    'for-username': 'M1001',
    'authorities': 'PROVIDER',
    'Content-Type':'application/json'
  }



};

