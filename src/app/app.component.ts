import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Jérôme';

  share() {
    var today = Date();
    window.alert('Partagé à : ' + today);
  }
}
