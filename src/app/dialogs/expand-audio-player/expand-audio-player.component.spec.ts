import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandAudioPlayerComponent } from './expand-audio-player.component';

describe('ExpandAudioPlayerComponent', () => {
  let component: ExpandAudioPlayerComponent;
  let fixture: ComponentFixture<ExpandAudioPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandAudioPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
