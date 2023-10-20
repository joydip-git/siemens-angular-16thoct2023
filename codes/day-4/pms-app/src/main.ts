import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModuleRef, PlatformRef } from "@angular/core";
import { AppModule } from "./app/app.module";

const platformRefObj: PlatformRef = platformBrowserDynamic()
// setTimeout(
//   () => {
platformRefObj
  .bootstrapModule(AppModule)
  .then(
    (ref: NgModuleRef<AppModule>) => {
      console.log(ref.instance)
    },
    (err) => {
      console.log(err)
    }
  )
//   },
//   5000
// )
