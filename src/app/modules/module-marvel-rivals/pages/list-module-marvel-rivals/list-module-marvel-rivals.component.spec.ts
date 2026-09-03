import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModuleMarvelRivalsComponent } from './list-module-marvel-rivals.component';

describe('ListModuleMarvelRivalsComponent', () => {
  let component: ListModuleMarvelRivalsComponent;
  let fixture: ComponentFixture<ListModuleMarvelRivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListModuleMarvelRivalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListModuleMarvelRivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
