import { RouterModule, Routes } from "@angular/router";
import { AutoresComponent } from "./components/autores/autores.component";
import { LibrosComponent } from "./components/libros/libros.component";
import { PrestamosComponent } from "./components/prestamos/prestamos.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: PrestamosComponent },
    { path: 'prestamos', component: PrestamosComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'libros', component: LibrosComponent },
    { path: 'autores', component: AutoresComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)