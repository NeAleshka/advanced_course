declare module '*.scss' {
	const content: Record<string, string>;
	export default content;
}

declare module '*.svg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module 'src/assets/icons/*.svg' {
	import type React from 'react';

	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare const __IS__DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__:string;
