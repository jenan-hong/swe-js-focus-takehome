import { afterEach, cy } from "local-cypress";
import "./commands/api";
import "./commands/utils";

afterEach(() => {
  cy.teardown();
});
