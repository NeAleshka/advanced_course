import cls from './SideBar.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher';

type SideBarProps = {
	className?: string;
};

export const SideBar = (props: SideBarProps) => {
	const {className = ''} = props;
	const [collapsed, setCollapsed] = useState(true);
	const toggleCollapsed = () => {
		setCollapsed(prevState => !prevState);
	};

	return (
		<div
			data-testid={'sidebar'}
			className={classNames(cls.SideBar, {[cls.collapsed]: collapsed}, [
				className,
			])}
		>
			<button onClick={toggleCollapsed} data-testid={'toggle-btn'}>Toggle</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
