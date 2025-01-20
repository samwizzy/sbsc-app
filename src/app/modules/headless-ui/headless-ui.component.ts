import { Component } from '@angular/core';
import { from, tap } from 'rxjs';
import { ContentfulService } from 'src/app/core/services/contentful.service';

@Component({
  selector: 'app-headless-ui',
  templateUrl: './headless-ui.component.html',
  styleUrls: ['./headless-ui.component.scss'],
  providers: [ContentfulService],
})
export class HeadlessUiComponent {
  dataSource: any = [];
  projects$ = this.getProjectsObs();
  displayedColumns: string[] = ['logo', 'title', 'body', 'projectUrl'];

  list = [''];

  constructor(private contentfulService: ContentfulService) {}

  getProjectsObs() {
    return from(this.contentfulService.getProducts()).pipe(
      tap((data) => {
        console.log(data);
        this.dataSource = data.map((item) => item.fields);
      })
    );
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    const reg = new RegExp(/`${value}`/gi);

    this.list.map((item) => item.match(reg));
  }
}
