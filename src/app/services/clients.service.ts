import { ABOUT_ME_COLLECTION } from './../shared/utils';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private aboutMeId = ABOUT_ME_COLLECTION;

  constructor(
    private fireStore: AngularFirestore
  ) { }

  public getClients(){
    return this.fireStore.collection('aboutme').doc(this.aboutMeId).get().pipe(
      map((aboutme: any) => {
        const data = aboutme.data();
       const id = aboutme.id;
        return { id, ...data };
      })
    );
  }
}
