import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

/** Colección en Firestore donde se registran las visitas (page views) para medir el alcance del portfolio */
export const PAGE_VIEWS_COLLECTION = 'pageViews';

@Injectable({ providedIn: 'root' })
export class VisitService {
  constructor(private firestore: AngularFirestore) {}

  /**
   * Registra una visita (page view) en la colección Firestore `pageViews`.
   * Permite medir el alcance del portfolio con timestamp, ruta, origen y userAgent.
   */
  registerVisit(): void {
    if (typeof window === 'undefined') return;

    const path = window.location.pathname || '/';
    const url = window.location.href || '';
    const referrer = (typeof document !== 'undefined' && document.referrer) ? document.referrer.substring(0, 500) : '';
    const userAgent = (typeof navigator !== 'undefined' && navigator.userAgent) ? navigator.userAgent.substring(0, 300) : '';

    this.firestore.collection(PAGE_VIEWS_COLLECTION).add({
      timestamp: new Date(),
      path,
      url,
      referrer: referrer || null,
      userAgent,
    }).catch(() => {});
  }
}
