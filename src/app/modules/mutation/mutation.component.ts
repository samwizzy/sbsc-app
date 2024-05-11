import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-mutation',
  templateUrl: './mutation.component.html',
  styleUrls: ['./mutation.component.scss'],
})
export class MutationComponent implements OnInit {
  @ViewChild('mutationsContainer', { static: true, read: ViewContainerRef })
  mutationsContainer!: ViewContainerRef;

  ngOnInit(): void {
    const mutationObserver = new MutationObserver((mutation) => {
      console.log(mutation, 'mutation');
    });

    mutationObserver.observe(this.mutationsContainer.element.nativeElement, {
      childList: true,
    });
  }

  onDrop(event: DragEvent) {
    const id = event.dataTransfer?.getData('id');

    if (id) {
      const el = document.querySelector(`.${id}`) as HTMLElement;

      if (el) {
        this.mutationsContainer.element.nativeElement.appendChild(el);
      }
    }
  }

  onDragover(event: DragEvent) {
    event.preventDefault();
  }

  onDragstart(event: DragEvent) {
    const id = (event.target as HTMLElement)?.className;
    event.dataTransfer?.setData('id', id);
  }

  onDragleave(event: DragEvent) {
    //
  }

  onMousedown(event: MouseEvent) {
    // console.log(event, 'mouse down event');
  }

  onMousemove(event: MouseEvent) {
    console.log(event, 'mouse move event');
    const x = event.clientX - 100 + 'px';
    const y = event.clientY - 100 + 'px';

    // (event.target as HTMLElement).style.transform = `translate(${clientX}, ${clientY})`;
    (event.target as HTMLElement).style.left = x;
    (event.target as HTMLElement).style.top = y;
  }
}
