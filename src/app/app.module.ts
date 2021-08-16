import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbUserComponent,
  NbUserModule,
  NbActionsModule,
  NbTabsetModule,
  NbInputModule,
  NbButtonModule,
  NbSpinnerModule,
  NbDialogModule,
  NbToastrModule,
  NbDialogService,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AddCitezenComponent } from './components/add-citezen/add-citezen.component';
import { ListCitezensComponent } from './components/list-citezens/list-citezens.component';
import { EditCitezenComponent } from './components/edit-citezen/edit-citezen.component';
import { HomeComponent } from './pages/home/home.component';
import { TabsComponent } from './pages/tabs/tabs.component';

import { NgxSoapModule } from 'ngx-soap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCitezenComponent,
    ListCitezensComponent,
    EditCitezenComponent,
    HomeComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbIconModule,
    NbListModule,
    NbUserModule,
    NbTabsetModule,
    NbInputModule,
    NbButtonModule,
    NbSpinnerModule,
    NgxSoapModule,
    FormsModule,
    ReactiveFormsModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
  ],
  providers: [NbDialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
