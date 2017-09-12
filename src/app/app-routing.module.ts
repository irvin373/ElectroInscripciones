import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSubjectsComponent } from './list-subjects/list-subjects.component';
import { SubjectComponent } from './list-subjects/subject/subject.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'subjects',
        component: ListSubjectsComponent,
        // children: [
        //     { path: ':key', component: SubjectComponent }
        // ]
    },
    {
        path: 'subjects/:key',
        component: SubjectComponent,
    },{
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
