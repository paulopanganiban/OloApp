import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantSearchGithubComponent } from './instant-search-github.component';

describe('InstantSearchGithubComponent', () => {
  let component: InstantSearchGithubComponent;
  let fixture: ComponentFixture<InstantSearchGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantSearchGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantSearchGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
