import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome = 'Jacinta Silvino Solino'
  endereco = 'Vil de viana/ Luand Sul'
  email = 'jlsirsolino1@gmail.com'
  telefone = '928711535'
  
display: boolean = true

}
