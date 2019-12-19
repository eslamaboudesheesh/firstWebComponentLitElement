import { Component } from '@angular/core';
 import { windowsloader } from './windows-loader';

 console.assert(windowsloader !== undefined);

@Component({
  selector: 'my-app',
  templateUrl: "./app.component.html" 
})
export class AppComponent  {
  name = 'my first component Windows loader';
}
