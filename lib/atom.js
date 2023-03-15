import {atom, useAtom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

export const svgAtom = atomWithStorage('svgFile', false);
