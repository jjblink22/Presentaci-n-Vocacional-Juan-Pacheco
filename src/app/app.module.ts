import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { InformacionPersonalComponent } from 'src/components/InformacionPersonal/InformacionPersonal.component';
import { PortafolioComponent } from 'src/components/Portafolio/Portafolio.component';
import { InteresesPasionesComponent } from 'src/components/InteresesPasiones/InteresesPasiones.component';
import { ExperienciaHabilidadesComponent } from 'src/components/ExperienciaHabilidades/ExperienciaHabilidades.component';
import { EducacionFormacionComponent } from 'src/components/EducacionFormacion/EducacionFormacion.component';



@NgModule({
  declarations: [
    AppComponent,
    InformacionPersonalComponent,
    PortafolioComponent,
    InteresesPasionesComponent,
    ExperienciaHabilidadesComponent,
    EducacionFormacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
