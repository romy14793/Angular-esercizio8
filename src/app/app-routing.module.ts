import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderContainerComponent } from './order-container/order-container.component';
import { UserContainerComponent } from './user-container/user-container.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
/*Il router module è il modulo di Angular che viene istruito attraverso le rotte*/

const routes: Routes = [
  //il tipo Routes di typescript accetta un array di oggetti con particolari chiavi
  { path: '', component: UserContainerComponent }, //ogni rotta sarà un oggetto che conterrà una chiave path, con la rotta da raggiungere ed una chiave component con il componente da raggiungere
  { path: 'order', component: OrderContainerComponent },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //utilizzando il RouterModule ed il metodo forRoot() indichiamo ad Angular le rotte
  exports: [RouterModule], //rendiamo il router module disponibile a tutta l'applicazione. Infatti può essere richiamato nell'app.module.ts
})
export class AppRoutingModule {}
