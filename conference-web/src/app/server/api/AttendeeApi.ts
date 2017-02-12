/**
 * Attendee
 * Gives all the details of the attendee
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {Http, Headers, RequestOptionsArgs, Response, URLSearchParams} from '@angular/http';
import {Injectable, Optional} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

/* tslint:disable:no-unused-variable member-ordering */

'use strict';
import { Attendee } from '../model/Attendee';

@Injectable()
export class AttendeeApi {
    protected basePath = 'http://localhost:8081/api';
    public defaultHeaders : Headers = new Headers();

    constructor(protected http: Http, @Optional() basePath: string) {
        if (basePath) {
            this.basePath = basePath;
        }
    }

    /**
     * Adds a new attendee to the conference
     *
     */
    public add (extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/attendees';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Finds all the attendees
     *
     * @param page
     */
    public allAttendees (page?: number, extraHttpRequestParams?: any ) : Observable<Array<Attendee>> {
        const path = this.basePath + '/attendees';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        if (page !== undefined) {
            queryParameters.set('page', String(page));
        }

        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Logs an attendee with a user and password
     *
     * @param login
     * @param password
     */
    public authenticateUser (login?: string, password?: string, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/attendees/login';

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        let formParams = new URLSearchParams();

        headerParams.set('Content-Type', 'application/x-www-form-urlencoded');

        formParams['login'] = login;

        formParams['password'] = password;

        let requestOptions: RequestOptionsArgs = {
            method: 'POST',
            headers: headerParams,
            search: queryParameters
        };
        requestOptions.body = formParams.toString();

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Deletes an attendee
     *
     * @param id
     */
    public remove (id: string, extraHttpRequestParams?: any ) : Observable<{}> {
        const path = this.basePath + '/attendees/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling remove.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'DELETE',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Finds an attendee by ID
     *
     * @param id
     */
    public retrieve (id: string, extraHttpRequestParams?: any ) : Observable<Attendee> {
        const path = this.basePath + '/attendees/{id}'
            .replace('{' + 'id' + '}', String(id));

        let queryParameters = new URLSearchParams();
        let headerParams = this.defaultHeaders;
        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling retrieve.');
        }
        let requestOptions: RequestOptionsArgs = {
            method: 'GET',
            headers: headerParams,
            search: queryParameters
        };

        return this.http.request(path, requestOptions)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

}
