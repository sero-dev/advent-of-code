import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ProblemService } from 'src/app/solutions/problem.service';
import { FileLoaderService } from 'src/app/solutions/file-loader.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'problem-set',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  template: `
    <div
      class="mb-4"
      *ngIf="{
        solution1: solution1$ | async,
        solution2: solution2$ | async
      } as vm"
    >
      <h6>{{ title }}</h6>
      <section class="input-group mb-1">
        <span class="input-group-text">Puzzle 1</span>
        <input
          class="form-control"
          type="text"
          readonly
          [value]="vm.solution1"
        />
      </section>
      <section class="input-group">
        <span class="input-group-text">Puzzle 2</span>
        <input
          class="form-control"
          type="text"
          readonly
          [value]="vm.solution2"
        />
      </section>
    </div>
  `,
})
export class ProblemSetComponent implements OnChanges {
  private fileLoader = inject(FileLoaderService);

  @Input({ required: true }) title!: string;
  @Input({ required: true }) service!: ProblemService;
  @Input({ required: true }) file!: string;

  solution1$?: Observable<any>;
  solution2$?: Observable<any>;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['file']) {
      const input$ = this.fileLoader.getInput(changes['file'].currentValue);
      this.solution1$ = input$.pipe(
        map((input) => this.service.puzzle1(input))
      );
      this.solution2$ = input$.pipe(
        map((input) => this.service.puzzle2(input))
      );
    }
  }
}
