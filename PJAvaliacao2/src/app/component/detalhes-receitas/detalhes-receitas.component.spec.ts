import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesReceitasComponent } from './detalhes-receitas.component';

describe('DetalhesReceitasComponent', () => {
  let component: DetalhesReceitasComponent;
  let fixture: ComponentFixture<DetalhesReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhesReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
