import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Jérôme';
  items = [];

  url = 'https://dummyjson.com/todos/random';

  constructor(private http: HttpClient) {}

  createItem(newItem) {
    this.items.push(newItem);
  }
  deleteItems() {
    this.items = [];
  }

  deleteItem(index){
    this.items.splice(index, 1);
  }

  getURL() {
    this.http.get<SearchResults>(this.url).subscribe((data) => {
      this.items.push(data.todo);
    });

    interface SearchResults {
      todo: string;
    }
  }
}
