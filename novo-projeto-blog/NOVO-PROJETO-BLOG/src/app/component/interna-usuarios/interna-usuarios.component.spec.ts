import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternaUsuariosComponent } from './interna-usuarios.component';

describe('InternaUsuariosComponent', () => {
  let component: InternaUsuariosComponent;
  let fixture: ComponentFixture<InternaUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternaUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
