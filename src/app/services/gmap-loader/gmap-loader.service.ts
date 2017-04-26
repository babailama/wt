import { Injectable } from '@angular/core';

import {DocumentRef, WindowRef} from './browser-globals';
@Injectable()
export class GmapLoaderService {
  private _scriptLoadingPromise: Promise<void>;
  // private _config: LazyMapsAPILoaderConfigLiteral;
  private _windowRef: WindowRef;
  private _documentRef: DocumentRef;
  constructor(w: WindowRef, d: DocumentRef) { 
    this._windowRef = w;
    this._documentRef = d;
  }
  load(): Promise<void> {
    if (this._scriptLoadingPromise) {
      return this._scriptLoadingPromise;
    }

    const script = this._documentRef.getNativeDocument().createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    const callbackName = `angular2GoogleMapAPILoader`;
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyByUr5ECQty0nZcvA6xhSBM1Q0kyBt0cUQ&callback=angular2GoogleMapAPILoader';

    this._scriptLoadingPromise = new Promise<void>((resolve: Function, reject: Function) => {
      (<any>this._windowRef.getNativeWindow())[callbackName] = () => { resolve(); };

      script.onerror = (error: Event) => { reject(error); };
    });

    this._documentRef.getNativeDocument().body.appendChild(script);
    return this._scriptLoadingPromise;
  }
}
