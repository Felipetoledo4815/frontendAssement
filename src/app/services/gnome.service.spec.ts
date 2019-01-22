import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { GnomeService } from './gnome.service';
import { Gnome } from '../models/gnome';
import { doesNotThrow } from 'assert';

describe('GnomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [GnomeService]
  }));

  it('should be created', () => {
    const service: GnomeService = TestBed.get(GnomeService);
    expect(service).toBeTruthy();
  });
});
