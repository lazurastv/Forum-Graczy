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
    GameAddUpdate,
    GameAddUpdateFromJSON,
    GameAddUpdateToJSON,
    GameFullInfoVM,
    GameFullInfoVMFromJSON,
    GameFullInfoVMToJSON,
    GameSearchInfoVM,
    GameSearchInfoVMFromJSON,
    GameSearchInfoVMToJSON,
    GameVM,
    GameVMFromJSON,
    GameVMToJSON,
} from '../models';

export interface AddGameRequest {
    gameAddUpdate: GameAddUpdate;
}

export interface AddGameContentWithImagesRequest {
    gameId: number;
    content: string;
    files?: Array<Blob>;
}

export interface DeleteGameRequest {
    gameId: number;
}

export interface GetGameRequest {
    gameId: number;
}

export interface GetGameFullInfoRequest {
    gameId: number;
}

export interface GetSimilarGamesRequest {
    gameId: number;
}

export interface UpdateGameRequest {
    gameId: number;
    gameAddUpdate: GameAddUpdate;
}

/**
 * 
 */
export class GameControllerApi extends runtime.BaseAPI {

    /**
     */
    async addGameRaw(requestParameters: AddGameRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<number>> {
        if (requestParameters.gameAddUpdate === null || requestParameters.gameAddUpdate === undefined) {
            throw new runtime.RequiredError('gameAddUpdate','Required parameter requestParameters.gameAddUpdate was null or undefined when calling addGame.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/game`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameAddUpdateToJSON(requestParameters.gameAddUpdate),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async addGame(requestParameters: AddGameRequest, initOverrides?: RequestInit): Promise<number> {
        const response = await this.addGameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async addGameContentWithImagesRaw(requestParameters: AddGameContentWithImagesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.gameId === null || requestParameters.gameId === undefined) {
            throw new runtime.RequiredError('gameId','Required parameter requestParameters.gameId was null or undefined when calling addGameContentWithImages.');
        }

        if (requestParameters.content === null || requestParameters.content === undefined) {
            throw new runtime.RequiredError('content','Required parameter requestParameters.content was null or undefined when calling addGameContentWithImages.');
        }

        const queryParameters: any = {};

        if (requestParameters.content !== undefined) {
            queryParameters['content'] = requestParameters.content;
        }

        if (requestParameters.files) {
            queryParameters['files'] = requestParameters.files;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/game/upload-content-and-images/{gameId}`.replace(`{${"gameId"}}`, encodeURIComponent(String(requestParameters.gameId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async addGameContentWithImages(requestParameters: AddGameContentWithImagesRequest, initOverrides?: RequestInit): Promise<void> {
        await this.addGameContentWithImagesRaw(requestParameters, initOverrides);
    }

    /**
     */
    async deleteGameRaw(requestParameters: DeleteGameRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.gameId === null || requestParameters.gameId === undefined) {
            throw new runtime.RequiredError('gameId','Required parameter requestParameters.gameId was null or undefined when calling deleteGame.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/game/{gameId}`.replace(`{${"gameId"}}`, encodeURIComponent(String(requestParameters.gameId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteGame(requestParameters: DeleteGameRequest, initOverrides?: RequestInit): Promise<void> {
        await this.deleteGameRaw(requestParameters, initOverrides);
    }

    /**
     */
    async getAllGameSearchInfosRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<GameSearchInfoVM>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/game/SearchInfos`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GameSearchInfoVMFromJSON));
    }

    /**
     */
    async getAllGameSearchInfos(initOverrides?: RequestInit): Promise<Array<GameSearchInfoVM>> {
        const response = await this.getAllGameSearchInfosRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getAllGamesRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<GameVM>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/game`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GameVMFromJSON));
    }

    /**
     */
    async getAllGames(initOverrides?: RequestInit): Promise<Array<GameVM>> {
        const response = await this.getAllGamesRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getGameRaw(requestParameters: GetGameRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GameVM>> {
        if (requestParameters.gameId === null || requestParameters.gameId === undefined) {
            throw new runtime.RequiredError('gameId','Required parameter requestParameters.gameId was null or undefined when calling getGame.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/game/{gameId}`.replace(`{${"gameId"}}`, encodeURIComponent(String(requestParameters.gameId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameVMFromJSON(jsonValue));
    }

    /**
     */
    async getGame(requestParameters: GetGameRequest, initOverrides?: RequestInit): Promise<GameVM> {
        const response = await this.getGameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getGameFullInfoRaw(requestParameters: GetGameFullInfoRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<GameFullInfoVM>> {
        if (requestParameters.gameId === null || requestParameters.gameId === undefined) {
            throw new runtime.RequiredError('gameId','Required parameter requestParameters.gameId was null or undefined when calling getGameFullInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/game/FullInfo/{gameId}`.replace(`{${"gameId"}}`, encodeURIComponent(String(requestParameters.gameId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameFullInfoVMFromJSON(jsonValue));
    }

    /**
     */
    async getGameFullInfo(requestParameters: GetGameFullInfoRequest, initOverrides?: RequestInit): Promise<GameFullInfoVM> {
        const response = await this.getGameFullInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async getSimilarGamesRaw(requestParameters: GetSimilarGamesRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<GameSearchInfoVM>>> {
        if (requestParameters.gameId === null || requestParameters.gameId === undefined) {
            throw new runtime.RequiredError('gameId','Required parameter requestParameters.gameId was null or undefined when calling getSimilarGames.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/game/Similar/{gameId}`.replace(`{${"gameId"}}`, encodeURIComponent(String(requestParameters.gameId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GameSearchInfoVMFromJSON));
    }

    /**
     */
    async getSimilarGames(requestParameters: GetSimilarGamesRequest, initOverrides?: RequestInit): Promise<Array<GameSearchInfoVM>> {
        const response = await this.getSimilarGamesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async updateGameRaw(requestParameters: UpdateGameRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.gameId === null || requestParameters.gameId === undefined) {
            throw new runtime.RequiredError('gameId','Required parameter requestParameters.gameId was null or undefined when calling updateGame.');
        }

        if (requestParameters.gameAddUpdate === null || requestParameters.gameAddUpdate === undefined) {
            throw new runtime.RequiredError('gameAddUpdate','Required parameter requestParameters.gameAddUpdate was null or undefined when calling updateGame.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/game/{gameId}`.replace(`{${"gameId"}}`, encodeURIComponent(String(requestParameters.gameId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GameAddUpdateToJSON(requestParameters.gameAddUpdate),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async updateGame(requestParameters: UpdateGameRequest, initOverrides?: RequestInit): Promise<void> {
        await this.updateGameRaw(requestParameters, initOverrides);
    }

}
