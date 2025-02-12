import { IRepository } from "./IRepository";
import UserResult from "../models/UserResult";
import config, { ax } from "../config";

export interface UserResultFilter {
    keyword?: string
    isPinned? : boolean
}


export class UserResultRepository implements IRepository<UserResult> {
    urlPrefix = config.remoteRepositoryUrlPrefix

    async getAll(filter: UserResultFilter): Promise<UserResult[] | null> {
        const params = {...filter}
        const resp = await ax.get<UserResult[]>(`${this.urlPrefix}/userResult`,{ params })
        
        return resp.data

    }

    async get(id: string|number): Promise<UserResult | null> {
        const resp = await ax.get<UserResult>(`${this.urlPrefix}/userResult/${id}`)        
        return resp.data 
    }

    async create(entity: Partial<UserResult>): Promise<UserResult | null> {
        const resp = await ax.post<UserResult>(`${this.urlPrefix}/userResult`, entity)    
        return resp.data
    }

    async update(entity: Partial<UserResult>): Promise<UserResult | null> {
        const resp = await ax.put<UserResult>(`${this.urlPrefix}/userResult/${entity.id}`, entity)
        return resp.data
    }

    async view(id: string|number): Promise<UserResult | null> {
        const resp = await ax.get<UserResult>(`${this.urlPrefix}/userResult/${id}/markAsViewd`)
        return resp.data
    }

    async acknowledge(id: string|number): Promise<UserResult | null> {
        const resp = await ax.get<UserResult>(`${this.urlPrefix}/userResult/${id}/acknowledge`)
        return resp.data
    }

    async toggleIsPinned(id: string|number, pinned:boolean): Promise<UserResult | null> {
        const  Value = pinned ? 'pin/1' : 'pin/0'
        const resp = await ax.get<UserResult>(`${this.urlPrefix}/userResult/${id}/${Value}`)
        return resp.data
    }

}
