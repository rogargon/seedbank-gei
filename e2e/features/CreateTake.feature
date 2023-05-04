Feature: Create Take
  In order to create Take
  As a admin, propagator, donor and user
  I want to create a new Take

  Scenario: Add Take button is present when logged in as admin
    Given I'm in the homepage
    And I log in as "admintest" with password "password"
    Then I'm logged in as user "admintest"
    When I'm in take list page
    Then The "Add Take" button is present

  Scenario: Add Take button is present when logged in as propagator
    Given I'm in the homepage
    And I log in as "propagator" with password "password"
    Then I'm logged in as user "propagator"
    When I'm in take list page
    Then The "Add Take" button is present

  Scenario: Add Take button is not present when logged in as donor
    Given I'm in the homepage
    And I log in as "donor" with password "password"
    Then I'm logged in as user "donor"
    When I'm in take list page
    Then The "Add Take" button is not present

  Scenario: Create new Take as admin
    Given I'm in the homepage
    And I log in as "admintest" with password "password"
    Then I'm logged in as user "admintest"
    When I'm in add take page    
    And I fill the form with
      | FIELD     | VALUE       |
      | amount    | 5           |
      | weight    | 25          |
      | location  | lleida      |
    And I click the "Submit" button
    Then The "Add Take" button is present

    Scenario: Create new Take as propagator
    Given I'm in the homepage
    And I log in as "propagator" with password "password"
    Then I'm logged in as user "propagator"
    When I'm in add take page    
    And I fill the form with
      | FIELD     | VALUE       |
      | amount    | 15          |
      | weight    | 35          |
      | location  | zaragoza    |
    And I click the "Submit" button
    Then The "Add Take" button is present