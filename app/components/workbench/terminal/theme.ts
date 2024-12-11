import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--startgpt-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--startgpt-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--startgpt-elements-terminal-textColor'),
    background: cssVar('--startgpt-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--startgpt-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--startgpt-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--startgpt-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--startgpt-elements-terminal-color-black'),
    red: cssVar('--startgpt-elements-terminal-color-red'),
    green: cssVar('--startgpt-elements-terminal-color-green'),
    yellow: cssVar('--startgpt-elements-terminal-color-yellow'),
    blue: cssVar('--startgpt-elements-terminal-color-blue'),
    magenta: cssVar('--startgpt-elements-terminal-color-magenta'),
    cyan: cssVar('--startgpt-elements-terminal-color-cyan'),
    white: cssVar('--startgpt-elements-terminal-color-white'),
    brightBlack: cssVar('--startgpt-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--startgpt-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--startgpt-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--startgpt-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--startgpt-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--startgpt-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--startgpt-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--startgpt-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
