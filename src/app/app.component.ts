import { Component } from '@angular/core';
import * as showdown from 'showdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TP_gestion_carnets';

 text: string = `## A cool link Hello
 <a href="javascript:alert('Hello!')">click me</a>`;
 sanitize:boolean = true;
 options = {emoji: true}

// options : showdown.ShowdownOptions = {noHeaderId
 converter = new showdown.Converter();
 html = this.converter.makeHtml(this.text);



}
