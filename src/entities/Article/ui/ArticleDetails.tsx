import { useLocation } from 'react-router-dom';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { articleReducers } from '../model/slice';

const reducers:ReducersList = {
    articleDetails: articleReducers,
};
const ArticleDetails = () => {
    const { search } = useLocation();
    return (
        <DynamicModuleLoader asyncReducers={reducers} removeAfterUnmount>
            <div>
                Article details
            </div>
        </DynamicModuleLoader>

    );
};

export default ArticleDetails;
