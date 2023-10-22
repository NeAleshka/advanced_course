import { useLocation } from 'react-router-dom';

const ArticleDetails = () => {
    const { search } = useLocation();
    return (
        <div>
            Article details
        </div>
    );
};

export default ArticleDetails;
