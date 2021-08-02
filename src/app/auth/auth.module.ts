import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

import { TranslateModule } from '@ngx-translate/core';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    AuthRoutingModule,
    SharedModule,
    TranslateModule.forChild(),
  ], //other modules which this module depends upon
  exports: [], // send this modules component/direective/pipe to other module for consumption
})
export class AuthModule {}
