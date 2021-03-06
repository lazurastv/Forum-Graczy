/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RatingVM
 */
export interface RatingVM {
    /**
     * 
     * @type {number}
     * @memberof RatingVM
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof RatingVM
     */
    gameId?: number;
    /**
     * 
     * @type {string}
     * @memberof RatingVM
     */
    authorName?: string;
    /**
     * 
     * @type {number}
     * @memberof RatingVM
     */
    value?: number;
}

export function RatingVMFromJSON(json: any): RatingVM {
    return RatingVMFromJSONTyped(json, false);
}

export function RatingVMFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatingVM {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'authorName': !exists(json, 'authorName') ? undefined : json['authorName'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function RatingVMToJSON(value?: RatingVM | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'gameId': value.gameId,
        'authorName': value.authorName,
        'value': value.value,
    };
}

