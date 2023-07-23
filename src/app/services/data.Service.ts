// local-storage.service.ts

import { Injectable } from '@angular/core';

interface LocalStorageChangeEventDetail {
  key: string;
  value: any;
}

@Injectable({
  providedIn: 'root'
})
export class dataService {

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
    // Emitir um evento personalizado para notificar que houve uma alteração
    const event = new CustomEvent<LocalStorageChangeEventDetail>('localStorageChanged', { detail: { key, value } });
    window.dispatchEvent(event);
  }

  getItem(key: string): any {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
}
