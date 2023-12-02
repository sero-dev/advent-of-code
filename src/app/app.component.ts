import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { ProblemSetComponent } from './components/problem-set/problem-set.component';
import { NotQuiteLispService } from './solutions/2015/day-01/not-quite-lisp.service';
import { NoMathAllowedService } from './solutions/2015/day-02/no-math-allowed.service';
import { PerfectlySphericalService } from './solutions/2015/day-03/perfectly-spherical.service';
import { IdealStockingService } from './solutions/2015/day-04/ideal-stocking.service';
import { TrebuchetService } from './solutions/2023/day-01/trebuchet.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf, ProblemSetComponent],
  template: `
    <main class="container mt-5">
      <button class="btn btn-primary" (click)="show2015 = !show2015">
        {{ show2015 ? 'Hide' : 'Show' }}
      </button>
      <ng-container *ngIf="show2015">
        <h1 class="mb-4">2015</h1>
        <div class="row">
          <problem-set
            class="col-4"
            title="Day 1: Not Quite Lisp"
            [service]="notQuiteLispService"
            file="assets/puzzles/2015/day-01.txt"
          />

          <problem-set
            class="col-4"
            title="Day 2: I Was Told There Would Be No Math"
            [service]="noMathAllowedService"
            file="assets/puzzles/2015/day-02.txt"
          />

          <problem-set
            class="col-4"
            title="Day 3: Perfectly Spherical Houses in a Vacuum"
            [service]="perfectlySphericalService"
            file="assets/puzzles/2015/day-03.txt"
          />

          <problem-set
            class="col-4"
            title="Day 4: The Ideal Stocking Stuffer"
            [service]="idealStockingService"
            file="assets/puzzles/2015/day-04.txt"
          />
        </div>
      </ng-container>
      <button class="btn btn-primary" (click)="show2023 = !show2023">
        {{ show2023 ? 'Hide' : 'Show' }}
      </button>
      <ng-container *ngIf="show2023">
        <h1 class="mb-4">2015</h1>
        <div class="row">
          <problem-set
            class="col-4"
            title="Day 1: Trebuchet?!"
            [service]="trebuchetService"
            file="assets/puzzles/2023/day-01.txt"
          />
        </div>
      </ng-container>
    </main>
  `,
})
export class AppComponent {
  public notQuiteLispService = inject(NotQuiteLispService);
  public noMathAllowedService = inject(NoMathAllowedService);
  public perfectlySphericalService = inject(PerfectlySphericalService);
  public idealStockingService = inject(IdealStockingService);

  public trebuchetService = inject(TrebuchetService);

  show2015: boolean = false;
  show2023: boolean = false;
}
