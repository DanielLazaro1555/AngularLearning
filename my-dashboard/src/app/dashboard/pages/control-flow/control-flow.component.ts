import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal('A');

  public frameworks = signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2 = signal([]);
  public toggleContent(){
    this.showContent.update(value => !value);
  }
}
