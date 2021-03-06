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
 * @interface CommentAdd
 */
export interface CommentAdd {
    /**
     * 
     * @type {number}
     * @memberof CommentAdd
     */
    contentId?: number;
    /**
     * 
     * @type {string}
     * @memberof CommentAdd
     */
    comment?: string;
}

export function CommentAddFromJSON(json: any): CommentAdd {
    return CommentAddFromJSONTyped(json, false);
}

export function CommentAddFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentAdd {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contentId': !exists(json, 'contentId') ? undefined : json['contentId'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
    };
}

export function CommentAddToJSON(value?: CommentAdd | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contentId': value.contentId,
        'comment': value.comment,
    };
}

