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
 * @interface ArticleAddUpdate
 */
export interface ArticleAddUpdate {
    /**
     * 
     * @type {string}
     * @memberof ArticleAddUpdate
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleAddUpdate
     */
    introduction?: string;
    /**
     * 
     * @type {string}
     * @memberof ArticleAddUpdate
     */
    content?: string;
}

export function ArticleAddUpdateFromJSON(json: any): ArticleAddUpdate {
    return ArticleAddUpdateFromJSONTyped(json, false);
}

export function ArticleAddUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticleAddUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'introduction': !exists(json, 'introduction') ? undefined : json['introduction'],
        'content': !exists(json, 'content') ? undefined : json['content'],
    };
}

export function ArticleAddUpdateToJSON(value?: ArticleAddUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'introduction': value.introduction,
        'content': value.content,
    };
}

