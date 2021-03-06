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
import {
    AuthorVM,
    AuthorVMFromJSON,
    AuthorVMFromJSONTyped,
    AuthorVMToJSON,
} from './AuthorVM';

/**
 * 
 * @export
 * @interface CommentVM
 */
export interface CommentVM {
    /**
     * 
     * @type {number}
     * @memberof CommentVM
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof CommentVM
     */
    contentId?: number;
    /**
     * 
     * @type {AuthorVM}
     * @memberof CommentVM
     */
    authorVM?: AuthorVM;
    /**
     * 
     * @type {Date}
     * @memberof CommentVM
     */
    publishDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof CommentVM
     */
    comment?: string;
}

export function CommentVMFromJSON(json: any): CommentVM {
    return CommentVMFromJSONTyped(json, false);
}

export function CommentVMFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentVM {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'contentId': !exists(json, 'contentId') ? undefined : json['contentId'],
        'authorVM': !exists(json, 'authorVM') ? undefined : AuthorVMFromJSON(json['authorVM']),
        'publishDate': !exists(json, 'publishDate') ? undefined : (new Date(json['publishDate'])),
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
    };
}

export function CommentVMToJSON(value?: CommentVM | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'contentId': value.contentId,
        'authorVM': AuthorVMToJSON(value.authorVM),
        'publishDate': value.publishDate === undefined ? undefined : (value.publishDate.toISOString()),
        'comment': value.comment,
    };
}

