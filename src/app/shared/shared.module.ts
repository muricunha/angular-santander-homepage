import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

const components = [
  ButtonComponent,
  HeaderComponent,
  FooterComponent,
  CardComponent
]

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
  ],
})
export class SharedModule { }
