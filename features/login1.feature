Feature: Lauching SSO Simulator

    Background: 
        Given I'm on the SSO Simulator Page
    
    Scenario: Launch Base Site from SSO
        When I launch base Site
        Then I shall be redirected to Search Page