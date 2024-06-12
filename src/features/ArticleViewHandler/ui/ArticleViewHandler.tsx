import { getArticlesView } from 'pages/ArticlePage/model/selectors';
import { ArticlesView } from 'pages/ArticlePage/model/types';
import { useSelector } from 'react-redux';
import { BigView, SmallView } from 'shared/assets/icons';
import { useAppDispatch } from 'shared/lib/hooks';
import { Button } from 'shared/ui/Button/Button';
import { articlesActions } from 'pages/ArticlePage/model/slice';

const changeViewButtons = {
    [ArticlesView.BIG]: <BigView />,
    [ArticlesView.SMALL]: <SmallView />,
};
export const ArticleViewHandler = () => {
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesView);
    const { setView } = articlesActions;

    const handleChangeView = () => (view === ArticlesView.SMALL
        ? dispatch(setView(ArticlesView.BIG)) : dispatch(setView(ArticlesView.SMALL)));

    return (
        <Button
            square
            onClick={handleChangeView}
        >
            {changeViewButtons[view]}
        </Button>
    );
};
