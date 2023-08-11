import { expect, test,Page, APIRequestContext } from "@playwright/test";

import * as pages from '../data/pages.json'
import * as data from '../data/data.json'
import User from "../data/user";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";

export default class LoginPage {

    private base : PlaywrightWrapper

    user : User
    // request : APIRequestContext



    constructor(public page: Page) {
        this.base = new PlaywrightWrapper(page)
        this.user = new User()
    }


    async createUserAccount() {
        const newIssue = await this.page.request.post(`${pages.baseURL}${pages.user.user}`, {
            headers: {
              'accept': 'application/json',
            },
            data: data.user
        })
        console.log(await newIssue.json())
        expect(newIssue.status()).toBe(200)
    }

    async loginToPage() {

        const newIssue = await this.page.request.get(`${pages.baseURL}${pages.user.user}${pages.user.login}`, {
            headers: {
              'accept': 'application/json',
            }
        })
        console.log(await newIssue.json())
        expect(newIssue.status()).toBe(200)   
    }

    async logout() {

      const newIssue = await this.page.request.get(`${pages.baseURL}${pages.user.user}${pages.user.logout}`, {
          headers: {
            'accept': 'application/json',
          }
      })
      console.log(await newIssue.json())
      expect(newIssue.status()).toBe(200)   
  }

    async getUserInfo() {
      const newIssue = await fetch(`${pages.baseURL}${pages.user.user}/${data.user.username}`, {
          headers: {
            'accept': 'application/json',
          },
      })
      console.log(await newIssue.json())
      // expect(newIssue.status()).toBe(200)
  }



    async updateUserInfo() {
        const newIssue = await this.page.request.put(`${pages.baseURL}${pages.user.user}/${data.user.username}`, {
            headers: {
              'accept': 'application/json',
            },
            data : data.editUser
        })
        console.log(await newIssue.json())
        expect(newIssue.status()).toBe(200)
    }

    async getEditedUserInfo() {

      const newIssue = await fetch(`${pages.baseURL}${pages.user.user}/${data.editUser.username}`, {
          headers: {
            'accept': 'application/json',
          },
      })
      console.log(await newIssue.json())
      // expect(newIssue.status()).toBe(200)
    }

    async deleteAccount() {
      const newIssue = await fetch(`${pages.baseURL}${pages.user.user}/${data.user.username}`, {
        method : "DELETE",
        headers: {
          'accept': 'application/json',
        }
      })
      //console.log(await newIssue.json())
      // expect(newIssue.status()).toBe(200)   
  }

    async getInvalidUser() {

      const newIssue = await fetch(`${pages.baseURL}${pages.user.user}/${data.editUser.username}`, {
          headers: {
            'accept': 'application/json',
          },
      })
      console.log(await newIssue.json())
      expect(newIssue.status).toBe(404)
    }

}