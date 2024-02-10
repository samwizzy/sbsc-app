import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-reposition',
  templateUrl: './reposition.component.html',
  styleUrls: ['./reposition.component.scss'],
})
export class RepositionComponent {
  list = ['one', 'two', 'three', 'four'];

  @ViewChild('container') containerRef!: ElementRef<any>;
  @ViewChildren('item') itemsRef!: QueryList<ElementRef>;

  ngOnInit() {}

  ngAfterViewInit() {
    const queryList = this.itemsRef.toArray();
    console.log(queryList, 'itemRef');
  }

  onDragStart(event: DragEvent) {
    const elem = event.target as HTMLInputElement;

    // elem.classList.add('opacity-0');

    const id = elem.id;
    event.dataTransfer?.setData('control', id);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDragEnter(index: number) {}

  onDragEnd(event: Event) {
    const elem = event.target as HTMLInputElement;
    elem.classList.remove('opacity-0');
  }

  onDrop(event: DragEvent) {
    event.stopPropagation();

    const node = event.target as HTMLElement;
    const id = event.dataTransfer?.getData('control');

    if (id && node) {
      const el = document.getElementById(id);

      if (el) {
        this.containerRef.nativeElement?.insertBefore(el, node.nextSibling);
      }
    }
  }

  reorderArray(event: any, originalArray: any) {
    const movedItem = originalArray.find((_: any, index: any) => index === event.oldIndex);
    const remainingItems = originalArray.filter((_: any, index: any) => index !== event.oldIndex);

    const reorderedItems = [
      ...remainingItems.slice(0, event.newIndex),
      movedItem,
      ...remainingItems.slice(event.newIndex),
    ];

    return reorderedItems;
  }

  manualDragStart(event: DragEvent) {
    const draggedItem = this.itemsRef.find((e) => {
      return e.nativeElement.classList.contains('dragging');
    });

    const siblings = this.itemsRef.filter((e) => {
      return !e.nativeElement.classList.contains('dragging');
    });

    const nextSibling = siblings.find((e) => {
      return event.clientY <= e.nativeElement.offsetTop + e.nativeElement.offsetHeight / 2;
    });

    this.containerRef.nativeElement?.insertBefore(
      draggedItem?.nativeElement,
      nextSibling?.nativeElement
    );
  }
}
