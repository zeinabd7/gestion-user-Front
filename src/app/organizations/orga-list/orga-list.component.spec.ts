import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgaListComponent } from './orga-list.component';

describe('OrgaListComponent', () => {
  let component: OrgaListComponent;
  let fixture: ComponentFixture<OrgaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
