1 урок
установили пакеты которые нам нужны(redux,react-redux,redux-thunk,react-hook-form,styled-components,react-router,yup,prop-types и json-server global)
преобразовали index.html
подчистили все файлы удалили лишние css файлы так как будем рабоать с styled-components и дали первый стиль для первого блочного элемента Div

---

урок 2
скачали иконочный шрифт,закинули в проект
в папке index.css импортировали то что мы закинули в проект,важно что в самом файле font-awesome.css изменили путь к файлам так как изменили название папки
познакомились с сайтом fontawesome потренировались с иконками(то зачем мы всё скачали)
сделали и закометили ветку с помощь git(BLOG-003)

---

урок 3
области хранения данных:
-база данных на json-server
-BFF
-редакс стор

сущности и приложение:
-пользователь : БД(список пользователей),BFF(ссесия текущего),стор(отображение в браузере)
-роль пользователя: БД(список ролей),BFF(сессия пользователя),стор(использование на клиенте)
-статья:БД(список статей),стор(отображение в браузере)
-коментарии:БД(список комментариев),стор(отображение в браузере)

таблицы БД:

- пользователи - users: id / login / password / registed_at / role_id
- роли - roles: id / name
  -статьи - posts: id / title / image_url / content / published_at
  -комметарии - comments: id / author_id / post_id / content

---

урок 4
Схема состояния на BFF:
-сессия текущего пользователя: login / password / role

Схема для редакс стора (на клиенте):
-user: id / login / roleId
-posts: массив post: id / title / imageUrl / publishedAt / commentsCount
-post: id / title /imageUrl / content / publishedAt / comments: массив comment: id / author / content / publishedAt
-users: массив user: id / login / registeredAt / role
