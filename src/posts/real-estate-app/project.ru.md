---
title: "VietLand - Приложение для поиска земельных участков"
introduction: "Современное веб-приложение для местного агентства по продаже недвижимости (Вьетнам). Разработано с применением высокопроизводительных статических компонентов Astro и стратегически размещенных островков компонентов React. Обеспечена низкая стоимость благодаря бесшовной интеграции с Contentful CMS и надежному хостингу на Netlify."
mainTag: избранные работы
tags:
  - Разработка веб-сайтов
  - React
  - Astro
  - Typescript
  - Tailwind
---

## Цели и Требования

Основной целью этого проекта было **помочь местному бизнесу установить прочную связь с потенциальными клиентами** и создать безупречное первое впечатление, в конечном итоге предоставив бизнесу определенное преимущество в условиях жесткой конкуренции на рынке.

Начальные ограничения, которые нам нужно было учесть:

- Удобный дизайн с пониманием местного языковых и культурных особенностей
- Конкурентоспособная производительность на мобильных устройствах
- Бесперебойная работа и несложные процессы управления контентом
- **Ограниченный бюджет** 😹

## Подход к Разработке

В данном конкретном случае подход заключался в том, чтобы **генерировать статические страницы**, а не полагаться на рендеринг на стороне клиента или сервера. Клиентский рендеринг был исключен из-за высокой значимости, придаваемой производительности на мобильных устройствах и оптимизации для поисковых систем (SEO). В то же время идея расходов на разработку/хостинг/управление серверной частью исключала и рендеринг на стороне сервера. Вместо чрезмерных инвестиций в серверную инфраструктуру, мы выбрали услуги headless CMS (с щедрыми бесплатными тарифами).

И, хотя статические страницы кажутся ... _**безжизненными**_, приложение было разработано, чтобы не выдавать статичную сущность! **Весь секрет - применение островков JS-интерактивных компонентов** там, где необходимо.

## Список Технологий

