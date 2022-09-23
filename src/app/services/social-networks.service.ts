import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { ABOUT_ME_COLLECTION } from '../shared/utils';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworksService {
  private aboutMeCollection = ABOUT_ME_COLLECTION;

  constructor(
    private fireStore: AngularFirestore
  ) { }

  public getSocialNetwors(){
    return this.fireStore.collection('aboutme').doc(this.aboutMeCollection).get().pipe(
      map((aboutme: any) => {
        const data = aboutme.data();
        const id = aboutme.id;
        return { id, ...data };
      })
    );
  }
}
