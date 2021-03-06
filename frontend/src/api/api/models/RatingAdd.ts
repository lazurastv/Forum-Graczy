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
 * @interface RatingAdd
 */
export interface RatingAdd {
    /**
     * 
     * @type {number}
     * @memberof RatingAdd
     */
    gameId?: number;
    /**
     * 
     * @type {number}
     * @memberof RatingAdd
     */
    value?: number;
}

export function RatingAddFromJSON(json: any): RatingAdd {
    return RatingAddFromJSONTyped(json, false);
}

export function RatingAddFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatingAdd {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameId': !exists(json, 'gameId') ? undefined : json['gameId'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function RatingAddToJSON(value?: RatingAdd | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameId': value.gameId,
        'value': value.value,
    };
}

