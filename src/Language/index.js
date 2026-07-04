import en from './en.json'
import ru from './ru.json'
import arm from './arm.json'

const savedLocale = localStorage.getItem('language');
export const defaultLocale = savedLocale || 'en'

export const language = {
    en,
    ru,
    arm
}