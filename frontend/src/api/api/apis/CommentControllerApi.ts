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


import * as runtime from '../runtime';
import {
    CommentAdd,
    CommentAddFromJSON,
    CommentAddToJSON,
    CommentUpdate,
    CommentUpdateFromJSON,
    CommentUpdateToJSON,
    CommentVM,
    CommentVMFromJSON,
    CommentVMToJSON,
} from '../models';

export interface AddCommentRequest {
    commentAdd: CommentAdd;
}

export interface DeleteCommentRequest {
    id: number;
}

export interface GetCommentByArticleIdRequest {
    id: number;
}

export interface GetCommentByIdRequest {
    id: number;
}

export interface GetCommentByUserIdRequest {
    id: number;
}

export interface UpdateCommentRequest {
    id: number;
    commentUpdate: CommentUpdate;
}

/**
 * 
 */
export class CommentControllerApi extends runtime.BaseAPI {

    /**
     */
    async addCommentRaw(requestParameters: AddCommentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.commentAdd === null || requestParameters.commentAdd === undefined) {
            throw new runtime.RequiredError('commentAdd','Required parameter requestParameters.commentAdd was null or undefined when calling addComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/comment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CommentAddToJSON(requestParameters.commentAdd),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async addComment(requestParameters: AddCommentRequest, initOverrides?: RequestInit): Promise<void> {
        await this.addCommentRaw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteCommentRaw(requestParameters: DeleteCommentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling deleteComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/comment/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteComment(requestParameters: DeleteCommentRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteCommentRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllCommentsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<CommentVM>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/comment`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentVMFromJSON));
    }

    /**
     */
    async getAllComments(initOverrides?: RequestInit): Promise<Array<CommentVM>> {
        const response = await this.getAllCommentsRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getCommentByArticleIdRaw(requestParameters: GetCommentByArticleIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<CommentVM>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCommentByArticleId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/comment/ArticleId/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentVMFromJSON));
    }

    /**
     */
    async getCommentByArticleId(requestParameters: GetCommentByArticleIdRequest, initOverrides?: RequestInit): Promise<Array<CommentVM>> {
        const response = await this.getCommentByArticleIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getCommentByIdRaw(requestParameters: GetCommentByIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CommentVM>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCommentById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/comment/Id/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CommentVMFromJSON(jsonValue));
    }

    /**
     */
    async getCommentById(requestParameters: GetCommentByIdRequest, initOverrides?: RequestInit): Promise<CommentVM> {
        const response = await this.getCommentByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getCommentByUserIdRaw(requestParameters: GetCommentByUserIdRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<CommentVM>>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getCommentByUserId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/comment/UserId/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentVMFromJSON));
    }

    /**
     */
    async getCommentByUserId(requestParameters: GetCommentByUserIdRequest, initOverrides?: RequestInit): Promise<Array<CommentVM>> {
        const response = await this.getCommentByUserIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateCommentRaw(requestParameters: UpdateCommentRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling updateComment.');
        }

        if (requestParameters.commentUpdate === null || requestParameters.commentUpdate === undefined) {
            throw new runtime.RequiredError('commentUpdate','Required parameter requestParameters.commentUpdate was null or undefined when calling updateComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/comment/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CommentUpdateToJSON(requestParameters.commentUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateComment(requestParameters: UpdateCommentRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updateCommentRaw(requestParameters, initOverrides);
    }

}
