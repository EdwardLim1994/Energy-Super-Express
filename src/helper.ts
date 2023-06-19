import { BREAKPOINT } from "./constants/breakpoint";

type direction = ">" | "<";

export const breakpoint = (breakpoint: BREAKPOINT, direction: direction) => {
	let key = "";
	switch (direction) {
		case ">":
			key = "min";
			break;
		case "<":
			key = "max";
			break;
	}

	return window.matchMedia(`only screen and (${key}-width: ${breakpoint})`)
		.matches;
};
