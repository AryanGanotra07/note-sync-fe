import { Injectable } from "@angular/core";

import * as Y from 'yjs';
import { YjsService } from "./yjs.service";
import { Note } from "../models/note";
import { Router } from "@angular/router";
import { Subject } from "rxjs";


@Injectable()
export class NoteService {

    public notesMap: Y.Map<Note>;


    private noteUpdatedEmitter$ = new Subject<void>();
    public noteUpdatedListener$ = this.noteUpdatedEmitter$.asObservable();

    private noteAddedEmitter$ = new Subject<Note>();
    public noteAddedListener$ = this.noteAddedEmitter$.asObservable();

    constructor(private yjsService: YjsService) {
        const doc = this.yjsService.getDocument();
        this.notesMap = doc.getMap('notes');
    
        this.notesMap.observe(() => {
            this.noteUpdatedEmitter$.next();
        });
    }

    public getNotes(): Note[] {
        return Array.from(this.notesMap.values())
        .sort((a, b) => new Date(b.modifiedDate).getTime() - new Date(a.modifiedDate).getTime());
    }

    public getNoteById(id: string): Note {
        return this.notesMap.get(id);
    }

    public addNote(note: Note) {
        this.notesMap.set(note.id.toString(), note);
        this.noteAddedEmitter$.next(note);
    }

    public updateNote(note: Note) {
        note.modifiedDate = new Date().toISOString();
        this.notesMap.set(note.id.toString(), note);
    }

    public deleteNote(id: number) {
        this.notesMap.delete(id.toString());
    }

    public createNewNote() {
        const note: Note = {
            id: this.generateId(),
            title: '', 
            content: '', 
            createdDate: new Date().toISOString(), 
            modifiedDate: new Date().toISOString()
        }
        this.addNote(note);
    }

    private generateId(): number {
        return Math.floor(Math.random() * 10000) + 1
    }

    

}