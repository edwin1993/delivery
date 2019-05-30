import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuaccesosComponent } from './menuaccesos.component';

describe('MenuaccesosComponent', () => {
  let component: MenuaccesosComponent;
  let fixture: ComponentFixture<MenuaccesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuaccesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuaccesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
