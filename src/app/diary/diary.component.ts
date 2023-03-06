import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DiaryDataService } from '../shared/diary-data.component';
import { DiaryEntry } from '../shared/diary-entry.model';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css'],
})
export class DiaryComponent implements OnInit, OnDestroy {
  diaryEntries: DiaryEntry[];
  diarySubscription = new Subscription();

  constructor(private diaryDataService: DiaryDataService, private router: Router) {}
  ngOnInit(): void {
    this.diarySubscription = this.diaryDataService.diarySubject.subscribe(
      (diaryEntries) => {
        this.diaryEntries = diaryEntries;
      }
    );
    this.diaryEntries = this.diaryDataService.diaryEntries;
  }
  ngOnDestroy(): void {
    this.diarySubscription.unsubscribe();
  }

  onDelete(index: number) {
    this.diaryDataService.onDelete(index);
  }

  onEdit(index:number){
    this.router.navigate(["edit",index]);

  }

 
}
