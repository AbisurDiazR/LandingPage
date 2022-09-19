import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { ABOUT_ME_COLLECTION } from '../shared/utils';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private aboutMeCollection = ABOUT_ME_COLLECTION;

  constructor(
    private fireStore: AngularFirestore
  ) { }

  public getSkills(){
    return this.fireStore.collection('aboutme').doc(this.aboutMeCollection).get().pipe(
      map((aboutme: any) => {
        const data = aboutme.data();
        const id = aboutme.id;
        return { id, ...data };
      })
    );
  }
}
