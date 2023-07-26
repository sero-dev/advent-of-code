import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProblemSetComponent } from "./components/problem-set/problem-set.component";
import { NotQuiteLispService } from './solutions/2015/day-01/not-quite-lisp.service';
import { NoMathAllowedService } from './solutions/2015/day-02/no-math-allowed.service';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <main class="container mt-5">
      <h1>2015</h1>
      <div class="row">
        <problem-set
          class="col-4"
          title="Day 1: Not Quite Lisp" 
          [service]="notQuiteLispService" 
          file="assets/puzzles/2015/day-01.txt">
        </problem-set>

        <problem-set
          class="col-4"
          title="Day 2: I Was Told There Would Be No Math" 
          [service]="noMathAllowedService" 
          file="assets/puzzles/2015/day-02.txt">
        </problem-set>
      </div>
    </main>
    
  `,
    imports: [CommonModule, RouterOutlet, ProblemSetComponent]
})
export class AppComponent {
  constructor(
    public notQuiteLispService: NotQuiteLispService,
    public noMathAllowedService: NoMathAllowedService
  ) {}
}
