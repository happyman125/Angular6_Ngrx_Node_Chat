import { ServerNotificationEffectService } from './services/effects/server-notifications-effect.service';
import { MaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { AppComponent } from './app.component';
import { UserSelectionComponent } from './components/user-selection/user-selection.component';
import { ThreadSectionComponent } from './components/thread-section/thread-section.component';
import { MessageSectionComponent } from './components/message-section/message-section.component';
import { ThreadsService } from './services/threads.service';
import { ThreadListComponent } from './components/thread-list/thread-list.component';
import { EffectsModule } from '@ngrx/effects';
import { LoadThreadsEffectService } from './services/effects/load-threads-effect.service';
import { StoreDevtoolsModule, StoreDevtools } from '@ngrx/store-devtools';
import { MessageListComponent } from './components/message-list/message-list.component';
import { INITITAL_APPLICATION_STATE } from './store/application-state';
import { uiState } from './store/reducers/uiStateReducer';
import { storeData } from './store/reducers/uiStoreReducer';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { WriteNewMessageEffecService } from './services/effects/write-new-message-service';

const reducers: ActionReducerMap<any> = {
	uiState,
	storeData
}

@NgModule({
	declarations: [
		AppComponent,
		UserSelectionComponent,
		ThreadSectionComponent,
		MessageSectionComponent,
		ThreadListComponent,
		MessageListComponent,
		ChatMessageComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MaterialModule,
		StoreModule.forRoot( reducers, { initialState: INITITAL_APPLICATION_STATE } ),
		EffectsModule.forRoot([LoadThreadsEffectService, WriteNewMessageEffecService, ServerNotificationEffectService ]),
		StoreDevtoolsModule.instrument()
	],
	providers: [
		ThreadsService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
