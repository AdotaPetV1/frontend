import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
   }

   set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value));
  }
  
  get(key: string): any {

      let value = this.storage.getItem(key);

      if(value)
        return JSON.parse(value);
      else
        return null;
        
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
