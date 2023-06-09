import axios from "axios";
// import * as storage from './storage.helper';

const nutrionApi = axios.create({
  headers: {
    'X-Api-Key': 'ydb7w9U4S22HMK3wlkcMHQ==ICDIfYDPDMF7tEVI'
  }
});



export { nutrionApi  };