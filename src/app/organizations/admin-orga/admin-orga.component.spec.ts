import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrgaComponent } from './admin-orga.component';

describe('AdminOrgaComponent', () => {
  let component: AdminOrgaComponent;
  let fixture: ComponentFixture<AdminOrgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminOrgaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
