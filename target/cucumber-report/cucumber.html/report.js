$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("finddealers.feature");
formatter.feature({
  "line": 1,
  "name": "Find the dealers and verify",
  "description": "",
  "id": "find-the-dealers-and-verify",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6808910600,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Find the dealers and verify the dealers are in list",
  "description": "",
  "id": "find-the-dealers-and-verify;find-the-dealers-and-verify-the-dealers-are-in-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I mouse hover on buy+sell tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I click \u0027Find a Dealer\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I navigate to \u0027car-dealers\u0027 page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should see the dealer names \u003cdealersName\u003e are display on page",
  "rows": [
    {
      "cells": [
        "dealersName"
      ],
      "line": 9
    },
    {
      "cells": [
        "3 Point Motors Epping"
      ],
      "line": 10
    },
    {
      "cells": [
        "4WD Specialist Group"
      ],
      "line": 11
    },
    {
      "cells": [
        "5 Star Auto"
      ],
      "line": 12
    },
    {
      "cells": [
        "A \u0026 M Car Sales Pty Ltd"
      ],
      "line": 13
    },
    {
      "cells": [
        "A1 MOTORS COMPANY"
      ],
      "line": 14
    },
    {
      "cells": [
        "ANDREA MOTORI SERVICE"
      ],
      "line": 15
    },
    {
      "cells": [
        "Oxford Motors"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 213340800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 747927700,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iClickFindADealer()"
});
formatter.result({
  "duration": 294008900,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iNavigateToCarDealersPage()"
});
formatter.result({
  "duration": 29500,
  "status": "passed"
});
formatter.match({
  "location": "FindDealersSteps.iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage()"
});
formatter.result({
  "duration": 527700,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027au.com.carsguide.steps.FindDealersSteps.iShouldSeeTheDealerNamesDealersNameAreDisplayOnPage() in file:/C:/Users/user/IdeaProjects/carsguide.com.au/target/test-classes/\u0027 with pattern [^I should see the dealer names \u003cdealersName\u003e are display on page$] is declared with 0 parameters. However, the gherkin step has 1 arguments [Table:[[dealersName], [3 Point Motors Epping], [4WD Specialist Group], [5 Star Auto], [A \u0026 M Car Sales Pty Ltd], [A1 MOTORS COMPANY], [ANDREA MOTORI SERVICE], [Oxford Motors]]]. \nStep: And I should see the dealer names \u003cdealersName\u003e are display on page\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1306652100,
  "status": "passed"
});
});