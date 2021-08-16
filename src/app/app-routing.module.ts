import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCitezensComponent } from './components/list-citezens/list-citezens.component';
import { HomeComponent } from './pages/home/home.component';
import { TabsComponent } from './pages/tabs/tabs.component';

const routes: Routes = [
  { path: '*', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListCitezensComponent },
  { path: 'tabs', component: TabsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
