# Alo Yoga Product Detail Page

> Replica of Alo Yoga's product page site.

## Related Projects
  
 - https://github.com/goat-yoga/rizwan-service-actual
 - https://github.com/goat-yoga/kimberly-service
 - https://github.com/goat-yoga/wilson_service
 - https://github.com/goat-yoga/russell-service

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage

1. Navigate into each module folder
  - install dependencies of each module via `npm install`
  - seed mock data. Look at package.json to find SEED scripts.
  - run build script to bundle jsx files. Look at package.json to find BUILD scripts. Should be `npm run build` in most cases
2. Repeat Step 1 for all 4 modules.
3. Navigate back to proxy repo and start server via `npm run start`


If any front-end changes are made to a service you must re-compile that service. Run the script to compile files from the corresponding service folder.
Navigate into the proxy folder and run the command npm start.
Open up http://localhost:3000 in the browser.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

