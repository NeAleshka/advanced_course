import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import { memo } from 'react';
import { IArticleTextBlock } from '../../types/article';

interface ITextBlockProps {
    className?: string;
    block:IArticleTextBlock
}
const ArticleTextBlock = ({ block, className }:ITextBlockProps) => (
    <div className={classNames('', {}, [className])}>
        {
            block?.title && <Text title={block.title} />
        }
        {
            // eslint-disable-next-line react/no-array-index-key
            block?.paragraphs.map((paragraph, index) => <Text key={index} text={paragraph} />)
        }

    </div>
);

export default memo(ArticleTextBlock);
