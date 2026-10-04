import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { Config } from "../../utils/config";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.page.goto(Config.baseUrl);
  }

  async expectTitle(expectedText: string): Promise<void> {
    await this.page.waitForFunction((value) => document.title === value, expectedText);
  }
}
