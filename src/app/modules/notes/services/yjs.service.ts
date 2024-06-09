// src/app/services/yjs.service.ts
import { Injectable } from '@angular/core';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import { environment } from 'environment';

@Injectable({
  providedIn: 'root'
})
export class YjsService {
  private doc: Y.Doc;
  private wsProvider: WebsocketProvider;


  constructor() {
    this.doc = new Y.Doc();
    this.wsProvider = new WebsocketProvider(environment.websocketUrl, 'notes-app', this.doc);
  }

  getDocument() {
    return this.doc;
  }

}