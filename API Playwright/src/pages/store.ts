import { expect, test,Page, APIRequestContext } from "@playwright/test";

import * as pages from '../data/pages.json'
import * as data from '../data/data.json'
import User from "../data/user";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class StorePage {

    private base : PlaywrightWrapper

    user : User
    // request : APIRequestContext

    constructor(public page: Page) {
        this.base = new PlaywrightWrapper(page)
        this.user = new User()
    }

    async placeOrder() {
        const newIssue = await this.page.request.post(`${pages.baseURL}${pages.store.store}${pages.store.order}`, {
            headers: {
              'accept': 'application/json',
            },
            data: data.order
        })
        console.log(await newIssue.json())
        expect(newIssue.status()).toBe(200)
    }

    
    async findOrder() {

        const newIssue = await this.page.request.get(`${pages.baseURL}${pages.store.store}${pages.store.order}/1`, {
            headers: {
              'accept': 'application/json',
            }
        })
        console.log(await newIssue.json())
        expect(newIssue.status()).toBe(200)   
    }

        
    async deleteOrder() {
        const newIssue = await this.page.request.delete(`${pages.baseURL}${pages.store.store}${pages.store.order}/${data.order.id}`, {
            headers: {
              'accept': 'application/json',
            }
        })
        console.log(await newIssue.json())
        expect(newIssue.status()).toBe(200)   
    }

    async inventoryStatus() {

        const newIssue = await this.page.request.get(`${pages.baseURL}${pages.store.store}${pages.store.inventory}`, {
            headers: {
              'accept': 'application/json',
            }
        })
        console.log(await newIssue.json())
        expect(newIssue.status()).toBe(200)   
    }




}