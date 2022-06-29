import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n 
  .use(LanguageDetector)  
  .use(initReactI18next)  
  .init({
    lng: 'ru',
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      ru: {
        translation: {
            description: {
                name: 'Обмен валюты',
                title: 'Что хотим поменять?',
                enter: "Введите сумму",
                get: "Что получаем:",
                error: 'Пока получаем только ошибку:',
                fix: 'Но мы уже начали ее исправлять!',
                load: 'Загружаем котировки...',
                for: 'за',
                total: "Итого:",
                actualy: "Информация актуальна на",
                more: "Узнать больше о курсах валют",
                back: "Назад",
                caption: "Похоже, котировки не подгрузились. Попробуйте перейти на",
                caption2: "главную страницу",
                all: "Все котировки:",
              }
        }
      },
      en: {
        translation: {
          description: {
            name: 'Currency exchange',
                title: 'What do you want to exchange?',
                enter: "Enter amount",
                get: "What we get:",
                error: 'Now we  get only an error:',
                fix: 'But we have already started to fix it!',
                load: 'Loading quotes...',
                for: 'for',
                total: "Total:",
                actualy: "The information is current as of",
                more: "Learn more about exchange rates",
                back: "Back",
                caption: "Looks like quotes didn't load. Try to go to the",
                caption2: "main page",
                all: "All quotes:",
          }
        }
      }
    }
  });

export default i18n;