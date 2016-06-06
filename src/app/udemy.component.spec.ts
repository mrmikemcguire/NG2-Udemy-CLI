import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { UdemyAppComponent } from '../app/udemy.component';

beforeEachProviders(() => [UdemyAppComponent]);

describe('App: Udemy', () => {
  it('should create the app',
      inject([UdemyAppComponent], (app: UdemyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'udemy works!\'',
      inject([UdemyAppComponent], (app: UdemyAppComponent) => {
    expect(app.title).toEqual('udemy works!');
  }));
});
