import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MidiVisualizerModule } from './pages/midi-visualizer/midi-visualizer.module';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './components/component.module';
import { MelodyCatalogComponent } from './pages/melody-catalog/melody-catalog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BlogComponent,
    MelodyCatalogComponent,
  ],
  imports: [
    BrowserModule,
    MidiVisualizerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
