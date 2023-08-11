Feature: Core functionality of Login/User 

    Feature Description

    Example: Example Data
    | id | username     | firstName | lastName | email              | password  | phone     | userStatus    |     
    | 0  | JJJaneczek   | Jerzy     | Janeczek | jjSample@gmail.com | pwd123    | 88888888  | 1             |   

    @test
    Scenario: Login/Logout
        Given User has access to the site
        Then User will create a new account
        Then User will login to that account
        Then User will logout

    @test
    Scenario: Fetch User Data
        Given User has access to the site
        Then User will be able to fetch user info
        Then User will be able to edit user info
        Then User will be able to fetch new user info

    @test
    Scenario: Delete account
        Given User has access to the site
        Then User will create a new account
        Then User will be able to fetch user info
        Then User will delete account
        Then User will fetch info of invalid account
