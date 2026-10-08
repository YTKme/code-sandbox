import {
  test as baseTest,
  describe,
  expect
} from "vitest";

import { LinkedList } from "../src/linked-list";

// Reset
const RESET = "\x1b[0m"
// Foreground
const FOREGROUND_BLACK = "\x1b[30m"
const FOREGROUND_RED = "\x1b[31m"
const FOREGROUND_GREEN = "\x1b[32m"
const FOREGROUND_YELLOW = "\x1b[33m"
const FOREGROUND_BLUE = "\x1b[34m"
const FOREGROUND_MAGENTA = "\x1b[35m"
const FOREGROUND_CYAN = "\x1b[36m"
const FOREGROUND_WHITE = "\x1b[37m"
// Background
const BACKGROUND_BLACK = "\x1b[40m"
const BACKGROUND_RED = "\x1b[41m"
const BACKGROUND_GREEN = "\x1b[42m"
const BACKGROUND_YELLOW = "\x1b[43m"
const BACKGROUND_BLUE = "\x1b[44m"
const BACKGROUND_MAGENTA = "\x1b[45m"
const BACKGROUND_CYAN = "\x1b[46m"
const BACKGROUND_WHITE = "\x1b[47m"
// Style
const STYLE_BOLD = "\x1b[1m"
const STYLE_DIM = "\x1b[2m"
const STYLE_UNDERLINED = "\x1b[4m"
const STYLE_BLINK = "\x1b[5m"
const STYLE_REVERSE = "\x1b[7m"
const STYLE_HIDDEN = "\x1b[8m"
const STYLE_DEFAULT = "\x1b[22m"

const ZERO = "Zero"
const ALPHA = "Alpha"

const LINKED_LIST_DATA = [
  64, 79, 31, 7, 87, 63, 83, 92, 66, 53,
  50, 2, 90, 6, 44, 4, 40, 78, 26, 84,
]

/**
 * Automatic Fixture
 */
const test = baseTest.extend<{}>({

});

describe(`Linked List TypeScript ${ZERO} Test`, () => {
  console.info(`${FOREGROUND_GREEN}Linked List TypeScript ${ZERO} Test${RESET}`);

  test("Create and Initialize Linked List", () => {
    console.info(`${FOREGROUND_GREEN}Create and Initialize Linked List${RESET}`);

    const linkedList = new LinkedList<number>();

    console.debug(`${FOREGROUND_BLUE}Linked List Length: ${linkedList.length}${RESET}`);
    expect(linkedList.length).toBe(0);
  });

  test("Append New Node to Linked List", () => {
    console.info(`${FOREGROUND_GREEN}Append New Node to Linked List${RESET}`);

    const linkedList = new LinkedList<number>();

    for (const value of LINKED_LIST_DATA) {
      linkedList.append(value);
    }

    console.debug(`${FOREGROUND_BLUE}Linked List Length: ${linkedList.length}${RESET}`);
    expect(linkedList.length).toBe(LINKED_LIST_DATA.length);
  });
});

describe(`Linked List TypeScript ${ALPHA} Test`, () => {
  console.info(`${FOREGROUND_GREEN}Linked List TypeScript ${ALPHA} Test${RESET}`);

  test("Find Node in Linked List", () => {
    console.info(`${FOREGROUND_GREEN}Find Node in Linked List${RESET}`);

    const linkedList = new LinkedList<number>();
  });
});
