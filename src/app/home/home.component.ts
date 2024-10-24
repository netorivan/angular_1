import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filtrar por estudiante" />
      <button class="primary" type="button">buscar</button>
    </form>
  </section>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
