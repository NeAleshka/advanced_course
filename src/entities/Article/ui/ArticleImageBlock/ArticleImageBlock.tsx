import { IArticleImageBlock } from 'entities/Article/types/article';
import { classNames } from 'shared/lib/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleImageBlock.module.scss';

interface ArticleImageBlockProps {
    block:IArticleImageBlock
    className?:string
}
const ArticleImageBlock = ({ block, className }:ArticleImageBlockProps) => (
    <div className={classNames(cls.articleWrap, {}, [className])}>
        <img src={block.src} alt="img" />

        {block.title && <Text text={block.title} />}
    </div>
);

export default ArticleImageBlock;
