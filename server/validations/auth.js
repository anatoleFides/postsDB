import { body } from "express-validator"

export const registerValidation = [
  body('email', 'Не верный формат почты').isEmail(),
  body('password', 'Пароль должен быть не менее 5 символов').isLength({ min: 5 }),
  body('fullName', 'Укажите имя').isLength({ min: 3 }),
  body('avatarUrl', 'Не верная ссылка на аватарку').optional().isURL(),
]