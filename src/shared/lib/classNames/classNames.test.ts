import {classNames} from 'shared/lib/classNames/classNames';

describe('classNames', () => {
	test('with main class only', () => {
		expect(classNames('someClass')).toBe('someClass');
	});
	test('with additional class', () => {
		const expected = 'someClass class1 class2';
		expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
	});
});
