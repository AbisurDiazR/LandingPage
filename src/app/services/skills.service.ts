import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(
    private fireStore: AngularFirestore
  ) { }

  public getSkills(){
    return this.fireStore.collection('skills').get();
  }
}
