import { Routes } from "@angular/router"
import { ToolbarComponent } from "./layout/toolbar/toolbar.component"

export const routes: Routes = [
    {
        path: '',
        component: ToolbarComponent
    },
    {
        path: '**',
        component: ToolbarComponent
    },
];