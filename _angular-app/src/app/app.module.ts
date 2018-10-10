import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/pages/login/login.component';
import {CategoryListComponent} from './components/pages/category/category-list/category-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AlertErrorComponent} from './components/bootstrap/alert-error/alert-error.component';
import {ModalComponent} from './components/bootstrap/modal/modal.component';
import {CategoryNewModalComponent} from './components/pages/category/category-new-modal/category-new-modal.component';
import {CategoryEditModalComponent} from "./components/pages/category/category-edit-modal/category-edit-modal.component";
import {CategoryDeleteModalComponent} from './components/pages/category/category-delete-modal/category-delete-modal.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ProductListComponent} from "./components/pages/product/product-list/product-list.component";
import {ProductEditModalComponent} from "./components/pages/product/product-edit-modal/product-edit-modal.component";
import {ProductDeleteModalComponent} from "./components/pages/product/product-delete-modal/product-delete-modal.component";
import {ProductNewModalComponent} from "./components/pages/product/product-new-modal/product-new-modal.component";
import {NumberFormatBrPipe} from './pipes/number-format-br.pipe';
import {ProductCategoryListComponent} from './components/pages/product-category/product-category-list/product-category-list.component';
import {UserListComponent} from './components/pages/user/user-list/user-list.component';
import {UserDeleteModalComponent} from './components/pages/user/user-delete-modal/user-delete-modal.component';
import {UserEditModalComponent} from './components/pages/user/user-edit-modal/user-edit-modal.component';
import {UserNewModalComponent} from './components/pages/user/user-new-modal/user-new-modal.component';
import {ProductCategoryNewComponent} from './components/pages/product-category/product-category-new/product-category-new.component';
import {JWT_OPTIONS, JwtModule} from '@auth0/angular-jwt';
import {AuthService} from "./services/auth.service";
import {NavbarComponent} from './components/bootstrap/navbar/navbar.component';
import {RefreshTokenInterceptorService} from "./services/refresh-token-interceptor.service";
import {AppRoutingModule} from "./app-routing.module";
import {SortColumnComponent} from './components/common/sort-column/sort-column.component';
import {CategorySearchFormComponent} from './components/pages/category/category-search-form/category-search-form.component';
import {CategoryFormComponent} from "./components/pages/category/category-form/category-form.component";
import {FieldErrorComponent} from './components/bootstrap/field-error/field-error.component';
import {IsInvalidControlDirective, IsInvalidDirective} from './directives/is-invalid.directive';
import {ListErrorComponent} from './components/bootstrap/list-error/list-error.component';
import {CardErrorComponent} from './components/bootstrap/card-error/card-error.component';
import {ProductInputListComponent} from './components/pages/product-input/product-input-list/product-input-list.component';
import {ProductInputNewModalComponent} from './components/pages/product-input/product-input-new-modal/product-input-new-modal.component';
import {Select2Module} from "ng2-select2";
import {ProductInputFormComponent} from './components/pages/product-input/product-input-form/product-input-form.component';
import {ProductInputSearchFormComponent} from './components/pages/product-input/product-input-search-form/product-input-search-form.component';
import {ProductPhotoManagerComponent} from './components/pages/product-photo/product-photo-manager/product-photo-manager.component';
import {ProductOutputListComponent} from './components/pages/product-output/product-output-list/product-output-list.component';
import {ProductPhotoUploadComponent} from './components/pages/product-photo/product-photo-upload/product-photo-upload.component';
import {ProductPhotoEditModalComponent} from './components/pages/product-photo/product-photo-edit-modal/product-photo-edit-modal.component';
import {ProductPhotoDeleteModalComponent} from './components/pages/product-photo/product-photo-delete-modal/product-photo-delete-modal.component';
import {ProductOutputNewModalComponent} from './components/pages/product-output/product-output-new-modal/product-output-new-modal.component';
import {ProductOutputFormComponent} from './components/pages/product-output/product-output-form/product-output-form.component';
import {ProductOutputSearchComponent} from './components/pages/product-output/product-output-search/product-output-search.component';
import {ProductSearchFormComponent} from './components/pages/product/product-search-form/product-search-form.component';
import { ProductIdAutocompleteComponent } from './components/select2-fields/product-id-autocomplete/product-id-autocomplete.component';
import { UserProfileComponent } from './components/pages/user-profile/user-profile.component';
import { PhoneNumberAuthModalComponent } from './components/common/phone-number-auth-modal/phone-number-auth-modal.component';

function jwtFactory(authService: AuthService) {
    return {
        whitelistedDomains: [
            new RegExp('localhost:8000/*')
        ],
        tokenGetter: () => {
            return authService.getToken();
        }
    }
}

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        CategoryListComponent,
        AlertErrorComponent,
        ModalComponent,
        CategoryNewModalComponent,
        CategoryEditModalComponent,
        CategoryDeleteModalComponent,
        ProductListComponent,
        ProductEditModalComponent,
        ProductDeleteModalComponent,
        ProductNewModalComponent,
        NumberFormatBrPipe,
        ProductCategoryListComponent,
        UserListComponent,
        UserDeleteModalComponent,
        UserEditModalComponent,
        UserNewModalComponent,
        ProductCategoryNewComponent,
        NavbarComponent,
        SortColumnComponent,
        CategorySearchFormComponent,
        CategoryFormComponent,
        FieldErrorComponent,
        IsInvalidDirective,
        IsInvalidControlDirective,
        ListErrorComponent,
        CardErrorComponent,
        ProductInputListComponent,
        ProductInputNewModalComponent,
        ProductInputFormComponent,
        ProductInputSearchFormComponent,
        ProductPhotoManagerComponent,
        ProductOutputListComponent,
        ProductPhotoUploadComponent,
        ProductPhotoEditModalComponent,
        ProductPhotoDeleteModalComponent,
        ProductOutputNewModalComponent,
        ProductOutputFormComponent,
        ProductOutputSearchComponent,
        ProductSearchFormComponent,
        ProductIdAutocompleteComponent,
        UserProfileComponent,
        PhoneNumberAuthModalComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgxPaginationModule,
        Select2Module,
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: jwtFactory,
                deps: [AuthService]
            }
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RefreshTokenInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
