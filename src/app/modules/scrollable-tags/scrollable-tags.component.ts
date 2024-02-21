import { Component } from '@angular/core';

@Component({
  selector: 'app-scrollable-tags',
  templateUrl: './scrollable-tags.component.html',
  styleUrls: ['./scrollable-tags.component.scss'],
})
export class ScrollableTagsComponent {
  tags = [
    'HTML',
    'CSS',
    'JAVASCRIPT',
    'PHP',
    'JQUERY',
    'MYSQL',
    'DOCKER',
    'PYTHON',
    'REACT',
    'ANGULAR',
    'ORACLE',
  ];
}
