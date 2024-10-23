import { NgModule } from "@angular/core";
import { ContadoComponent} from "./contador/contador.componet";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ContadoComponent
    ],

    exports: [
        ContadoComponent
        ],

   

})

export class contadoModule {

}