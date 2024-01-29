# HANDOVER DOCUMENTATION

## Introduction
This document aims to summarize my work on the TableCheck SWE (JavaScript focus) take-home project, highlighting my understanding of the tasks, the approach I took, challenges faced, and the current state of the project.

## Task Summary and Approach

### Task 1: Fix Page Load Issue in `e2e.spec.ts`
**Commits:**
1. [Fix: Use static context id for hydration.](https://github.com/jenan-hong/swe-js-focus-takehome/commit/0328bcb1ab674103032addb463e2bf69c9dc13a4)
2. [Fix: Use correct reference in useController.](https://github.com/jenan-hong/swe-js-focus-takehome/commit/1360a25467c37c83e3ae8a67ba7a496ed50d33f3)
3. [Fix: Slug should refer to /shops/:shop.](https://github.com/jenan-hong/swe-js-focus-takehome/commit/f4755f46779f57081eda76727611be96decd4b16)

**Pull Requests:**
1. [Fix page load e2e test.](https://github.com/jenan-hong/swe-js-focus-takehome/pull/1)
2. [Fix page load e2e test.](https://github.com/jenan-hong/swe-js-focus-takehome/pull/2)

**Approach:**
I identified and resolved issues related to hydration, controller reference, and URL slugging, ensuring the page correctly displays "welcome to {{test}}" on load.

### Task 2: Implement Party Size Functionality
**Commits:**
1. [Add PartySizeCounter component and usePartySizeCounts hook.](https://github.com/jenan-hong/swe-js-focus-takehome/commit/5f82a8535963c4288b4e9fba7fd876db222ced3e)
2. [Refactor Cypress getByTestId command and update shop ID parameter in OpenAPI spec.](https://github.com/jenan-hong/swe-js-focus-takehome/commit/69efc4c2f52f40f082a933f5df0a90a0242751fd)

**Pull Request:**
[Feature: add party size counter and add API endpoints for test case.](https://github.com/jenan-hong/swe-js-focus-takehome/pull/3)

**Approach:**
Developed a `PartySizeCounter` component and a custom hook to manage party sizes, ensuring the functionality aligns with the OpenAPI spec.

### Task 3: Refactor `OasClientFromSpec`
**Commits:**
1. [Refactor OASClientFromSpec to accept undefined producer.](https://github.com/jenan-hong/swe-js-focus-takehome/commit/1b075321e6bf22196a5490833c1b4597a95bd08e)
2. [Add API endpoints for retrieving :shop and its menu.](https://github.com/jenan-hong/swe-js-focus-takehome/commit/b5ea9d2d55f0ed64d5031273e96521553698d7c3)

**Pull Request:**
[Refactor OASClientFromSpec to accept undefined producer.](https://github.com/jenan-hong/swe-js-focus-takehome/pull/4)

**Approach:**
Refactored the `OasClientFromSpec` class to make the `producer` callback argument optional.

## Challenges and Issues

### Encountered Issues
1. [Potential syntax error in e2e.spec.ts.](https://github.com/jenan-hong/swe-js-focus-takehome/issues/5)
2. [Using Cypress to test server side rendering component does not work as expected.](https://github.com/jenan-hong/swe-js-focus-takehome/issues/6)

**Description:**
- Issue with the syntax in `e2e.spec.ts` potentially impacting test reliability.
- Difficulties in using Cypress for testing server-side rendered components, leading to inconsistent test behavior.

### Remaining Work and Recommendations
- **Syntax Error in e2e.spec.ts:** Further investigation and discussion could clarify this issue.
- **Cypress Testing with SSR:** Research into alternative methods to find out a better solution.
