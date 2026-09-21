import assert from "node:assert/strict";
import test from "node:test";
import { CORE_METRICS, CV_LINKS, CONTACT_INFO, portfolioData } from "../src/data/portfolioData.ts";

test("portfolio data core metrics enforce single source of truth", () => {
  assert.equal(CORE_METRICS.ultyUsers, "1600+");
  assert.equal(CORE_METRICS.experienceYearsRu, "3+ года");
  assert.equal(CORE_METRICS.coordinatedBudget, "$100K+");
  assert.equal(CORE_METRICS.supplyUnits, "6000+");
  assert.equal(CORE_METRICS.vendorsAnalyzed, "500+");
});

test("portfolio data contacts are correct", () => {
  assert.equal(CONTACT_INFO.telegramHandle, "@DemianWorkSelf");
  assert.equal(CONTACT_INFO.email, "yaminaasfak@gmail.com");
  assert.equal(CONTACT_INFO.phone, "+7 929 721-45-87");
});

test("portfolio data CV links are defined for all career tracks", () => {
  assert.ok(CV_LINKS.projectRu.includes("Project_Manager_CV_RU.pdf"));
  assert.ok(CV_LINKS.projectEn.includes("Project_Manager_CV_EN.pdf"));
  assert.ok(CV_LINKS.productRu.includes("Product_Manager_CV_RU.pdf"));
  assert.ok(CV_LINKS.businessRu.includes("Business_Assistant_CV_RU.pdf"));
});

test("bilingual metadata is configured for all 4 primary routes", () => {
  for (const lang of ["ru", "en"]) {
    const meta = portfolioData[lang].meta;
    assert.ok(meta.home.title.length > 0);
    assert.ok(meta.project.title.includes("Project Manager"));
    assert.ok(meta.product.title.includes("Product Manager"));
    assert.ok(meta.business.title.includes("Business"));

    // Check that ultyUsers is reflected in metadata descriptions
    assert.ok(meta.home.description.includes("1600+"));
    assert.ok(meta.product.description.includes("1600+"));
  }
});

test("UltyMyLife ecosystem has all 8 core modules implemented", () => {
  for (const lang of ["ru", "en"]) {
    const modules = portfolioData[lang].ecosystem;
    assert.equal(modules.length, 8);
    const moduleIds = modules.map((m) => m.id);
    assert.deepEqual(moduleIds, [
      "tasks",
      "habits",
      "workouts",
      "sleep",
      "breathing",
      "mind",
      "ai",
      "profile",
    ]);
  }
});

test("Dr. Mix case explicitly defines hands-on developer ownership", () => {
  const drMixRu = portfolioData.ru.cases.drMix;
  assert.ok(drMixRu.role.includes("Developer"));
  assert.ok(drMixRu.ownershipNote.includes("не ставил задачи сторонним разработчикам"));
});
