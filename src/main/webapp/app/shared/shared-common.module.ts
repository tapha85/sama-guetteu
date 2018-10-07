import { NgModule } from '@angular/core';

import { SamaGuetteuSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SamaGuetteuSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SamaGuetteuSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SamaGuetteuSharedCommonModule {}
