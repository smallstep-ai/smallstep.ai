import { expect, test } from "@playwright/test";

const routes = [
  { route: "/", text: /smallstep\.ai/i },
  { route: "/misal", text: /MISAL/i },
  { route: "/making-misal", text: /Empowering Marathi GenAI/i },
  { route: "/blog", text: /Introducing Misal 7B & 1B/i },
  { route: "/blog/making-misal", text: /Empowering Marathi GenAI/i },
] as const;

for (const { route, text } of routes) {
  test(`route ${route} renders`, async ({ page }) => {
    await page.goto(route);

    await expect(page).toHaveTitle(/Smallstep|Misal|Blog/i);
    await expect(page.locator("body")).toBeVisible();
    await expect(page.getByText(text).first()).toBeVisible();
    await expect(page.locator("img").first()).toBeVisible();
  });
}
