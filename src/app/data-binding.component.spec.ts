import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MyAppComponent } from './data-binding.component';

beforeEachProviders(() => [MyAppComponent]);

describe('App: Udemy', () => {
  it('should create the app',
      inject([MyAppComponent], (app: MyAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'udemy works!\'',
      inject([MyAppComponent], (app: MyAppComponent) => {
    expect(app.title).toEqual('udemy works!');
  }));
});
