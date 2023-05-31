import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrgaComponent } from './edit-orga.component';

describe('EditOrgaComponent', () => {
  let component: EditOrgaComponent;
  let fixture: ComponentFixture<EditOrgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrgaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
