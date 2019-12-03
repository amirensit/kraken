import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RuntimeWatcherService} from 'projects/runtime/src/lib/runtime-watcher/runtime-watcher.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    RuntimeWatcherService,
  ]
})
export class RuntimeWatcherModule {
}