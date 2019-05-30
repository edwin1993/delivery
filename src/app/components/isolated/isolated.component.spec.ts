import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsolatedComponent } from './isolated.component';

describe('IsolatedComponent', () => {
  let component: IsolatedComponent;
  let fixture: ComponentFixture<IsolatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsolatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsolatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