Этот проект был разработан с использованием тщательно отобранного набора современных технологий и инструментов. Основные из них перечислены ниже. Для полного обзора всех зависимостей, включая точные версии, вы можете ознакомиться с подробностями в файле [package.json](https://github.com/AnnaBurd/web-real-estate/blob/main/package.json).

| Название                                                                                                                                               | Применение                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| [![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat-square)](https://astro.build/)                           | Использован для генерации статических страниц с акцентом на быстрое время загрузки и оптимальную производительность.          |
| [![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat-square)](https://reactjs.org/)                           | Интегрирован стратегически для динамичного контента и интерактивных компонентов, обеспечивая живой пользовательский опыт.     |
| [![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat-square)](https://www.typescriptlang.org/) | Обеспечил надежность и масштабируемость кодовой базы, способствуя общей поддерживаемости приложения.                          |
| [![Contentful Badge](https://img.shields.io/badge/Contentful-2478CC?logo=contentful&logoColor=fff&style=flat-square)](https://www.contentful.com/)     | Выступил в качестве headless CMS, облегчая обновление и управление контентом.                                                 |
| [![Figma Badge](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat-square)](https://www.figma.com/)                         | Использован для совместной работы в процессе дизайна, обеспечивая цельный и визуально привлекательный интерфейс пользователя. |
| [![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat-square)](https://tailwindcss.com/) | Применен для создания стройного и отзывчивого дизайна, улучшая общую эстетику и удобство использования.                       |
| [![Leaflet Badge](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=fff&style=flat-square)](https://leafletjs.com/)                   | Интегрирован для интерактивных карт, улучшая пользовательский опыт и предоставляя ценную информацию на основе местоположения. |

## Вызовы и Решения

Путь воплощения этого проекта в жизнь был сопряжен с рядом проблем. Применяя стратегию [разделяй и властвуй](https://ru.wikipedia.org/wiki/%D0%A0%D0%B0%D0%B7%D0%B4%D0%B5%D0%BB%D1%8F%D0%B9_%D0%B8_%D0%B2%D0%BB%D0%B0%D1%81%D1%82%D0%B2%D1%83%D0%B9), я систематически решала каждую проблему, выполняя требования проекта, придерживаясь при этом бюджетных и временных ограничений. С моей точки зрения, чем больше трудностей, тем больше возможностей для инноваций и улучшений — каждое препятствие становится ступенькой на пути к общему росту и совершенству.

> Вызов 1: Дизайн, удобный для пользователя

[batdongan]: https://batdongsan.com.vn/ban-dat-dat-nen
[nhatot]: https://www.nhatot.com/mua-ban-dat
[alonhadat]: https://alonhadat.com.vn/

В качестве первого шага я провела **углубленный анализ ведущих решений на местном рынке**, таких, как [batdongan], [nhatot] и [alonhadat], чтобы выявить общие особенности, привычные местным пользователям. На всех этих платформах представлены обширные списки земельных участков с фотографиями и важной информацией, такой как цена, размер площади и адрес. Кроме того, они предлагают расширенные фильтры для настраиваемого поиска:

![batdongan - страница объявлений](/images/work/real-estate-app/examples/ex1-listing.png "batdongan - страница объявлений")
![nhatot - страница объявлений](/images/work/real-estate-app/examples/ex2-listing.png "nhatot - страница объявлений")
![alonhadat - страница объявлений](/images/work/real-estate-app/examples/ex3-listing.png "alonhadat - страница объявлений")

Хотя структура страниц с листингами на разных платформах довольно схожа, на главных страницах есть вариации, каждая из которых содержит основную информацию о площадке, подборку избранных предложений и различные навигационные ссылки.

На [этапе создания макета](https://www.figma.com/file/K40aNBOOoKdEaAuXSuK0UF/Panorama?type=design&node-id=270-6&mode=design) акцент был сделан на **сохранении этих общих элементов для интуитивного размещения информации и удобства навигации для пользователей**. Эти первоначальные макеты стали холстом для интеграции современных элементов дизайна и функционала, вдохновением для чего послужили такие платформы как Dribbble. Заметные улучшения включают в себя настраиваемую карту и функции, запрошенные клиентом, такие как слайдер, демонстрирующий продвигаемые участки.

Дизайн стал ключевым вызовом проекта, заняв наибольшее время по сравнению с остальными работами. Со временем появился набор вариантов:

- [первая версия](https://ssg-web-app.netlify.app/)
- [вторая версия _(адаптивный дизайн)_](https://ssg-web-responsive.netlify.app/)
- [текущая версия _(переработанный дизайн)_](https://deft-entremet-3bc804.netlify.app/)

Инструмент дизайна **Figma** ускорил превращение идей в **превью версии**. Его способность быстрого прототипирования сыграла решающую роль в улучшении **цикла обратной связи с клиентом**, гарантируя, что клиент остается хорошо информированным о ходе разработки, и способствуя совместному и обоснованному процессу принятия решений.

> Вызов 2: Конкурентоспособная производительность на мобильных устройствах

Так как [более чем 86% интернет-трафика](https://www.statista.com/statistics/804083/share-of-internet-traffic-by-device-vietnam/#:~:text=Distribution%20of%20internet%20traffic%20in%20Vietnam%20November%202022%2C%20by%20device&text=As%20of%20November%202022%2C%2086.58,and%20desktop%20computers%20that%20year.) на местном рынке, генерируется через смартфоны, оптимизация для мобильных устройств стала ключевым требованием для проекта.

Для решения этой проблемы я использовала двухсторонний подход. Во-первых, я применила **генерацию статических страниц с использованием Astro**, обеспечивая **минимальные задержки при генерации кода** как на стороне сервера, так и на стороне браузера. Параллельно была реализована **стратегия дизайна с приоритетом мобильных устройств** с использованием **Tailwind**. Каждый компонент изначально разрабатывался для мобильных страниц, а затем настраивался по мере необходимости для более крупных экранов с использованием стандартных медиа-запросов Tailwind.

![превью на различных размерах экрана](/images/work/real-estate-app/responsive-mockup.png "превью на различных размерах экрана")

Что касается оптимизации, отдельно стоит выделить **оптимизацию изображений**. В данном проекте, изображения были тщательно подогнаны для различных размеров экранов благодаря **Contentful Image API**.

![рейтинг производительности в Lighthouse для мобильных устройств {300x100}](/images/work/real-estate-app/lighthouse-score.jpg "рейтинг производительности в Lighthouse для мобильных устройств")

В целом, даже без дополнительных оптимизаций, получено веб-приложение, которое выглядит корректно на различных устройствах, но при этом обеспечивает оптимальную производительность. Выбранный стратегический подход успешно отвечает высокому спросу на мобильную производительность на местном рынке.

> Вызов 3: Бесперебойная работа и несложные процессы управления контентом

В поисках понимания того, как обеспечить бесперебойный процесс доставки контента и простой опыт управления контентом, я исследовала популярные платформы для создания сайтов, такие как [WordPress](https://wordpress.org/), [Joomla](https://www.joomla.org/) и [Shopify](https://www.shopify.com/). Широкая популярность этих платформ обусловлена, среди прочего, их **минимальными техническими требованиями**. Пользователи могут легко управлять контентом, вводя данные в соответствующие поля, нажимая `отправить` или `опубликовать` и немедленно просматривая обновленный веб-сайт.

Этот проект стремился к **аналогичному опыту управления контентом, но без тяжелого фронтенда**. Среди вариантов headless CMS **Contentful** оказался оптимальным выбором, превосходным с точки зрения пользовательского опыта и бюджета. Хотя первоначальные конфигурации требовали хотя бы минимального понимания концепций баз данных и типов данных, последующие обновления данных в режиме управления контентом стали такими же простыми, как заполнение веб-форм, включая форматирование текста.

![редактор контента](/images/work/real-estate-app/content-editor.jpg "редактор контента")

Назначенные контент-менеджеры теперь могут легко обновлять содержимое сайта и практически сразу же просматривать результаты, что повторяет удобство использования традиционных CMS-платформ.

> Вызов 4: Ограниченный бюджет

Решение бюджетной проблемы включало в себя использование щедрых бесплатных тарифов выбранных технологий. Этот подход позволил разработать и поставить высококачественный продукт при минимальных бюджетных ограничениях, сохраняя при этом значительный потенциал для будущей масштабируемости.

## Основные выводы 🍬

В итоге проект успешно расширил присутствие местного бизнеса в сфере недвижимости в онлайн сфере, обеспечивая новые контракты и производя положительное впечатление на потенциальных клиентов. Ценные уроки включают в себя важность точной расстановки приоритетов и активного взаимодействия с клиентами. В планах - устранение мелких ошибок и внедрение тестов как ключевые приоритеты для обеспечения долгосрочной стабильности и надежности в развитии проекта.

### Достигнутые результаты

Проект **успешно установил сильное онлайн-присутствие местного бизнеса в сфере недвижимости**, укрепив значимые связи с клиентами и преодолевая бюджетные ограничения.

В то время как работа по разработке продолжается для удовлетворения новых требований, проект уже принес значительные бизнес-результаты. Как минимум пять потенциальных клиентов выразили впечатление от _"профессионального внешнего вида сайта"_ и рассматривают возможность сотрудничества. Более того, **заключен новый контракт 🥂, и веб-сайт сыграл главную роль в первичной презентации земельного участка**. В целом, я довольна достигнутыми результатами.

### Извлеченные уроки

Как разработчик этого проекта, я извлекла ценные уроки, одним из которых является **важность точного определения приоритетов и активного участия в обратной связи с клиентами**. Разработка некоторого функционала, реализация которого потребовала значительного времени и усилий, в конечном итоге оказалась пустой тратой времени. Так, целые разделы сайта были удалены как _'несущественные для бизнеса'_. Одновременно непредвиденные требования бизнеса потребовали дополнительных доработок. С более эффективной стратегией планирования есть потенциал для существенного сокращения времени разработки на более чем 20%.

Данный опыт подчеркивает **динамический характер проектных требований** и важность эффективных коммуникаций и адаптивного планирования для достижения оптимальных результатов.

### Планы на будущее

Работа над проектом продолжается, с основным акцентом на устранение мелких проблем, таких как слайдер изображений для мобильных устройств или обеспечение доступности.

Одной из функций, которую я намеренно пропустила как одиночный разработчик, были тесты. Тем не менее, оглядываясь назад, я осознала, что **по мере развития проекта даже минимальные изменения могут потенциально повлиять на уже реализованные функции**. Без каких-либо средств обеспечения безопасности при объединении PR, мне приходится выполнять ручные проверки после каждого обновления или ждать сообщения об ошибках 🫣. Следовательно, **внедрение тестов стало следующим наиважнейшим этапом на горизонте для улучшения стабильности проекта и поддержания надежного процесса разработки**.
