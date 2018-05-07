import { Route } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { TestComponent} from './test/test.component';

export const FeaturesRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'test'
    },
    {
        path: '',
        component: IndexComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'test',
                component: TestComponent
            }
        ],
        //ROUTER CHILDREN LIMIT (NOT REMOVE - CLI COMPONENT)
        canActivate: []
    }
];
