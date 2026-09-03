import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModuleMarvelRivalsComponent } from './table-module-marvel-rivals.component';

describe('TableModuleMarvelRivalsComponent', () => {
  let component: TableModuleMarvelRivalsComponent;
  let fixture: ComponentFixture<TableModuleMarvelRivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableModuleMarvelRivalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableModuleMarvelRivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
