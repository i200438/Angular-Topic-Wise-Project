import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryComponent } from './entry.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: EntryComponent },
    ]),
  ],
  // imports: [CommonModule, EntryRoutingModule, BrowserModule],
  providers: [],
  bootstrap: [EntryComponent],
})
export class EntryModule {}
