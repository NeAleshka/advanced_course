import Code from 'shared/ui/Code/Code';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { CopyIcon } from 'shared/assets/icons';
import { useCopyToClipboard } from 'shared/lib/hooks';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { IArticleCodeBlock } from '../../types/article';
import cls from './ArcticleCodeBlock.module.scss';

interface ICodeBlockProps {
    className?: string;
    block:IArticleCodeBlock
}
const ArticleCodeBlock = ({ block, className }:ICodeBlockProps) => {
    const { copy } = useCopyToClipboard(block.code);
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.codeBlockWrap, {}, [className])}>
            <Button
                onClick={() => copy(block.code)}
                theme={ButtonTheme.CLEAR}
                className={cls.copyBtn}
                title={t('copy')}
            >
                <CopyIcon />
            </Button>
            <Code text={block.code} className={cls.codeBlock} />
        </div>
    );
};

export default ArticleCodeBlock;
