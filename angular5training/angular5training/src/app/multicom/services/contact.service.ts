import { Injectable } from '@angular/core';
import { CONTACTS } from './mock-contact';

@Injectable()
export class ContactService {
   error = false;
   getContacts() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if (this.error) {
                      reject('Sorry .. cannot fetch Contacts');
                } else {
                      resolve(CONTACTS);
                }
            }, 1000);
        });
   }
}
