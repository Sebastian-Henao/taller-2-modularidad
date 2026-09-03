import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSistemasDeDisenoComponent } from './list-sistemas-de-diseno.component';

describe('ListSistemasDeDisenoComponent', () => {
  let component: ListSistemasDeDisenoComponent;
  let fixture: ComponentFixture<ListSistemasDeDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSistemasDeDisenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSistemasDeDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
