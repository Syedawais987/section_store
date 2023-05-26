import { shopifyApp } from "../../..";
import { getThrownResponse, testConfig } from "../../../__tests__/test-helper";

describe("authorize.admin", () => {
  test("Uses App Bridge to exit iFrame when the url matches auth.exitIframePath", async () => {
    // GIVEN
    const config = testConfig();
    const shopify = shopifyApp(config);

    // WHEN
    const exitTo = encodeURIComponent(config.appUrl);
    const url = `${shopify.config.appUrl}/auth/exit-iframe?exitIframe=${exitTo}`;
    const response = await getThrownResponse(
      shopify.authenticate.admin,
      new Request(url)
    );

    // THEN
    const responseText = await response.text();
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/html;charset=utf-8"
    );
    expect(responseText).toContain(
      `<script data-api-key="${config.apiKey}" src="https://cdn.shopify.com/shopifycloud/app-bridge-next/app-bridge.js"></script>`
    );
    expect(responseText).toContain(
      `<script>shopify.redirectTo("${decodeURIComponent(exitTo)}")</script>`
    );
  });

  test("Uses App Bridge to exit iFrame when the url matches auth.exitIframePath and authPathPrefix is passed", async () => {
    // GIVEN
    const authPathPrefix = "/shopify";
    const config = testConfig({ authPathPrefix });
    const shopify = shopifyApp(config);

    // WHEN
    const exitTo = encodeURIComponent(config.appUrl);
    const url = `${shopify.config.appUrl}${authPathPrefix}/exit-iframe?exitIframe=${exitTo}`;
    const response = await getThrownResponse(
      shopify.authenticate.admin,
      new Request(url)
    );

    // THEN
    const responseText = await response.text();
    expect(response.status).toBe(200);
    expect(response.headers.get("content-type")).toBe(
      "text/html;charset=utf-8"
    );
    expect(responseText).toContain(
      `<script data-api-key="${config.apiKey}" src="https://cdn.shopify.com/shopifycloud/app-bridge-next/app-bridge.js"></script>`
    );
    expect(responseText).toContain(
      `<script>shopify.redirectTo("${decodeURIComponent(exitTo)}")</script>`
    );
  });
});