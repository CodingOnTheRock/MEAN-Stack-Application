import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

    validateRegister(user) {
      if(user.name == undefined || 
        user.email == undefined || 
        user.username == undefined || 
        user.password == undefined){
        return false;
      }
      else{
        return true;
      }
    }

    validateEmail(email){
      // Ref: https://stackoverflow.com/questions/46155/validate-email-address-in-javascript
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
}
