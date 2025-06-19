import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeModule } from './modules/home/home.module';
import { UserModule } from './modules/user/user.module';
import { SharedModule } from './shared/shared.module';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, HomeModule, UserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}