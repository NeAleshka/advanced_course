import { ComponentType, lazy } from 'react';
import { ArticlePageProps } from 'pages/ArticlePage/ui/ArticlePage';

export const ArticlePageAsync = lazy<ComponentType<ArticlePageProps>>(async () => import('./ArticlePage'));
