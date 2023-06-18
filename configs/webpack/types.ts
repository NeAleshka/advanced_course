export type BuildMode = 'production' | 'development';

export type BuildPaths = {
	entry: string;
	output: string;
	html: string;
	src: string;
};

export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPaths;
	port: number;
	isDev: boolean;
};

export type BuildENV = {
	port: number;
	mode: BuildMode;
};
