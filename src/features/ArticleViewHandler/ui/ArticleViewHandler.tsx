import { ArticlesView } from 'pages/ArticlePage/model/types';
import { BigView, SmallView } from 'shared/assets/icons';
import { Button } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { ArticleViewHandlerProps } from '../types';

const changeViewButtons = {
    [ArticlesView.BIG]: <BigView />,
    [ArticlesView.SMALL]: <SmallView />,
};
export const ArticleViewHandler = ({ className, onViewClick }:ArticleViewHandlerProps) => {
    const [view, setView] = useState<ArticlesView>(ArticlesView.SMALL);

    const onClick = () => {
        setView((prev) => (prev === ArticlesView.SMALL ? ArticlesView.BIG : ArticlesView.SMALL));
        onViewClick(view);
    };
    return (
        <Button
            square
            onClick={onClick}
        >
            {changeViewButtons[view]}
        </Button>
    );
};
