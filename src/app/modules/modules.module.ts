import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CardProjectComponent } from './components/card-project/card-project.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    CardProjectComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule, PrimeNgModule,TranslateModule

  ]
})
export class ModulesModule { }

