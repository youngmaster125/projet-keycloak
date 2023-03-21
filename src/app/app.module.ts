import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { KeycloakAngularModule,KeycloakService } from 'keycloak-angular';
import { RequestInterceptorService } from './service/request-interceptor.service';


export function kcFactory(kcService:KeycloakService){
  return ()=>{
  kcService.init({
    config : {
      realm:"ecom-realm",
      clientId: "products-app-angular",
      url:"http://localhost:8080/"
    },
    initOptions:{
      onLoad:"check-sso",
      checkLoginIframe:true
    }
  })
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    SuppliersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,KeycloakAngularModule
  ],
  providers: [
    {provide:APP_INITIALIZER,deps:[KeycloakService],useFactory:kcFactory,multi:true},
   {provide:HTTP_INTERCEPTORS,useClass:RequestInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
