import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProblemSetComponent } from './problem-set.component';

describe('ProblemSetComponent', () => {
  let component: ProblemSetComponent;
  let fixture: ComponentFixture<ProblemSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProblemSetComponent, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(ProblemSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
