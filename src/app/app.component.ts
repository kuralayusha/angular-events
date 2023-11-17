import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-events-blog';

  showContainer: boolean = false;
  showContainerHandler() {
    this.showContainer = !this.showContainer;
  }

  name: string = '';
  handleNameInput(event: any) {
    this.name = event.target.value;
  }

  selectedOption: string = '';
  handleSelectChange(event: any) {
    this.selectedOption = event.target.value;
  }

  isCheckBoxChecked: boolean = false;
  handleCheckBoxChange($event: any) {
    this.isCheckBoxChecked = $event.target.checked;
  }

  isFormSubmitted: boolean = false;
  formSubmitMessage: string = 'Form is Submitted';
  onFormSubmit() {
    this.showContainer = false;
    this.isFormSubmitted = true;
  }

  changeColor(id: string) {
    const element = document.getElementById(id);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    element!.style.backgroundColor = '#' + randomColor;
  }

  pressedKey: string = '';
  handleKeyEvent(event: any) {
    this.pressedKey = event.key;
  }

  windowWidth!: number;
  windowHeight!: number;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.getWindowSize();
  }

  getWindowSize(): void {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  }
}
