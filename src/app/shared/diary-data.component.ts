import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DiaryEntry } from './diary-entry.model';

@Injectable({ providedIn: 'root' })
export class DiaryDataService {
  diarySubject = new Subject<DiaryEntry[]>();
  diaryEntries: DiaryEntry[] = [
    new DiaryEntry('March 6th 2023', 'entry1'),
    new DiaryEntry('March 5th 2023', 'entry2'),
    new DiaryEntry('March 7th 2023', 'entry3'),
  ];

  onDelete(index: number) {
    this.diaryEntries.splice(index, 1);
    this.diarySubject.next(this.diaryEntries);
  }

  onAddDiaryEntry(diaryEntry: DiaryEntry) {
    this.diaryEntries.push(diaryEntry);
    this.diarySubject.next(this.diaryEntries);
  }

  getDiaryEntry(index: number) {
    return {
      ...this.diaryEntries[index],
    };
  }

  onUpdateEntry(paramId: number, newEntry: DiaryEntry) {
    this.diaryEntries[paramId] = newEntry;
    this.diarySubject.next(this.diaryEntries);
  }
}
