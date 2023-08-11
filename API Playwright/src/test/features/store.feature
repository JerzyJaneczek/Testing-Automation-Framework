Feature: Purchase items from Store

    @test
    Scenario: Place an order for item
        Given User has access to store site
        Then User will place an order
        Given Order is successfull retrive order

    Scenario: Delete an existing Order
        Given There is an order
        Then Delete that order 