import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionFormacionComponent } from 'src/components/EducacionFormacion/EducacionFormacion.component';
import { ExperienciaHabilidadesComponent } from 'src/components/ExperienciaHabilidades/ExperienciaHabilidades.component';
import { InformacionPersonalComponent } from 'src/components/InformacionPersonal/InformacionPersonal.component';
import { InteresesPasionesComponent } from 'src/components/InteresesPasiones/InteresesPasiones.component';
import { PortafolioComponent } from 'src/components/Portafolio/Portafolio.component';


const routes: Routes = [
  { path: '', component: InformacionPersonalComponent },
  { path: 'portafolio', component: PortafolioComponent},
  { path: 'educacionformacion', component: EducacionFormacionComponent},
  { path: 'experienciahabilidades', component: ExperienciaHabilidadesComponent},
  { path: 'interesespasiones', component: InteresesPasionesComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
