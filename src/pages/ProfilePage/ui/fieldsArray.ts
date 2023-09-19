import { type IInputField } from '../model/types';

export const inputFieldsArray: IInputField[] = [
    {
        fieldName: 'firstName',
        options: {
            minLength: {
                value: 2,
                message: 'Минимальная длина имени 2 буквы',
            },
        },
    },
    {
        fieldName: 'lastName',
        options: {
            minLength: {
                value: 2,
                message: 'Минимальная длина фамилии 2 буквы',
            },
        },
    },
    {
        fieldName: 'age',
        options: {
            required: {
                value: true,

                message: 'Поле не может быть пустым',
            },
            pattern: {
                value: /^\d+$/,
                message: 'Возраст должен содержать только цифры',
            },
        },
    },
    {
        fieldName: 'city',
        options: {
            minLength: {
                value: 2,
                message: 'Минимальная длина города 2 буквы',
            },
        },
    },
    {
        fieldName: 'login',
        options: {
            required: {
                value: true,
                message: 'Поле не может быть пустым',
            },
        },
    },
];
