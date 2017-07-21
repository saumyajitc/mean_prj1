import { EventEmitter } from '@angular/core';

import { Error } from './error.model';

export class ErrorService {
    errorOccured = new EventEmitter<Error>();

    handleError(error: any) {
        const errBody = JSON.parse(error._body);
        const errorData = new Error(errBody.title, errBody.error.message);
        this.errorOccured.emit(errorData);
    }
}