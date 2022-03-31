import chalk from "chalk";

const {
  bgGreen,
  bgRed,
  bgBlue,
  bgHex,
  bold,
  black,
  white,
  blueBright,
  inverse,
  green,
} = chalk;

type EventType = "success" | "info" | "event" | "error";

/**
 *
 * @param eventType
 * @param route
 * @param message
 */

export class ApiEvent {
  route: string;
  routeIndicator: string;
  logByDefault: boolean = true;

  successIndicator = green(bold("SUCCESS"));
  infoIndicator = blueBright(bold("INFO"));
  errorIndicator = bgRed(bold("ERROR"));

  constructor(route: string, logByDefault?: boolean) {
    this.route = route;
    this.routeIndicator = inverse(bold(`api/${this.route}`));
    this.logByDefault = logByDefault || true;
  }

  private out(out: string) {
    console.log(out);
  }

  success(message: string) {
    let output = `${this.successIndicator} on ${this.routeIndicator}: ${message}`;
    if (this.logByDefault) {
      this.out(output);
    }
  }

  info(message: string) {
    let output = `${this.infoIndicator} on ${this.routeIndicator}: ${message}`;
    if (this.logByDefault) {
      this.out(output);
    }
  }

  error(message: string) {
    let output = `${this.errorIndicator} on ${this.routeIndicator}:${message}`;
    console.log(
      `${this.errorIndicator} on ${this.routeIndicator}:`,
      ` ${message}`
    );
  }
}
