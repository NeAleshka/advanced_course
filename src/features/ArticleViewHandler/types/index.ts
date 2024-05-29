import { ArticlesView } from 'pages/ArticlePage/model/types';

export interface ArticleViewHandlerProps {
    className?: string
    onViewClick: (newView: ArticlesView) => void
    view:ArticlesView
}
