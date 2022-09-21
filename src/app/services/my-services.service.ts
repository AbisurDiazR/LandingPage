import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { ABOUT_ME_COLLECTION } from '../shared/utils';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyServicesService {
  private aboutMeId = ABOUT_ME_COLLECTION;

  constructor(
    private fireStore: AngularFirestore
  ) { }

  public getMyServices(){
    return this.fireStore.collection('aboutme').doc(this.aboutMeId).get().pipe(
      map((aboutme: any) => {
        const data = aboutme.data();
       const id = aboutme.id;
        return { id, ...data };
      })
    );
  }
}
