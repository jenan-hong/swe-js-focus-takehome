# HANDOVER DOCUMENTATION

## Introduction
This document aims to summarize my work on the TableCheck SWE (JavaScript focus) take-home project, highlighting my understanding of the tasks, the approach I took, challenges faced, and the current state of the project.

## Task Summary and Approach

### Task 1: Fix Page Load Issue in `e2e.spec.ts`

**Pull Requests:**
1. [Fix page load e2e test.](https://github.com/jenan-hong/swe-js-focus-takehome/pull/1)
2. [Fix page load e2e test.](https://github.com/jenan-hong/swe-js-focus-takehome/pull/2)

**Approach:**
I identified and resolved issues related to hydration, controller reference, and URL slugging, ensuring the page correctly displays "welcome to {{test}}" on load.

### Task 2: Implement Party Size Functionality

**Pull Request:**
[Feature: add party size counter and add API endpoints for test case.](https://github.com/jenan-hong/swe-js-focus-takehome/pull/3)

**Approach:**
Developed a `PartySizeCounter` component and a custom hook to manage party sizes, ensuring the functionality aligns with the OpenAPI spec.

### Task 3: Refactor `OasClientFromSpec`

**Pull Request:**
[Refactor OASClientFromSpec to accept undefined producer.](https://github.com/jenan-hong/swe-js-focus-takehome/pull/4)

**Approach:**
Refactored the `OasClientFromSpec` class to make the `producer` callback argument optional.

## Challenges and Issues

### Encountered Issues
1. [Potential syntax error in e2e.spec.ts.](https://github.com/jenan-hong/swe-js-focus-takehome/issues/5)
2. ~[Using Cypress to test server side rendering component does not work as expected.](https://github.com/jenan-hong/swe-js-focus-takehome/issues/6)~

**Description:**
- Issue with the syntax in `e2e.spec.ts` potentially impacting test reliability.
- ~Difficulties in using Cypress for testing server-side rendered components, leading to inconsistent test behavior.~

### Remaining Work and Recommendations
- **Syntax Error in e2e.spec.ts:** Further investigation and discussion could clarify this issue.
- ~**Cypress Testing with SSR:** Research into alternative methods to find out a better solution.~

### Fix bugs and issues

**Pull Request:**
- [Refactor PartySize class to handle multiple menu items](https://github.com/jenan-hong/swe-js-focus-takehome/pull/7)
- [Add teardown API call to avoid using cached mock data](https://github.com/jenan-hong/swe-js-focus-takehome/pull/8)
