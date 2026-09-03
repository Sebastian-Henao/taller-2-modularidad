import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSistemasDeDisenoComponent } from './table-sistemas-de-diseno.component';

describe('TableSistemasDeDisenoComponent', () => {
  let component: TableSistemasDeDisenoComponent;
  let fixture: ComponentFixture<TableSistemasDeDisenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableSistemasDeDisenoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableSistemasDeDisenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
