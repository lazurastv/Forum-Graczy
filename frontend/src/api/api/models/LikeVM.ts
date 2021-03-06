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
 * @interface LikeVM
 */
export interface LikeVM {
    /**
     * 
     * @type {number}
     * @memberof LikeVM
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof LikeVM
     */
    contentId?: number;
    /**
     * 
     * @type {string}
     * @memberof LikeVM
     */
    authorName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LikeVM
     */
    isLike?: boolean;
}

export function LikeVMFromJSON(json: any): LikeVM {
    return LikeVMFromJSONTyped(json, false);
}

export function LikeVMFromJSONTyped(json: any, ignoreDiscriminator: boolean): LikeVM {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'contentId': !exists(json, 'contentId') ? undefined : json['contentId'],
        'authorName': !exists(json, 'authorName') ? undefined : json['authorName'],
        'isLike': !exists(json, 'isLike') ? undefined : json['isLike'],
    };
}

export function LikeVMToJSON(value?: LikeVM | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'contentId': value.contentId,
        'authorName': value.authorName,
        'isLike': value.isLike,
    };
}

