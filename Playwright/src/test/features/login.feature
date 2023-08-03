Feature: POC

    Feature Description : To run the core functionality of e-commerce website:
        Login
        Add To Cart
        Checkout


    # @test
    # Scenario: Go to page
    #     Given User navigates to webpage

    @test
    Scenario: Login
        Given User navigates to webpage
        Then User inputs username
        Then User inputs password
        When User clicks on login button
        Then Login should be success

    
    @test
    Scenario: AddToCart
    ### First Complete Login  ###
        Given User navigates to webpage
        Then User inputs username
        Then User inputs password
        When User clicks on login button
        Then Login should be success

    ### Perform Add to Cart Actions ###
        Given User is on the store page
        Then User will click on item
        When User clicks to add item to cart
        Then Cart value should be 1

    @test
    Scenario: Checkout
        ### First Complete Login  ###
        Given User navigates to webpage
        Then User inputs username
        Then User inputs password
        When User clicks on login button
        Then Login should be success

        ### Perform Add to Cart Actions ###
        Given User is on the store page
        Then User will click on item
        When User clicks to add item to cart
        Then Cart value should be 1

        ### Perform Checkout ###
        Given User goes to checkout
        Then User will finish order
        Then User will fill out form
        Then User will finish the order
        When User finishes order go back home


