import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducAddComponent } from './produc-add.component';

describe('ProducAddComponent', () => {
  let component: ProducAddComponent;
  let fixture: ComponentFixture<ProducAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducAddComponent]
    });
    fixture = TestBed.createComponent(ProducAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
