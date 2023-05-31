import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPostComponent } from './perfil-post.component';

describe('PerfilPostComponent', () => {
  let component: PerfilPostComponent;
  let fixture: ComponentFixture<PerfilPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
