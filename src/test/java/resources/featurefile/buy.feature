Feature: Search functionality

  Scenario Outline: Search the buy car with model
    Given I am on homepage
    When I mouse hover on buy+sell tab
    And I click 'Search Cars' link
    Then I navigate to 'new and used car search' page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results
    Examples:
      | make          | model    | location     | price   |
      | Mercedes-Benz | A160     | NSW - Sydney | $50,000 |
      | Audi          | A1       | NSW - Sydney | $20,000 |
      | BMW           | 116i     | NSW - Sydney | $15,000 |
      | Ford          | Ecosport | NSW - Sydney | $15,000 |
      | Honda         | CR-V     | NSW - Sydney | $15,000 |
      | Toyota        | C-HR     | NSW - Sydney | $15,000 |
 # Add 6 data sets here.

  Scenario Outline: Search the used car with model
    Given I am on homepage
    When I mouse hover on buy+sell tab
    And I click Used link
    Then I navigate to Used Cars For Sale page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>"
    Examples:
      | make          | model    | location     | price   |
      | Mercedes-Benz | G55      | NSW - Sydney | $50,000 |
      | Audi          | A1       | NSW - Sydney | $20,000 |
      | BMW           | 116i     | NSW - Sydney | $15,000 |
      | Ford          | Ecosport | NSW - Sydney | $15,000 |
      | Honda         | CR-V     | NSW - Sydney | $15,000 |
      | Toyota        | C-HR     | NSW - Sydney | $15,000 |


