import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPokemonComponent } from './add-edit-pokemon.component';

describe('AddEditPokemonComponent', () => {
  let component: AddEditPokemonComponent;
  let fixture: ComponentFixture<AddEditPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
