import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

/** Nombre de la colección en Firestore donde se registran las visitas a la landing */
export const VISITS_COLLECTION = 'visits';

@Injectable({ providedIn: 'root' })
export class VisitService {
  constructor(private firestore: AngularFirestore) {}

  /**
   * Registra una visita a la landing en la colección Firestore `visits`.
   * Campos: timestamp, path, userAgent (truncado).
   */
  registerVisit(): void {
    const path = typeof window !== 'undefined' ? (window.location.pathname || '/') : '/';
    const userAgent = typeof navigator !== 'undefined' ? (navigator.userAgent || '').substring(0, 300) : '';
    this.firestore.collection(VISITS_COLLECTION).add({
      timestamp: new Date(),
      path,
      userAgent,
    }).catch(() => {});
  }
}
