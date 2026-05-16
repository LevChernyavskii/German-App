const topics = [
    {
        day: 1,
        type: "VOCABULARY_DAY",
        topic: "Еда и основные продукты",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 2,
        type: "VOCABULARY_DAY",
        topic: "Приветствия и фразы вежливости",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 3,
        type: "VOCABULARY_DAY",
        topic: "Хобби и свободное время",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 4,
        type: "GRAMMAR_DAY",
        topic: "Глаголы (haben, suchen, brauchen)",
        instruction: "Разбери спряжение основных глаголов и их управление в предложениях",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 5,
        type: "VOCABULARY_DAY",
        topic: "Напитки и заказ в кафе",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 6,
        type: "VOCABULARY_DAY",
        topic: "Семья и родственники",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 7,
        type: "VOCABULARY_DAY",
        topic: "Профессии и работа",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 8,
        type: "GRAMMAR_DAY",
        topic: "Притяжательные местоимения (mein, dein)",
        instruction: "Изучи, как указывать на принадлежность предметов разного рода",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 9,
        type: "VOCABULARY_DAY",
        topic: "Домашние дела и распорядок",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 10,
        type: "VOCABULARY_DAY",
        topic: "Личные вещи и аксессуары",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 11,
        type: "VOCABULARY_DAY",
        topic: "Транспорт и поездки по городу",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 12,
        type: "GRAMMAR_DAY",
        topic: "Модальные глаголы (können, wollen, müssen)",
        instruction: "Разбери порядок слов в предложении при использовании модальных глаголов",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 13,
        type: "VOCABULARY_DAY",
        topic: "Офисная техника и гаджеты",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 14,
        type: "VOCABULARY_DAY",
        topic: "Одежда и мода",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 15,
        type: "VOCABULARY_DAY",
        topic: "Мебель и названия комнат",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 16,
        type: "GRAMMAR_DAY",
        topic: "Предлоги места (Wechselpräpositionen)",
        instruction: "Разбери, как меняются артикли после 'in', 'auf', 'an', когда мы отвечаем на вопрос 'Где?' (Dativ)",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 17,
        type: "VOCABULARY_DAY",
        topic: "Здоровье и медицина",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 18,
        type: "VOCABULARY_DAY",
        topic: "Животные",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 19,
        type: "VOCABULARY_DAY",
        topic: "Чувства и эмоции",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 20,
        type: "GRAMMAR_DAY",
        topic: "Личные местоимения в Akkusativ и Dativ",
        instruction: "Изучи формы местоимений (mich/mir, dich/dir) и их использование с глаголами",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 21,
        type: "VOCABULARY_DAY",
        topic: "Спорт и активный отдых",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 22,
        type: "VOCABULARY_DAY",
        topic: "Цвета и внешность",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 23,
        type: "VOCABULARY_DAY",
        topic: "Праздники и подарки",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 24,
        type: "GRAMMAR_DAY",
        topic: "Императив (Повелительное наклонение)",
        instruction: "Разбери, как давать команды и просьбы (Komm!, Lies!, Machen Sie!)",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 25,
        type: "VOCABULARY_DAY",
        topic: "Покупки и упаковка",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 26,
        type: "VOCABULARY_DAY",
        topic: "Овощи и фрукты",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 27,
        type: "VOCABULARY_DAY",
        topic: "Школа и обучение",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 28,
        type: "GRAMMAR_DAY",
        topic: "Числительные и цены",
        instruction: "Потренируйся в счете до миллиона и правильном произношении цен в евро",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 29,
        type: "VOCABULARY_DAY",
        topic: "Дни недели и время суток",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 30,
        type: "VOCABULARY_DAY",
        topic: "Наречия времени и распорядок",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 31,
        type: "VOCABULARY_DAY",
        topic: "Геометрические формы и параметры",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 32,
        type: "GRAMMAR_DAY",
        topic: "Время и часы (Uhrzeit)",
        instruction: "Разбери официальный и разговорный способы называть время (Viertel nach/vor, halb)",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 33,
        type: "VOCABULARY_DAY",
        topic: "Путешествия и планирование отпуска",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 34,
        type: "VOCABULARY_DAY",
        topic: "Времена года и месяцы",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 35,
        type: "VOCABULARY_DAY",
        topic: "Вокзал, отель и багаж",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 36,
        type: "GRAMMAR_DAY",
        topic: "Степени сравнения прилагательных",
        instruction: "Изучи формы сравнения (gut - besser - am besten, viel - mehr - am meisten)",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 37,
        type: "VOCABULARY_DAY",
        topic: "Городские службы и полиция",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 38,
        type: "VOCABULARY_DAY",
        topic: "Природа и ландшафты",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 39,
        type: "VOCABULARY_DAY",
        topic: "Экскурсии и активный отдых",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 40,
        type: "GRAMMAR_DAY",
        topic: "Прошедшее время Perfekt (глаголы движения)",
        instruction: "Разбери образование Perfekt со вспомогательным глаголом 'sein' для глаголов перемещения",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 41,
        type: "VOCABULARY_DAY",
        topic: "Воспоминания и события прошлого",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 42,
        type: "VOCABULARY_DAY",
        topic: "Музыка и музыкальные инструменты",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 43,
        type: "VOCABULARY_DAY",
        topic: "Ресторан: от закусок до десертов",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 44,
        type: "GRAMMAR_DAY",
        topic: "Закрепление Perfekt (sein vs haben)",
        instruction: "Потренируйся выбирать правильный вспомогательный глагол для прошедшего времени",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 45,
        type: "VOCABULARY_DAY",
        topic: "Ориентация в пространстве и стороны света",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 46,
        type: "VOCABULARY_DAY",
        topic: "Части тела (основные)",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 47,
        type: "VOCABULARY_DAY",
        topic: "Жилье и поиск квартиры",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 48,
        type: "GRAMMAR_DAY",
        topic: "Сложносочиненные предложения (und, aber, oder, denn)",
        instruction: "Разбери союзы, которые не меняют порядок слов в предложении",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 49,
        type: "VOCABULARY_DAY",
        topic: "Компьютер и интернет",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 50,
        type: "VOCABULARY_DAY",
        topic: "Вечеринки и социальные события",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 51,
        type: "VOCABULARY_DAY",
        topic: "Погода и природные явления",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 52,
        type: "GRAMMAR_DAY",
        topic: "Части тела и визит к врачу",
        instruction: "Изучи управление глагола 'weh tun' и использование Dativ для обозначения боли",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 53,
        type: "VOCABULARY_DAY",
        topic: "Спорт и тренировки",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 54,
        type: "VOCABULARY_DAY",
        topic: "Отпуск и достопримечательности",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 55,
        type: "VOCABULARY_DAY",
        topic: "Природа и окружающая среда",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 56,
        type: "GRAMMAR_DAY",
        topic: "Модальный глагол 'dürfen' и правила",
        instruction: "Разбери значение разрешения и запрета (man darf / man darf nicht)",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
    {
        day: 57,
        type: "VOCABULARY_DAY",
        topic: "Работа и корпоративная культура",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 58,
        type: "VOCABULARY_DAY",
        topic: "Общественный транспорт и расписание",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 59,
        type: "VOCABULARY_DAY",
        topic: "Празднование и приглашения",
        instruction: "выучить слова",
        videoTime: 40,
        grammarTime: 0,
        wordsCount: 10,
    },
    {
        day: 60,
        type: "GRAMMAR_DAY",
        topic: "Глаголы с отделяемыми приставками (anziehen, aufstehen)",
        instruction: "Закрепи навык разделения глагола в настоящем времени (Präsens)",
        videoTime: 20,
        grammarTime: 25,
        wordsCount: 10,
    },
]

const words = {
    1: "🔵 der Apfel. die Äpfel. апфель. Ich esse einen Apfel, яблоко. Я ем яблоко; 🔴 die Butter. буттер. Das ist frische Butter, масло. Это свежее масло; 🟢 das Brot. die Brote. брот. Wir kaufen heute Brot, хлеб. Мы покупаем сегодня хлеб; 🟢 das Ei. die Eier. ай. Möchten Sie ein Ei?, яйцо. Вы желаете яйцо?; 🔵 der Käse. кэзэ. Ich mag diesen Käse, сыр. Мне нравится этот сыр; 🟢 das Müsli. die Müslis. мюзли. Er isst morgens Müsli, мюсли. Он ест по утрам мюсли; 🔴 die Marmelade. die Marmeladen. мармеладэ. Hier ist süße Marmelade, джем. Здесь сладкий джем; 🔴 die Milch. мильхь. Trinken Sie kalte Milch?, молоко. Вы пьете холодное молоко?; 🔵 der Zucker. цуккер. Ich brauche keinen Zucker, сахар. Мне не нужен сахар; 🔵 der Schinken. шинкен. Das ist leckerer Schinken, ветчина. Это вкусная ветчина;",

    2: "Hallo. халло. Hallo, wie geht es?, привет. Привет, как дела?; Guten Tag. гутен таг. Guten Tag, Herr Müller!, добрый день. Добрый день, господин Мюллер!; Tschüss. тюс. Tschüss, bis morgen!, пока. Пока, до завтра!; Danke schön. данкэ шён. Danke schön für alles, большое спасибо. Большое спасибо за всё; Bitte. биттэ. Bitte, nehmen Sie Platz, пожалуйста. Пожалуйста, присаживайтесь; Entschuldigung. энтшульдигунг. Entschuldigung, ich habe eine Frage, извините. Извините, у меня есть вопрос; Willkommen. вилькоммен. Willkommen in unserer Stadt, добро пожаловать. Добро пожаловать в наш город; Auf Wiedersehen. ауф видерзеен. Auf Wiedersehen, gute Reise!, до свидания. До свидания, счастливого пути!; Wie geht es?. ви гейт эс. Wie geht es Ihnen heute?, как дела. Как у Вас сегодня дела?; Bis bald. бис бальт. Bis bald, meine Freunde!, до скорого. До скорого, мои друзья!;",

    3: "🔵 der Sport. die Sportarten. шпорт. Ich mache jeden Tag Sport, спорт. Я каждый день занимаюсь спортом; 🔴 die Musik. музик. Wir hören leise Musik, музыка. Мы слушаем тихую музыку; lesen. лезен. Ich lese gerne Bücher, читать. Я охотно читаю книги; schwimmen. швиммен. Er schwimmt im großen See, плавать. Он плавает в большом озере; reisen. райзен. Wir reisen oft zusammen, путешествовать. Мы часто путешествуем вместе; 🔵 der Film. die Filme. фильм. Wir schauen einen Film, фильм. Мы смотрим фильм; kochen. кохен. Du kochst sehr gut, готовить. Ты очень хорошо готовишь; 🟢 das Hobby. die Hobbys. хобби. Mein Hobby ist Tanzen, хобби. Мое хобби — танцы; tanzen. танцен. Sie tanzt die ganze Nacht, танцевать. Она танцует всю ночь; fotografieren. фотографрирен. Er fotografiert die Natur, фотографировать. Он фотографирует природу;",

    4: "haben. хабен. Ich habe viel Zeit, иметь. У меня много времени; suchen. зухен. Ich suche meinen Schlüssel, искать. Я ищу свой ключ; brauchen. браухен. Ich brauche deine Hilfe, нуждаться. Мне нужна твоя помощь; finden. финден. Ich finde den Weg nicht, находить. Я не нахожу дорогу; kaufen. кауфен. Ich kaufе ein neues Auto, покупать. Я покупаю новую машину; hören. хёрен. Ich höre eine CD, слушать. Я слушаю CD; 🔵 der Hund. die Hunde. хунд. Ich habe einen Hund, собака. У меня есть собака; 🔴 die Tasche. die Taschen. ташэ. Er sucht seine Tasche, сумка. Он ищет свою сумку; 🟢 das Auto. die Autos. ауто. Wir brauchen ein Auto, машина. Нам нужна машина; 🔵 der Schlüssel. die Schlüssel. шлюссель. Hast du den Schlüssel?, ключ. У тебя есть ключ?;",

    5: "🔵 der Kaffee. die Kaffees. каффэ. Ein Kaffee bitte!, кофе. Один кофе, пожалуйста!; 🔵 der Tee. die Tees. тээ. Möchtest du grünen Tee?, чай. Хочешь зеленого чая?; 🟢 das Wasser. вассер. Eine Flasche Wasser bitte, вода. Бутылку воды, пожалуйста; 🔵 der Saft. die Säfte. зафт. Ich trinke Apfelsaft, сок. Я пью яблочный сок; 🟢 das Bier. die Biere. бийер. Ein kaltes Bier bitte, пиво. Одно холодное пиво, пожалуйста!; 🔵 der Wein. die Weine. вайн. Ein Glas Rotwein bitte, вино. Бокал красного вина, пожалуйста; bestellen. бештеллен. Wir bestellen das Essen, заказать. Мы заказываем еду; bezahlen. бецален. Ich möchte jetzt bezahlen, оплатить. Я хочу сейчас оплатить; 🔴 die Rechnung. die Rechnungen. рехнунг. Die Rechnung bitte!, счёт. Счёт, пожалуйста!; 🔴 die Speisekarte. die Speisekarten. шпайзекартэ. Bringen Sie die Speisekarte, меню. Принесите меню;",

    6: "🔵 der Vater. die Väter. фатер. Mein Vater arbeitet viel, отец. Мой отец много работает; 🔴 die Mutter. die Mütter. муттер. Meine Mutter ist zu Hause, мать. Моя мать дома; 🔵 der Bruder. die Brüder. брудер. Hast du einen Bruder?, брат. У тебя есть брат?; 🔴 die Schwester. die Schwestern. швестер. Meine Schwester studiert Medizin, сестра. Моя сестра изучает медицину; 🔵 der Sohn. die Söhne. зон. Das ist mein Sohn, сын. Это мой сын; 🔴 die Tochter. die Töchter. тохтер. Deine Tochter ist klein, дочь. Твоя дочь маленькая; 🔴 die Oma. die Omas. ома. Meine Oma wohnt hier, бабушка. Моя бабушка живет здесь; 🔵 der Opa. die Opas. опа. Mein Opa liest Zeitung, дедушка. Мой дедушка читает газету; 🔴 die Eltern. эльтерн. Wo wohnen deine Eltern?, родители. Где живут твои родители?; 🟢 das Kind. die Kinder. кинд. Das Kind schläft ruhig, ребёнок. Ребёнок спокойно спит;",

    7: "🔵 der Lehrer. die Lehrer. лерер. Der Lehrer erklärt alles, учитель. Учитель всё объясняет; 🔵 der Arzt. die Ärzte. арцт. Der Arzt kommt bald, врач. Врач скоро придет; 🔵 der Verkäufer. die Verkäufer. феркойфер. Der Verkäufer ist nett, продавец. Продавец милый; 🔵 der Koch. die Köche. кох. Der Koch macht Suppe, повар. Повар делает суп; 🔵 der Kellner. die Kellner. кельнер. Der Kellner bringt Kaffee, официант. Официант приносит кофе; 🔴 die Arbeit. die Arbeiten. арбайт. Die Arbeit ist interessant, работа. Работа интересная; arbeiten. арбайтен. Wo arbeitest du?, работать. Где ты работаешь?; 🔵 der Job. die Jobs. джоб. Ich liebe meinen Job, работа. Я люблю свою работу; 🔵 der Ingenieur. die Ingenieure. инжениёр. Er ist ein Ingenieur, инженер. Он инженер; 🔵 der Manager. die Manager. менеджер. Unser Manager ist beschäftigt, менеджер. Наш менеджер занят;",

    8: "mein. майн. Das ist mein Haus, мой. Это мой дом; dein. дайн. Wo ist dein Buch?, твой. Где твоя книга?; sein. зайн. Das ist sein Auto, его. Это его машина; ihr. ир. Das ist ihr Kind, её. Это её ребёнок; unser. унзер. Das ist unser Garten, наш. Это наш сад; euer. ойер. Wo ist euer Haus?, ваш. Где ваш дом?; ihr. ир. Das sind ihre Kinder, их. Это их дети; Ihr. ир. Wie ist Ihr Name?, Ваш. Как Ваше имя?; 🟢 das Haus. die Häuser. хаус. Mein Haus ist groß, дом. Мой дом большой; 🔴 die Uhr. die Uhren. ур. Deine Uhr ist schön, часы. Твои часы красивые;",

    9: "aufräumen. ауфроймен. Ich räume das Zimmer auf, убираться. Я убираю комнату; kochen. кохен. Wir kochen eine Suppe, готовить. Мы готовим суп; schlafen. шлафен. Das Baby schläft schon, спать. Малыш уже спит; waschen. вашен. Ich wasche meine Hände, мыть/стирать. Я мою свои руки; bügeln. бюгельн. Er bügelt das Hemd, гладить. Он гладит рубашку; putzen. путцен. Ich putze die Zähne, чистить. Я чищу зубы; essen. эссен. Wir essen jetzt Pizza, есть. Мы едим сейчас пиццу; trinken. тринкен. Er trinkt kaltes Wasser, пить. Он пьет холодную воду; duschen. душен. Ich dusche jeden Morgen, принимать душ. Я принимаю душ каждое утро; wohnen. вонен. Wo wohnst du jetzt?, жить. Где ты сейчас живешь?;",

    10: "🔵 der Pass. die Pässe. пасс. Hier ist mein Pass, паспорт. Вот мой паспорт; 🔴 die Brille. die Brillen. бриллэ. Ich brauche eine Brille, очки. Мне нужны очки; 🔵 der Geldbeutel. die Geldbeutel. гельдбойтель. Wo ist mein Geldbeutel?, кошелёк. Где мой кошелёк?; 🟢 das Handy. die Handys. хэнди. Mein Handy ist neu, мобильный телефон. Мой телефон новый; 🔵 der Lippenstift. die Lippenstifte. липпенштифт. Das ist ihr Lippenstift, помада. Это её помада; 🔵 der Kamm. die Kämme. камм. Hast du einen Kamm?, расчёска. У тебя есть расчёска?; 🔴 die Fahrkarte. die Fahrkarten. фаркартэ. Hier ist die Fahrkarte, билет. Вот билет; 🔵 der Regenschirm. die Regenschirme. регенширм. Nimm den Regenschirm mit, зонт. Возьми зонт с собой; 🟢 das Buch. die Bücher. бух. Ich lese das Buch, книга. Я читаю книгу; 🔵 der Kuli. die Kulis. кули. Gib mir den Kuli, ручка. Дай мне ручку;",

    11: "🔵 der Bus. die Busse. бус. Der Bus kommt pünktlich, автобус. Автобус приходит вовремя; 🔵 der Zug. die Züge. цуг. Der Zug fährt ab, поезд. Поезд отправляется; 🟢 das Fahrrad. die Fahrräder. фаррад. Er fährt mit dem Fahrrad, велосипед. Он едет на велосипеде; 🔴 die U-Bahn. die U-Bahnen. у-бан. Die U-Bahn ist schnell, метро. Метро быстрое; 🟢 das Flugzeug. die Flugzeuge. флюгцойг. Das Flugzeug landet jetzt, самолет. Самолет сейчас приземляется; 🟢 das Schiff. die Schiffe. шифф. Das Schiff ist im Hafen, корабль. Корабль в порту; 🔴 die Straßenbahn. die Straßenbahnen. штрассенбан. Die Straßenbahn hält hier, трамвай. Трамвай останавливается здесь; 🔵 der Bahnhof. die Bahnhöfe. банхоф. Wo ist der Bahnhof?, вокзал. Где вокзал?; fahren. фарен. Wir fahren nach Hause, ехать. Мы едем домой; fliegen. флиген. Wir fliegen nach Berlin, лететь. Мы летим в Берлин;",

    12: "können. кённен. Ich kann Deutsch sprechen, мочь. Я могу говорить по-немецки; wollen. воллен. Ich will Eis essen, хотеть. Я хочу съесть мороженое; müssen. мюссен. Er muss heute arbeiten, быть должным. Он должен сегодня работать; dürfen. дюрфен. Hier darf man parken, иметь разрешение. Здесь можно парковаться; sollen. золлен. Du sollst mehr schlafen, следует. Тебе следует больше спать; mögen. мёген. Ich mag diese Musik, любить/нравиться. Мне нравится эта музыка; möchten. мёхтен. Ich möchte einen Kaffee, хотел бы. Я хотел бы кофе; 🔴 die Sprache. die Sprachen. шпрахэ. Ich lerne eine Sprache, язык. Я учу язык; 🔵 der Wunsch. die Wünsche. вунш. Das ist mein Wunsch, желание. Это мое желание; 🔴 die Hilfe. хильфэ. Er braucht Hilfe, помощь. Ему нужна помощь;",

    13: "🔵 der Computer. die Computer. компютер. Der Computer ist alt, компьютер. Компьютер старый; 🔵 der Drucker. die Drucker. друккер. Der Drucker druckt nicht, принтер. Принтер не печатает; 🔴 die Tastatur. die Tastaturen. тастатур. Die Tastatur ist kaputt, клавиатура. Клавиатура сломана; 🔴 die Maus. die Mäuse. маус. Wo ist die Maus?, мышь. Где мышь?; 🔵 der Monitor. die Monitore. монитор. Der Monitor ist groß, монитор. Монитор большой; 🟢 das Papier. die Papiere. папир. Ich brauche mehr Papier, бумага. Мне нужно больше бумаги; 🔵 der Kopierer. die Kopierer. копирер. Der Kopierer steht dort, ксерокс. Ксерокс стоит там; 🟢 das Telefon. die Telefone. телефон. Das Telefon klingelt laut, телефон. Телефон громко звонит; 🟢 das Tablet. die Tablets. таблет. Er hat ein Tablet, планшет. У него есть планшет; 🔵 der Laptop. die Laptops. лэптоп. Mein Laptop ist leicht, ноутбук. Мой ноутбук легкий;",

    14: "🟢 das T-Shirt. die T-Shirts. ти-шёрт. Das T-Shirt ist blau, футболка. Футболка синяя; 🔴 die Hose. die Hosen. хозэ. Die Hose ist kurz, брюки. Брюки короткие; 🟢 das Kleid. die Kleider. клайд. Das Kleid ist elegant, платье. Платье элегантное; 🔵 der Rock. die Röcke. рок. Sie trägt einen Rock, юбка. Она носит юбку; 🔴 die Jacke. die Jacken. яккэ. Die Jacke ist warm, куртка. Куртка теплая; 🔵 der Schuh. die Schuhe. шу. Wo ist mein Schuh?, туфля. Где моя туфля?; 🔵 der Hut. die Hüte. хут. Er trägt einen Hut, шляпа. Он носит шляпу; 🔴 die Bluse. die Blusen. блузэ. Die Bluse ist weiß, блузка. Блузка белая; 🔵 der Mantel. die Mäntel. мантель. Der Mantel ist schwarz, пальто. Пальто черное; 🔵 der Pullover. die Pullover. пулловер. Der Pullover ist weich, свитер. Свитер мягкий;",

    15: "🔵 der Tisch. die Tische. тиш. Der Tisch ist rund, стол. Стол круглый; 🔵 der Stuhl. die Stühle. штуль. Der Stuhl ist bequem, стул. Стул удобный; 🔵 der Schrank. die Schränke. шранк. Der Schrank ist offen, шкаф. Шкаф открыт; 🟢 das Bett. die Betten. бетт. Das Bett ist groß, кровать. Кровать большая; 🔴 die Küche. die Küchen. кюхэ. Die Küche ist modern, кухня. Кухня современная; 🟢 das Wohnzimmer. die Wohnzimmer. вонциммер. Das Wohnzimmer ist hell, гостиная. Гостиная светлая; 🟢 das Bad. die Bäder. бад. Das Bad ist sauber, ванная. Ванная чистая; 🟢 das Schlafzimmer. die Schlafzimmer. шлафциммер. Das Schlafzimmer ist klein, спальня. Спальня маленькая; 🟢 das Regal. die Regale. регаль. Das Regal ist neu, полка. Полка новая; 🔵 der Sessel. die Sessel. зессель. Der Sessel ist gemütlich, кресло. Кресло уютное;",

    16: "in. ин. Ich bin in dem Park, в. Я в парке; auf. ауф. Das Buch liegt auf dem Tisch, на. Книга лежит на столе; an. ан. Das Bild hängt an der Wand, на (вертикали). Картина висит на стене; hinter. хинтер. Der Garten ist hinter dem Haus, за. Сад находится за домом; vor. фор. Das Auto steht vor der Garage, перед. Машина стоит перед гаражом; neben. небен. Die Post ist neben der Bank, рядом с. Почта находится рядом с банком; unter. унтер. Die Katze schläft unter dem Bett, под. Кошка спит под кроватью; zwischen. цвишен. Ich sitze zwischen meinen Freunden, между. Я сижу между моими друзьями; über. юбер. Die Lampe hängt über dem Tisch, над. Лампа висит над столом; 🔴 die Ecke. die Ecken. экке. Wir treffen uns an der Ecke, угол. Мы встретимся на углу;",

    17: "🟢 das Leben. die Leben. лебен. Das Leben in Berlin ist laut, жизнь. Жизнь в Берлине шумная; 🔴 die Gesundheit. гезундхайт. Gesundheit ist das wichtigste Thema, здоровье. Здоровье — самая важная тема; 🔴 die Zeit. die Zeiten. цайт. Hast du heute Zeit für mich?, время. У тебя есть сегодня время для меня?; 🔵 der Stress. штрэсс. Ich habe viel Stress bei der Arbeit, стресс. У меня сильный стресс на работе; 🟢 das Krankenhaus. die Krankenhäuser. кранкенхаус. Er arbeitet im Krankenhaus, больница. Он работает в больнице; 🔴 die Apotheke. die Apotheken. апотэкэ. Die Apotheke ist heute geschlossen, аптека. Аптека сегодня закрыта; 🔵 der Termin. die Termine. термин. Ich habe einen Termin beim Arzt, запись. У меня запись к врачу; 🔴 die Verspätung. die Verspätungen. фершпетунг. Der Zug hat leider Verspätung, опоздание. Поезд, к сожалению, опаздывает; gesund. гезунд. Obst zu essen ist sehr gesund, здоровый. Есть фрукты очень полезно; krank. кранк. Mein Kollege ist heute krank, больной. Мой коллега сегодня болен;",

    18: "🔵 der Hund. die Hunde. хунд. Mein Hund läuft im Garten, собака. Моя собака бегает в саду; 🔴 die Katze. die Katzen. катцэ. Die Katze schläft auf dem Sofa, кошка. Кошка спит на диване; 🟢 das Pferd. die Pferde. пферд. Das Pferd ist sehr schnell, лошадь. Лошадь очень быстрая; 🔴 die Kuh. die Kühe. ку. Die Kuh gibt uns Milch, корова. Корова дает нам молоко; 🟢 das Schwein. die Schweine. швайн. Das Schwein lebt auf dem Bauernhof, свинья. Свинья живет на ферме; 🟢 das Schaf. die Schafe. шаф. Das Schaf hat warme Wolle, овца. У овцы теплая шерсть; 🔵 der Vogel. die Vögel. фогель. Der Vogel singt ein schönes Lied, птица. Птица поет красивую песню; 🔴 die Maus. die Mäuse. маус. Die Maus frisst den Käse, мышь. Мышь ест сыр; 🔵 der Fisch. die Fische. фиш. Der Fisch schwimmt im Wasser, рыба. Рыба плавает в воде; 🔵 der Elefant. die Elefanten. элефант. Der Elefant ist ein großes Tier, слон. Слон — большое животное;",

    19: "froh. фро. Ich bin froh dich zu sehen, радостный. Я рад тебя видеть; traurig. трауриг. Warum bist du so traurig?, грустный. Почему ты такой грустный?; glücklich. глюклих. Sie ist eine glückliche Frau, счастливый. Она счастливая женщина; böse. бёзэ. Sei bitte nicht böse auf mich, злой. Пожалуйста, не сердись на меня; müde. мюдэ. Nach dem Sport bin ich müde, усталый. После спорта я устал; langweilig. лангвайлиг. Dieser Film ist total langweilig, скучный. Этот фильм совершенно скучный; 🔴 die Angst. die Ängste. ангст. Er hat Angst vor Spinnen, страх. Он боится пауков; nervös. нервёз. Vor der Prüfung bin ich nervös, нервный. Перед экзаменом я нервничаю; überrascht. юберрашт. Ich bin überrascht über das Geschenk, удивленный. Я удивлен подарку; stolz. штольц. Ich bin stolz auf meine Arbeit, гордый. Я горжусь своей работой;",

    20: "mich. михь. Er besucht mich am Wochenende, меня. Он навестит меня на выходных; mir. мир. Gib mir bitte deine Hand, мне. Дай мне, пожалуйста, свою руку; dich. дихь. Ich liebe dich von ganzem Herzen, тебя. Я люблю тебя всем сердцем; dir. дир. Wie geht es dir heute?, тебе. Как твои дела сегодня?; ihn. ин. Ich sehe ihn jeden Tag im Büro, его. Я вижу его каждый день в офисе; ihm. им. Ich helfe ihm bei der Hausaufgabe, ему. Я помогаю ему с домашним заданием; uns. унс. Das Auto gehört uns, нас/нам. Эта машина принадлежит нам; euch. ойх. Ich danke euch für die Hilfe, вас/вам. Я благодарю вас за помощь; sie. зи. Ich kenne sie schon viele Jahre, их/её. Я знаю их/её уже много лет; Ihnen. инен. Ich schreibe Ihnen morgen eine E-Mail, Вам. Я напишу Вам завтра имейл;",

    21: "🔵 der Ball. die Bälle. балль. Wir spielen mit dem Ball, мяч. Мы играем с мячом; 🔵 der Sport. die Sportarten. шпорт. Sport ist mein liebstes Hobby, спорт. Спорт — моё любимое хобби; trainieren. тренирирен. Er trainiert jeden Tag im Studio, тренироваться. Он тренируется каждый день в студии; 🟢 das Tor. die Tore. тор. Er schießt ein wichtiges Tor, гол. Он забивает важный гол; gewinnen. гевиннен. Wir wollen das Spiel gewinnen, выигрывать. Мы хотим выиграть игру; verlieren. ферлирен. Manchmal muss man auch verlieren, проигрывать. Иногда нужно уметь и проигрывать; laufen. лауфен. Ich laufe morgens im Wald, бегать. Я бегаю по утрам в лесу; 🔴 die Mannschaft. die Mannschaften. манншафт. Unsere Mannschaft spielt sehr gut, команда. Наша команда играет очень хорошо; 🔵 der Tennisschläger. die Tennisschläger. тэннисшлегер. Mein Tennisschläger ist neu, ракетка. Моя теннисная ракетка новая; 🔵 der Ski. die Skier. ши. Im Winter fahren wir oft Ski, лыжа. Зимой мы часто катаемся на лыжах;",

    22: "blau. блау. Der Himmel ist heute strahlend blau, синий. Небо сегодня ярко-синее; rot. рот. Das ist ein rotes Kleid, красный. Это красное платье; grün. грюн. Die Bäume im Park sind grün, зеленый. Деревья в парке зеленые; gelb. гельб. Die Zitrone ist sehr gelb, желтый. Лимон очень желтый; schwarz. шварц. Er trägt eine schwarze Brille, черный. Он носит черные очки; weiß. вайс. Das Papier ist weiß und sauber, белый. Бумага белая и чистая; 🟢 das Gesicht. die Gesichter. гезихт. Sie hat ein freundliches Gesicht, лицо. У нее красивое лицо; 🔵 der Bart. die Bärte. барт. Mein Vater trägt einen Bart, борода. Мой отец носит бороду; groß. грос. Er ist ein großer Mann, высокий. Он высокий мужчина; schlank. шланк. Das Model ist sehr schlank, стройный. Модель очень стройная;",

    23: "🔵 der Geburtstag. die Geburtstage. гебуртстаг. Herzlichen Glückwunsch zum Geburtstag!, день рождения. С днем рождения!; 🟢 das Geschenk. die Geschenke. гешенк. Das ist ein Geschenk für dich, подарок. Это подарок для тебя; feiern. файерн. Wir feiern heute eine große Party, праздновать. Мы празднуем сегодня большую вечеринку; 🔵 der Gast. die Gäste. гаст. Wir haben heute viele Gäste, гость. У нас сегодня много гостей; 🟢 das Fest. die Feste. фэст. Weihnachten ist ein schönes Fest, праздник. Рождество — прекрасный праздник; 🔴 die Torte. die Torten. тортэ. Die Schokoladentorte schmeckt gut, торт. Шоколадный торт очень вкусный; 🔴 die Kerze. die Kerzen. кэрцэ. Ich zünde eine Kerze an, свеча. Я зажигаю свечу; gratulieren. гратулирен. Wir gratulieren dir zum Erfolg, поздравлять. Мы поздравляем тебя с успехом; 🔵 der Gutschein. die Gutscheine. гутшайн. Er schenkt mir einen Gutschein, сертификат. Он дарит мне сертификат; einladen. айнладен. Darf ich dich zum Essen einladen?, приглашать. Можно мне пригласить тебя на обед?;",

    24: "komm. ком. Komm bitte pünktlich zum Kurs, приди. Приходи, пожалуйста, вовремя на курс; geh. гей. Geh bitte jetzt ins Bett, иди. Иди, пожалуйста, сейчас в кровать; lies. лис. Lies bitte die erste Seite, читай. Прочитай, пожалуйста, первую страницу; schreib. шрайб. Schreib deinen Namen hierhin, пиши. Напиши свое имя сюда; iss. ис. Iss bitte mehr frisches Gemüse, ешь. Ешь, пожалуйста, больше свежих овощей; trink. тринк. Trink bitte nicht so viel Cola, пей. Не пей, пожалуйста, так много колы; macht. махт. Macht bitte eure Hausaufgaben, сделайте. Сделайте, пожалуйста, ваши домашние задания; warten Sie. вартен зи. Warten Sie bitte einen Moment, подождите. Подождите, пожалуйста, один момент; nimm. ним. Nimm dir einen warmen Mantel, возьми. Возьми себе теплое пальто; gib. гип. Gib mir bitte das Wörterbuch, дай. Дай мне, пожалуйста, словарь;",

    25: "🟢 das Lebensmittel. die Lebensmittel. лебенсмиттель. Lebensmittel sind im Supermarkt teuer, продукты. Продукты в супермаркете дорогие; 🔵 der Supermarkt. die Supermärkte. супермаркт. Ich gehe oft in den Supermarkt, супермаркет. Я часто хожу в супермаркет; 🔴 die Dose. die Dosen. дозэ. Ich kaufe eine Dose Cola, жестяная банка. Я покупаю банку колы; 🔴 die Flasche. die Flaschen. флаше. Eine Flasche Wasser bitte, бутылка. Бутылку воды, пожалуйста; 🔴 die Packung. die Packungen. пакунг. Wo ist die Packung Kaffee?, упаковка. Где упаковка кофе?; 🔴 die Tüте. die Tüten. тютэ. Brauchen Sie eine Plastiktüte?, пакет. Вам нужен пластиковый пакет?; 🟢 das Glas. die Gläser. глас. Das Glas Marmelade ist leer, банка. Банка джема пуста; 🟢 das Kilogramm. die Kilogramm. килограмм. Ich nehme ein Kilogramm Äpfel, килограмм. Я возьму один килограмм яблок; 🔵 der Preis. die Preise. прайс. Der Preis für Brot steigt, цена. Цена на хлеб растет; günstig. гюнстиг. Dieses Angebot ist sehr günstig, выгодный. Это предложение очень выгодное;",

    26: "🟢 das Gemüse. die Gemüse. гемюзе. Gemüse ist gesund für Kinder, овощи. Овощи полезны для детей; 🟢 das Obst. опст. Frisches Obst schmeckt im Sommer gut, фрукты. Свежие фрукты вкусны летом; 🔴 die Tomate. die Tomaten. томатэ. Ich schneide die Tomate klein, помидор. Я мелко режу помидор; 🔴 die Kartoffel. die Kartoffeln. картоффель. Kartoffeln sind ein wichtiges Lebensmittel, картофель. Картофель — важный продукт питания; 🔴 die Banane. die Bananen. бананэ. Die Banane ist eine süße Frucht, банан. Банан — сладкий фрукт; 🔴 die Erdbeere. die Erdbeeren. эрдбэрэ. Ich esse gerne eine Erdbeere, клубника. Я с удовольствием ем клубнику; 🔵 der Apfel. die Äpfel. апфель. Ein Apfel am Tag ist gesund, яблоко. Одно яблоко в день — это здорово; 🔴 die Gurke. die Gurken. гуркэ. Die Gurke besteht fast nur aus Wasser, огурец. Огурец состоит почти только из воды; 🔴 die Zwiebel. die Zwiebeln. цвибель. Die Zwiebel macht mich traurig, лук. От лука я плачу (лук делает меня грустным); 🔴 die Kirsche. die Kirschen. киршэ. Die rote Kirsche ist sehr süß, вишня. Красная вишня очень сладкая;",

    27: "🔴 die Schule. die Schulen. шуле. Die Schule beginnt um acht Uhr, школа. Школа начинается в восемь часов; 🔵 der Schüler. die Schüler. шюлер. Der Schüler lernt für die Prüfung, ученик. Ученик учится к экзамену; 🟢 das Fach. die Fächer. фах. Deutsch ist mein liebstes Fach, предмет. Немецкий — мой любимый предмет; 🟢 das Heft. die Hefte. хефт. Ich schreibe die Vokabeln ins Heft, тетрадь. Я записываю слова в тетрадь; 🔴 die Mathematik. матэматик. Mathematik finde ich sehr schwierig, математика. Я нахожу математику очень трудной; 🔴 die Pause. die Pausen. паузе. Wir spielen Fußball in der Pause, перемена. Мы играем в футбол на перемене; 🟢 das Zeugnis. die Zeugnisse. цойгнис. Er zeigt den Eltern sein Zeugnis, аттестат. Он показывает родителям свой аттестат; lernen. лернен. Wir lernen heute viele neue Wörter, учить. Мы учим сегодня много новых слов; 🔵 der Test. die Tests. тест. Der Test war gar nicht so schwer, тест. Тест был вовсе не таким сложным; 🔴 die Hausaufgabe. die Hausaufgaben. хаузауфгабэ. Ich mache jetzt meine Hausaufgabe, домашнее задание. Я сейчас делаю свое домашнее задание;",

    28: "eins. айнс. Eins plus zwei ist drei, один. Один плюс два равно три; 🔵 der Euro. die Euro. ойро. Das Brötchen kostet einen Euro, евро. Булочка стоит один евро; zählen. целен. Kannst du bis hundert zählen?, считать. Ты умеешь считать до ста?; 🔵 der Preis. die Preise. прайс. Wie hoch ist der Preis dafür?, цена. Какова цена за это?; 🔴 die Nummer. die Nummern. нуммер. Das ist meine neue Nummer, номер. Это мой новый номер; plus. плюс. Fünf plus fünf ist zehn, плюс. Пять плюс пять равно десять; minus. минус. Acht minus drei ist fünf, минус. Восемь минус три равно пять; 🔴 die Summe. die Summen. зумме. Die Summe steht auf der Rechnung, сумма. Сумма указана в счете; 🔴 die Million. die Millionen. миллион. Er hat eine Million im Lotto gewonnen, миллион. Он выиграл миллион в лото; bezahlen. бецален. Wir bezahlen das Essen im Restaurant, оплачивать. Мы оплачиваем еду в ресторане;",

    29: "🔵 der Montag. die Montage. монтаг. Am Montag fängt die Arbeit an, понедельник. В понедельник начинается работа; 🔵 der Morgen. die Morgen. морген. Ich trinke am Morgen einen Tee, утро. Я пью утром чай; 🔵 der Abend. die Abende. абент. Wir gehen am Abend ins Kino, вечер. Вечером мы идем в кино; 🔴 die Nacht. die Nächte. нахт. In der Nacht ist es sehr dunkel, ночь. Ночью очень темно; heute. хойтэ. Heute ist das Wetter sehr schön, сегодня. Сегодня погода очень хорошая; morgen. морген. Morgen fahre ich in den Urlaub, завтра. Завтра я еду в отпуск; gestern. гестерн. Gestern war ich bei meiner Oma, вчера. Вчера я был у бабушки; 🔴 die Woche. die Wochen. вохэ. Die Woche hat nur sieben Tage, неделя. В неделе всего семь дней; 🔵 der Mittwoch. die Mittwoche. митт вох. Am Mittwoch haben wir einen Termin, среда. В среду у нас встреча; 🔵 der Sonntag. die Sonntage. зонтаг. Am Sonntag schlafe ich lange, воскресенье. В воскресенье я сплю долго;",

    30: "zuerst. цуэрст. Zuerst wasche ich mein Gesicht, сначала. Сначала я умываю лицо; dann. данн. Dann trinke ich einen Kaffee, затем. Затем я пью кофе; danach. данах. Danach gehe ich zur Arbeit, после этого. После этого я иду на работу; früh. фрю. Ich stehe jeden Tag sehr früh auf, рано. Я каждый день встаю очень рано; spät. шпет. Es ist schon sehr spät geworden, поздно. Стало уже очень поздно; pünktlich. пюнктлих. Sei bitte pünktlich am Bahnhof, вовремя. Будь, пожалуйста, вовремя на вокзале; oft. офт. Ich gehe oft im Park spazieren, часто. Я часто хожу гулять в парк; selten. зельтен. Ich esse nur sehr selten Fleisch, редко. Я ем мясо очень редко; 🔵 der Alltag. die Alltage. алльтаг. Mein Alltag ist meistens gleich, будни. Мои будни в основном одинаковые; 🔵 der Plan. die Пläne. план. Hast du einen Plan für heute?, план. У тебя есть план на сегодня;",

    31: "🔵 der Kreis. die Kreise. крайс. Der Kreis ist perfekt rund, круг. Круг идеально круглый; 🔵 der Punkt. die Punkte. пункт. Das Ende ist ein kleiner Punkt, точка. Конец — это маленькая точка; 🟢 das Quadrat. die Quadrate. квадрат. Ein Quadrat hat vier Seiten, квадрат. У квадрата четыре стороны; 🔴 die Form. die Formen. форм. Diese Form ist sehr interessant, форма. Эта форма очень интересная; eckig. эккиг. Der Tisch ist leider eckig, угловатый. Стол, к сожалению, угловатый; breit. брайт. Die Straße dort ist sehr breit, широкий. Та улица вон там очень широкая; schmal. шмаль. Der Weg im Wald ist schmal, узкий. Тропинка в лесу узкая; hoch. хох. Der Berg ist extrem hoch, высокий. Гора экстремально высокая; tief. тиф. Der See hier ist sehr tief, глубокий. Озеро здесь очень глубокое; hart. харт. Das Brot ist schon hart, твердый. Хлеб уже твердый;",

    32: "🔴 die Uhrzeit. die Uhrzeiten. урцайт. Wie spät ist die Uhrzeit?, время (на часах). Который сейчас час?; 🔴 die Stunde. die Stunden. штундэ. Die Fahrt dauert eine Stunde, час. Поездка длится один час; 🔴 die Minute. die Minuten. минутэ. Warten Sie bitte eine Minute, минута. Подождите, пожалуйста, одну минуту; 🔴 die Sekunde. die Sekunden. зекундэ. Jede Sekunde ist jetzt wichtig, секунда. Каждая секунда сейчас важна; halb. хальп. Es ist halb fünf Uhr, половина. Сейчас половина пятого; das Viertel. die Viertel. фиртэль. Viertel vor acht beginnt es, четверть. В без четверти восемь это начинается; nach. нах. Es ist zehn nach zehn, после. Сейчас десять минут одиннадцатого; vor. фор. Es ist fünf vor zwölf, до/без. Сейчас без пяти двенадцать; genau. генау. Es ist jetzt genau Mittag, точно. Сейчас ровно полдень; 🔴 die Zeitansage. die Zeitansagen. цайтанзагэ. Die Zeitansage im Radio stimmt, объявление времени. Объявление времени по радио верно;",

    33: "🔵 der Monat. die Monate. монат. Ein Monat hat vier Wochen, месяц. Месяц состоит из четырех недель; 🔵 der Urlaub. die Urlaube. урлауб. Ich brauche dringend einen Urlaub, отпуск. Мне срочно нужен отпуск; 🔵 der Pass. die Pässe. пасс. Ich zeige meinen Pass, паспорт. Я показываю свой паспорт; 🔴 die Reise. die Reisen. райзэ. Die Reise nach Berlin war schön, путешествие. Путешествие в Берлин было прекрасным; buchen. бухен. Wir buchen heute das Hotel, бронировать. Мы бронируем сегодня отель; packen. паккен. Ich packe meinen Koffer, паковать. Я пакую свой чемодан; 🔴 die Vergangenheit. фергангенхайт. Er erzählt von der Vergangenheit, прошлое. Он рассказывает о прошлом; früher. фрюер. Früher war alles ganz anders, раньше. Раньше всё было совсем иначе; erleben. эрлебен. Wir erleben ein großes Abenteuer, переживать/испытывать. Мы переживаем большое приключение; 🔵 der Tourist. die Touristen. турист. Der Tourist sucht den Weg, турист. Турист ищет дорогу;",

    34: "🔵 der Frühling. die Frühlinge. фрюлинг. Im Frühling blühen die Blumen, весна. Весной цветут цветы; 🔵 der Sommer. die Sommer. зоммер. Der Sommer ist sehr heiß, лето. Лето очень жаркое; 🔵 der Herbst. die Herbste. херпст. Im Herbst fallen die Blätter, осень. Осенью падают листья; 🔵 der Winter. die Winter. винтер. Im Winter liegt viel Schnee, зима. Зимой лежит много снега; 🔵 der Januar. януар. Der Januar ist der erste Monat, январь. Январь — первый месяц; 🔵 der Juli. юли. Im Juli haben wir Ferien, июль. В июле у нас каникулы; 🔵 der Dezember. децембер. Im Dezember feiern wir Weihnachten, декабрь. В декабре мы празднуем Рождество; 🔴 die Jahreszeit. die Jahreszeiten. ярэсцайт. Welche Jahreszeit magst du?, время года. Какое время года тебе нравится?; warm. варм. Das Wetter ist heute warm, теплый. Погода сегодня теплая; kalt. кальт. Draußen ist es sehr kalt, холодный. На улице очень холодно;",

    35: "🔵 der Koffer. die Koffer. коффер. Mein Koffer ist sehr schwer, чемодан. Мой чемодан очень тяжелый; 🔴 die Tasche. die Taschen. ташэ. Ich trage eine kleine Tasche, сумка. Я несу маленькую сумку; 🟢 das Ticket. die Tickets. тиккет. Wo ist mein Ticket?, билет. Где мой билет?; 🔵 der Flug. die Flüge. флюг. Der Flug dauert drei Stunden, полет/рейс. Полет длится три часа; 🟢 das Hotel. die Hotels. хотэль. Das Hotel ist im Zentrum, отель. Отель находится в центре; 🔵 der Aufenthalt. die Aufenthalte. ауфэнтхальт. Viel Spaß beim Aufenthalt!, пребывание. Желаю приятного пребывания!; 🔴 die Ankunft. die Ankünfte. анкунфт. Die Ankunft ist um Mitternacht, прибытие. Прибытие в полночь; 🔴 die Abfahrt. die Abfahrten. апфарт. Die Abfahrt ist am Gleis 4, отъезд. Отъезд с 4-го пути; 🟢 das Ziel. die Ziele. циль. Wir haben das Ziel erreicht, цель/пункт назначения. Мы достигли цели; 🔵 der Zoll. die Zölle. цоль. Der Zoll kontrolliert das Gepäck, таможня. Таможня контролирует багаж;",

    36: "mehr. мэр. Ich möchte mehr Wasser trinken, больше. Я хочу пить больше воды; besser. бессер. Das neue Auto ist besser, лучше. Новая машина лучше; am besten. ам бестен. Dieser Kuchen schmeckt am besten, лучше всего. Этот пирог вкуснее всего; viel. филь. Er hat sehr viel Arbeit, много. У него очень много работы; gern. герн. Ich esse gern Pizza, охотно. Я охотно ем пиццу; lieber. либер. Ich trinke lieber Tee, охотнее/лучше. Я лучше выпью чаю; am liebsten. ам либстен. Am liebsten lese ich Krimis, охотнее всего. Больше всего я люблю читать детективы; so... wie. зо ви. Er ist so groß wie ich, такой же... как. Он такой же высокий, как я; als. альс. Mein Bruder ist älter als ich, чем. Мой брат старше, чем я; weniger. венигер. Ich esse jetzt weniger Zucker, меньше. Я ем теперь меньше сахара;",

    37: "🔴 die Post. пост. Ich bringe das Paket zur Post, почта. Я несу посылку на почту; 🔴 die Bank. die Banken. банк. Die Bank ist am Wochenende zu, банк. Банк закрыт на выходных; 🔴 die Polizei. полицай. Rufen Sie bitte die Polizei!, полиция. Вызовите, пожалуйста, полицию!; 🟢 das Krankenhaus. die Krankenhäuser. кранкенхаус. Wo ist das nächste Krankenhaus?, больница. Где ближайшая больница?; 🔴 die Feuerwehr. фoйервер. Die Feuerwehr löscht das Feuer, пожарная служба. Пожарные тушат огонь; 🔴 die Information. die Informationen. информацион. Fragen Sie an der Information, справочная/информация. Спросите в справочной; 🔴 die Behörde. die Behörden. бехёрдэ. Ich muss zur Behörde gehen, ведомство/орган власти. Мне нужно пойти в ведомство; 🟢 das Amt. die Ämter. амт. Er arbeitet beim Finanzamt, управление/служба. Он работает в налоговой службе; 🔵 der Ausweis. die Ausweise. аусвайс. Zeigen Sie bitte Ihren Ausweis, удостоверение личности. Покажите, пожалуйста, ваше удостоверение; helfen. хельфен. Die Polizei hilft den Menschen, помогать. Полиция помогает людям;",

    38: "🔴 die Natur. натур. Ich liebe die reine Natur, природа. Я люблю чистую природу; 🔴 die Sonne. die Sonnen. зоннэ. Die Sonne scheint heute hell, солнце. Солнце сегодня светит ярко; 🔵 der Regen. реген. Der Regen ist gut für Bäume, дождь. Дождь полезен для деревьев; 🔵 der Wind. die Winde. винд. Der Wind weht sehr stark, ветер. Ветер дует очень сильно; 🟢 das Wetter. веттер. Wie ist das Wetter heute?, погода. Какая сегодня погода?; 🔵 der Berg. die Berge. берг. Wir wandern auf den Berg, гора. Мы идем в поход на гору; 🔵 der See. die Seen. зэ. Das Wasser im See ist warm, озеро. Вода в озере теплая; 🔵 der Wald. die Wälder. вальд. Im Wald ist es sehr ruhig, лес. В лесу очень тихо; 🟢 das Meer. die Meere. мэр. Wir fahren an das Meer, море. Мы едем на море; 🔵 der Himmel. химмель. Der Himmel ist heute grau, небо. Небо сегодня серое;",

    39: "wandern. вандерн. Wir wandern gerne im Urlaub, ходить в поход. Мы охотно ходим в походы в отпуске; 🔵 der Ausflug. die Ausflüge. аусфлюг. Wir machen einen kleinen Ausflug, поездка/экскурсия. Мы совершаем небольшую поездку; 🟢 das Zelt. die Zelte. цельт. Wir schlafen in einem Zelt, палатка. Мы спим в палатке; 🔵 der Rucksack. die Rucksäcke. рукзак. Mein Rucksack ist fast leer, рюкзак. Мой рюкзак почти пуст; 🔴 die Führung. die Führungen. фюрунг. Die Führung durch die Stadt beginnt, экскурсия (с гидом). Экскурсия по городу начинается; 🔵 der Reiseleiter. die Reiseleiter. райзелайтер. Der Reiseleiter zeigt uns alles, гид. Гид всё нам показывает; 🔴 die Karte. die Karten. картэ. Ich brauche eine Wanderkarte, карта. Мне нужна туристическая карта; 🔵 der Schlafsack. die Schlafsäcke. шлафзак. Der Schlafsack ist sehr warm, спальный мешок. Спальный мешок очень теплый; campen. кэмпен. Wir campen am See, отдыхать в кемпинге. Мы отдыхаем в кемпинге у озера; besichtigen. безихтиген. Wir besichtigen die alte Kirche, осматривать достопримечательности. Мы осматриваем старую церковь;",

    40: "geblieben. геблибен. Ich bin zu Hause geblieben, остался. Я остался дома; gewesen. гевезен. Ich bin im Kino gewesen, был. Я был в кино; geworden. геворден. Das Wetter ist schlecht geworden, стал. Погода стала плохой; gefahren. гефарен. Er ist nach Berlin gefahren, поехал. Он поехал в Берлин; gekommen. гекоммен. Der Bus ist endlich gekommen, пришел. Автобус наконец-то пришел; aufgestanden. ауфгештанден. Ich bin heute früh aufgestanden, встал. Я сегодня рано встал; eingeschlafen. айнгешлафен. Das Kind ist sofort eingeschlafen, уснул. Ребенок сразу уснул; gewandert. гевандерт. Wir sind im Wald gewandert, ходили в поход. Мы ходили в поход в лесу; gelaufen. гелауфен. Er ist sehr schnell gelaufen, бегал. Он очень быстро бегал; passiert. пассирт. Was ist heute genau passiert?, случилось. Что сегодня именно случилось?;",

    41: "erzählen. ерцэлен. Er erzählt eine gute Geschichte, рассказывать. Он рассказывает хорошую историю; 🔴 die Erinnerung. die Erinnerungen. еринерунг. Das ist eine schöne Erinnerung, воспоминание. Это прекрасное воспоминание; vergessen. фергессен. Ich habe meinen Namen vergessen, забыть. Я забыл свое имя; wissen. виссен. Ich habe das nicht gewusst, знать. Я этого не знал; denken. денкен. Ich habe an dich gedacht, думать. Я думал о тебе; 🔵 der Bericht. die Berichte. берихт. Der Bericht war sehr lang, отчет/доклад. Доклад был очень длинным; damals. дамальс. Damals war das Leben einfach, тогда/в те времена. В те времена жизнь была простой; passiert. пассирт. Das ist vor Jahren passiert, случилось. Это случилось много лет назад; 🔴 die Erfahrung. die Erfahrungen. ерфарунг. Er hat viel Erfahrung gesammelt, опыт. Он собрал много опыта; 🟢 das Ereignis. die Ereignisse. ерайгнис. Das war ein wichtiges Ereignis, событие. Это было важное событие;",

    42: "🔴 die Musik. музик. Die Musik ist heute laut, музыка. Музыка сегодня громкая; 🟢 das Instrument. die Instrumente. инструмэнт. Welches Instrument spielst du?, инструмент. На каком инструменте ты играешь?; 🔴 die Gitarre. die Gitarren. гитаррэ. Er spielt sehr gut Gitarre, гитара. Он очень хорошо играет на гитаре; 🟢 das Klavier. die Klaviere. клавир. Das Klavier ist sehr alt, пианино. Пианино очень старое; 🔵 der Rhythmus. die Rhythmen. ритмус. Der Rhythmus ist sehr schnell, ритм. Ритм очень быстрый; 🔵 der Gesang. гезанг. Ihr Gesang ist wunderschön, пение. Её пение прекрасно; 🔴 die Geige. die Geigen. гайгэ. Die Geige klingt sehr traurig, скрипка. Скрипка звучит очень грустно; 🔵 der Jazz. джэз. Ich höre am liebsten Jazz, джаз. Я больше всего люблю слушать джаз; 🔴 die Oper. die Opern. опер. Wir gehen in die Oper, опера. Мы идем в оперу; 🔵 der Pop. поп. Pop ist eine moderne Musikrichtung, поп-музыка. Поп — это современное направление музыки;",

    43: "🔴 die Speisekarte. die Speisekarten. шпайзекартэ. Die Speisekarte ist auf Deutsch, меню. Меню на немецком; 🟢 das Gericht. die Gerichte. герихт. Dieses Gericht schmeckt fantastisch, блюдо. Это блюдо на вкус фантастическое; 🔴 die Vorspeise. die Vorspeisen. форшпайзэ. Ich bestelle eine kleine Vorspeise, закуска. Я заказываю маленькую закуску; 🔴 die Hauptspeise. die Hauptspeisen. хауптшпайзэ. Die Hauptspeise kommt jetzt, основное блюдо. Основное блюдо подают сейчас; 🔴 die Nachspeise. die Nachspeisen. нахшпайзэ. Ich möchte eine süße Nachspeise, десерт. Я хочу сладкий десерт; 🔴 die Suppe. die Suppen. зуппэ. Die Suppe ist sehr heiß, суп. Суп очень горячий; 🔵 der Salat. die Salate. залат. Der Salat ist frisch und grün, салат. Салат свежий и зеленый; 🟢 das Fleisch. флайш. Er isst heute kein Fleisch, мясо. Он сегодня не ест мяса; 🔵 der Fisch. die Fische. фиш. Der Fisch ist perfekt gebraten, рыба. Рыба идеально поджарена; 🟢 das Dessert. die Desserts. дессерт. Das Dessert ist sehr lecker, десерт. Десерт очень вкусный;",

    44: "sein. зайн. Er ist schon lange hier, быть. Он уже давно здесь; gehen. гейен. Wir sind in den Park gegangen, идти. Мы пошли в парк; kommen. коммен. Er ist gestern spät gekommen, приходить. Он вчера пришел поздно; fahren. фарен. Ich bin mit dem Bus gefahren, ехать. Я поехал на автобусе; fliegen. флиген. Wir sind nach Rom geflogen, лететь. Мы полетели в Рим; bleiben. блайбен. Sie ist den ganzen Tag geblieben, оставаться. Она осталась на весь день; werden. верден. Es ist sehr kalt geworden, становиться. Стало очень холодно; aufstehen. ауфштеен. Wann bist du heute aufgestanden?, вставать. Когда ты сегодня встал?; einschlafen. айншлафен. Ich bin vor dem Fernseher eingeschlafen, засыпать. Я заснул перед телевизором; wandern. вандерн. Wir sind stundenlang gewandert, ходить в поход. Мы ходили в поход часами;",

    45: "🔴 die Richtung. die Richtungen. рихтунг. Das ist die falsche Richtung, направление. Это неправильное направление; rechts. рехтс. Biegen Sie bitte nach rechts ab, направо. Поверните, пожалуйста, направо; links. линкс. Das Museum ist auf der linken Seite, налево/слева. Музей находится на левой стороне; geradeaus. герадеаус. Gehen Sie immer nur geradeaus, прямо. Идите всегда только прямо; 🔵 der Norden. норден. Hamburg liegt im Norden, север. Гамбург находится на севере; 🔵 der Süden. зюден. München liegt im Süden, юг. Мюнхен находится на юге; 🔵 der Osten. остен. Berlin liegt im Osten, восток. Берлин находится на востоке; 🔵 der Westen. вестен. Köln liegt im Westen, запад. Кёльн находится на западе; 🔵 der Weg. die Wege. вег. Zeigen Sie mir den Weg?, путь/дорога. Вы покажете мне дорогу?; 🔴 die Karte. die Karten. картэ. Ich sehe auf die Karte, карта. Я смотрю на карту;",

    46: "🔵 der Körper. die Körper. кёрпер. Sport ist gut für den Körper, тело. Спорт полезен для тела; 🔵 der Kopf. die Köpfe. копф. Mein Kopf tut heute weh, голова. У меня сегодня болит голова; 🔴 die Hand. die Hände. ханд. Gib mir bitte deine Hand, рука (кисть). Дай мне, пожалуйста, свою руку; 🔵 der Arm. die Arme. арм. Mein Arm ist nach dem Sport müde, рука (от плеча). Моя рука устала после спорта; 🔵 der Fuß. die Füße. фус. Meine Füße sind sehr kalt, нога (стопа). Мои ноги очень холодные;  das Bein. die Beine. байн. Er hat sehr lange Beine, нога (вся). У него очень длинные ноги; 🔵 der Rücken. die Rücken. рюккен. Ich habe Schmerzen im Rücken, спина. У меня боли в спине; 🔵 der Bauch. die Bäuche. баух. Mein Bauch ist voll, живот. Мой живот полон; 🔵 der Finger. die Finger. фингер. Er hat einen Ring am Finger, палец. У него кольцо на пальце; 🟢 das Auge. die Augen. аугэ. Sie hat sehr schöne Augen, глаз. У нее очень красивые глаза;",

    47: "🔴 die Wohnung. die Wohnungen. вонунг. Die Wohnung ist hell und groß, квартира. Квартира светлая и большая; 🔵 der Stock. die Stockwerke. шток. Wir wohnen im ersten Stock, этаж. Мы живем на первом этаже; 🔵 der Balkon. die Balkone. балкон. Ich sitze gerne auf dem Balkon, балкон. Я охотно сижу на балконе; 🔴 die Miete. die Mieten. митэ. Die Miete ist hier sehr teuer, арендная плата. Арендная плата здесь очень дорогая; 🔵 der Nachbar. die Nachbarn. нахбар. Mein Nachbar ist sehr nett, сосед; 🔵 der Flur. die Flure. флур. Der Flur ist dunkel, коридор. Коридор темный; 🔴 die Garage. die Garagen. гаражэ. Das Auto steht in der Garage, гараж. Машина стоит в гараже; 🔵 der Garten. die Gärten. гартен. Die Kinder spielen im Garten, сад. Дети играют в саду; 🔵 der Schlüssel. die Schlüssel. шлюссель. Wo ist mein Wohnungsschlüssel?, ключ. Где мой ключ от квартиры?; umziehen. умциен. Wir ziehen nächsten Monat um, переезжать. Мы переезжаем в следующем месяце;",

    48: "🔵 der Fernseher. die Fernseher. фернзеер. Der Fernseher ist kaputt, телевизор. Телевизор сломан; 🔴 die Sendung. die Sendungen. зендунг. Diese Sendung ist sehr lustig, передача. Эта передача очень смешная; 🔴 die Nachrichten. нахрихтен. Ich sehe jeden Abend Nachrichten, новости. Я смотрю новости каждый вечер; 🔵 der Film. die Filme. фильм. Welchen Film schauen wir?, фильм. Какой фильм мы посмотрим?; 🟢 das Radio. die Radios. радио. Ich höre morgens Radio, радио. Я слушаю радио по утрам; 🔴 die Werbung. die Werbungen. вербунг. Die Werbung dauert zu lange, реклама. Реклама длится слишком долго; 🔵 der Moderator. die Moderatoren. модератор. Der Moderator spricht sehr schnell, ведущий. Ведущий говорит очень быстро; 🔴 die Serie. die Serien. зэриэ. Meine Lieblingsserie ist zu Ende, сериал. Мой любимый сериал закончился; schauen. шауэн. Wir schauen zusammen ein Video, смотреть. Мы вместе смотрим видео; spannend. шпанненд. Das Buch ist total spannend, захватывающий. Книга совершенно захватывающая;",

    49: "🔵 der Computer. die Computer. компютер. Ich brauche einen neuen Computer, компьютер. Мне нужен новый компьютер; 🟢 das Internet. интернет. Das Internet ist heute langsam, интернет. Интернет сегодня медленный; 🔴 die E-Mail. die E-Mails. и-мейл. Ich schreibe dir eine E-Mail, электронное письмо. Я пишу тебе электронное письмо; 🟢 das Passwort. die Passwörter. пасворт. Wie ist das Passwort hier?, пароль. Какой здесь пароль?; 🔴 die Webseite. die Webseiten. вебсайтэ. Die Webseite lädt nicht, веб-сайт. Веб-сайт не загружается; klicken. кликкен. Klicken Sie auf den Link, кликать. Кликните по ссылке; 🔵 der Laptop. die Laptops. лэптоп. Mein Laptop ist im Rucksack, ноутбук. Мой ноутбук в рюкзаке; online. онлайне. Wir sind den ganzen Tag online, онлайн. Мы весь день онлайн; löschen. лёшен. Ich lösche das alte Foto, удалять. Я удаляю старое фото; speichern. шпайхерн. Speichern Sie bitte die Datei, сохранять. Сохраните, пожалуйста, файл;",

    50: "🔴 die Party. die Partys. парти. Die Party war sehr laut, вечеринка. Вечеринка была очень шумной; 🔵 der Geburtstag. die Geburtstage. гебуртстаг. Wann hast du Geburtstag?, день рождения. Когда у тебя день рождения?; 🟢 das Geschenk. die Geschenke. гешенк. Danke für das tolle Geschenk, подарок. Спасибо за отличный подарок; 🔴 die Einladung. die Einladungen. айнладунг. Ich danke für die Einladung, приглашение. Благодарю за приглашение; feiern. файерн. Wir feiern bis in die Nacht, праздновать. Мы празднуем до ночи; tanzen. танцен. Sie tanzt sehr gerne Salsa, танцевать. Она очень охотно танцует сальсу; 🔵 der Wein. die Weine. вайн. Ein Glas Weißwein bitte, вино. Бокал белого вина, пожалуйста; 🔵 der Saft. die Säfte. зафт. Möchtest du einen Orangensaft?, сок. Хочешь апельсинового сока?; 🔵 der Kuchen. die Kuchen. кухен. Der Kuchen ist selbst gebacken, пирог. Пирог испечен самостоятельно; singen. зинген. Wir singen ein Geburtstagslied, петь. Мы поем песню ко дню рождения;",

    51: "🟢 das Wetter. веттер. Das Wetter ist heute perfekt, погода. Погода сегодня идеальная; 🔴 die Sonne. зоннэ. Die Sonne scheint sehr stark, солнце. Солнце светит очень сильно; 🔵 der Regen. реген. Ich mag den Regen nicht, дождь. Я не люблю дождь; 🔵 der Wind. винд. Der Wind kommt aus Norden, ветер. Ветер дует с севера; 🟢 das Gewitter. die Gewitter. гевиттер. In der Nacht war ein Gewitter, гроза. Ночью была гроза; 🔵 der Schnee. шнэй. Überall liegt weißer Schnee, снег. Повсюду лежит белый снег; 🔴 die Wolke. die Wolken. волькэ. Am Himmel ist keine Wolke, облако. На небе ни облачка; warm. варм. Im Sommer ist es oft warm, теплый. Летом часто тепло; kalt. кальт. Im Winter ist es sehr kalt, холодный. Зимой очень холодно; bewölkt. бевёлькт. Heute ist es leider bewölkt, облачно. Сегодня, к сожалению, облачно;",

    52: "🔵 der Körper. кёрпер. Er pflegt seinen Körper gut, тело. Он хорошо ухаживает за своим телом; 🔵 der Kopf. die Köpfe. копф. Mein Kopf ist heute schwer, голова. Моя голова сегодня тяжелая; 🟢 das Haar. die Haare. хаар. Sie hat lange blonde Haare, волосы. У нее длинные светлые волосы; 🟢 das Gesicht. die Gesichter. гезихт. Wasch dir bitte das Gesicht, лицо. Умой, пожалуйста, лицо; 🟢 das Auge. die Augen. аугэ. Deine Augen sind hellblau, глаз. Твои глаза светло-голубые; 🔴 die Nase. die Nasen. назэ. Meine Nase ist im Winter rot, нос. Мой нос зимой красный; 🔵 der Mund. die Münder. мунд. Mach bitte den Mund auf, рот. Открой, пожалуйста, рот; 🟢 das Ohr. die Ohren. ор. Meine Ohren tun weh, ухо. Мои уши болят; 🔵 der Hals. die Hälse. хальс. Ich habe Schmerzen im Hals, горло/шея. У меня болит горло; 🔵 der Zahn. die Zähne. цан. Ich putze mir die Zähne, зуб. Я чищу зубы;",

    53: "🔵 der Sport. шпорт. Sport macht mich fit, спорт. Спорт делает меня подтянутым; 🔵 der Ball. die Bälle. балль. Wo ist der gelbe Ball?, мяч. Где желтый мяч?; spielen. шпилен. Wir spielen heute Fußball, играть. Мы играем сегодня в футбол; laufen. лауфен. Ich laufe jeden Morgen im Park, бегать. Я бегаю каждое утро в парке; schwimmen. швиммен. Er schwimmt sehr schnell, плавать. Он плавает очень быстро; 🔵 der Verein. die Vereine. ферайн. Er ist in einem Sportverein, клуб/общество. Он состоит в спортивном клубе; gewinnen. гевиннен. Wer wird das Spiel gewinnen?, выигрывать. Кто выиграет игру?; verlieren. ферлирен. Ich verliere nicht gerne, проигрывать. Я не люблю проигрывать; 🟢 das Training. die Trainings. трениниг. Das Training war sehr anstrengend, тренировка. Тренировка была очень утомительной; fit. фит. Ich möchte fit bleiben, в форме. Я хочу оставаться в форме;",

    54: "🔵 der Urlaub. die Urlaube. урлауб. Wir planen unseren Urlaub, отпуск. Мы планируем наш отпуск; 🔴 die Reise. die Reisen. райзэ. Die Reise war sehr teuer, путешествие. Путешествие было очень дорогим; 🟢 das Hotel. die Hotels. хотэль. Das Hotel war sehr sauber, отель. Отель был очень чистым; 🔵 der Strand. die Strände. штранд. Wir liegen den ganzen Tag am Strand, пляж. Мы весь день лежим на пляже; 🟢 das Meer. мэр. Das Wasser im Meer ist blau, море. Вода в море синяя; 🔵 der Koffer. die Koffer. коффер. Ich muss meinen Koffer packen, чемодан. Мне нужно собрать чемодан; 🔴 die Postkarte. die Postkarten. посткартэ. Ich schreibe eine Postkarte, открытка. Я пишу открытку; 🔵 der Tourist. die Touristen. турист. Hier sind viele Touristen, турист. Здесь много туристов; besichtigen. безихтиген. Wir besichtigen das Museum, осматривать. Мы осматриваем музей; wandern. вандерн. Wir wandern gerne in den Bergen, ходить в поход. Мы охотно ходим в походы в горах;",

    55: "🔴 die Natur. натур. Ich genieße die reine Natur, природа. Я наслаждаюсь чистой природой; 🔵 der Baum. die Bäume. баум. Der Baum ist sehr alt, дерево. Дерево очень старое; 🔴 die Blume. die Blumen. блумэ. Die Blume riecht gut, цветок. Цветок приятно пахнет; 🔵 der Berg. die Berge. берг. Der Berg ist sehr hoch, гора. Гора очень высокая; 🔵 der See. die Seen. зэ. Der See ist im Sommer warm, озеро. Озеро летом теплое; 🔵 der Wald. die Wälder. вальд. Wir spazieren im Wald, лес. Мы гуляем в лесу; 🟢 das Tier. die Tiere. тир. Der Hund ist mein Lieblingstier, животное. Собака — моё любимое животное; 🟢 das Wetter. веттер. Das Wetter wird morgen besser, погода. Погода завтра станет лучше; 🔵 der Fluss. die Flüsse. флюсс. Der Fluss fließt durch die Stadt, река. Река течет через город; 🔴 die Luft. луфт. Die Luft hier ist sehr frisch, воздух. Воздух здесь очень свежий;",

    56: "🔵 der Arzt. die Ärzte. арцт. Ich gehe heute zum Arzt, врач. Я иду сегодня к врачу; 🔴 die Medizin. медицин. Er muss die Medizin nehmen, лекарство. Он должен принять лекарство; 🟢 das Krankenhaus. die Krankenhäuser. кранкенхаус. Das Krankenhaus ist im Zentrum, больница. Больница находится в центре; 🔴 die Apotheke. die Apotheken. апотэкэ. Wo ist die nächste Apotheke?, аптека. Где ближайшая аптека?; 🔵 der Termin. die Termine. термин. Ich habe einen Termin um zehn, запись/встреча. У меня запись на десять; gesund. гезунд. Obst ist sehr gesund, здоровый. Фрукты очень полезны; krank. кранк. Ich bin seit Montag krank, больной. Я болен с понедельника; 🔴 die Schmerzen. шмерцен. Ich habe starke Schmerzen, боли. У меня сильные боли; 🔴 die Hilfe. хильфэ. Brauchen Sie Hilfe?, помощь. Вам нужна помощь?; helfen. хельфен. Er hilft mir bei der Arbeit, помогать. Он помогает мне в работе;",

    57: "🔵 der Beruf. die Berufe. беруф. Was sind Sie von Beruf?, профессия. Кто вы по профессии?; arbeiten. арбайтен. Wo arbeiten Sie?, работать. Где вы работаете?; 🔴 die Arbeit. die Arbeiten. арбайт. Die Arbeit macht mir Spaß, работа. Работа доставляет мне удовольствие; 🔵 der Chef. die Chefs. шеф. Mein Chef ist heute beschäftigt, начальник. Мой начальник сегодня занят; 🔵 der Kollege. die Kollegen. коллеге. Meine Kollegen sind sehr nett, коллега. Мои коллеги очень милые; 🔵 der Job. die Jobs. джоб. Ich suche einen neuen Job, работа (место). Я ищу новую работу; verdienen. фердинен. Er verdient viel Geld, зарабатывать. Он зарабатывает много денег; 🔴 die Firma. die Firmen. фирма. Unsere Firma ist sehr groß, фирма. Наша фирма очень большая; 🔵 der Stress. штрэсс. Ich habe zu viel Stress, стресс. У меня слишком много стресса; 🔵 der Urlaub. die Urlaube. урлауб. Wann hast du endlich Urlaub?, отпуск. Когда у тебя наконец отпуск?;",

    58: "🔵 der Bus. die Busse. бус. Der Bus kommt alle zehn Minuten, автобус. Автобус ходит каждые десять минут; 🔵 der Zug. die Züge. цуг. Der Zug hat fünf Minuten Verspätung, поезд. Поезд задерживается на пять минут; 🔴 die Bahn. die Bahnen. бан. Ich fahre mit der Bahn, железная дорога/поезд. Я еду поездом; 🔵 der Bahnhof. die Bahnhöfe. банхоф. Wo ist der Bahnhof?, вокзал. Где вокзал?; 🟢 das Gleis. die Gleise. глайс. Der Zug hält an Gleis drei, путь (на вокзале). Поезд останавливается на третьем пути; 🔴 die Fahrkarte. die Fahrkarten. фаркартэ. Wo kann ich eine Fahrkarte kaufen?, билет. Где я могу купить билет?; 🔵 der Fahrplan. die Fahrpläne. фарплан. Ich sehe auf den Fahrplan, расписание. Я смотрю в расписание; umsteigen. умштайген. Wir müssen in Berlin umsteigen, пересаживаться. Нам нужно пересесть в Берлине; ankommen. анкоммен. Wann kommt der Zug an?, прибывать. Когда прибывает поезд?; abfahren. апфарен. Der Bus fährt pünktlich ab, отправляться. Автобус отправляется вовремя;",

    59: "🔵 der Geburtstag. die Geburtstage. гебуртстаг. Alles Gute zum Geburtstag!, день рождения. С днем рождения!; 🟢 das Fest. die Feste. фэст. Weihnachten ist ein Familienfest, праздник. Рождество — это семейный праздник; 🔴 die Party. die Partys. парти. Die Party fängt um acht an, вечеринка. Вечеринка начинается в восемь; feiern. файерн. Wir feiern heute ein Jubiläum, праздновать. Мы празднуем сегодня юбилей; 🟢 das Geschenk. die Geschenke. гешенк. Das Geschenk ist für meine Mutter, подарок. Подарок для моей мамы; 🔵 der Gast. die Gäste. гаст. Unsere Gäste kommen bald, гость. Наши гости скоро придут; einladen. айнладен. Ich möchte dich einladen, приглашать. Я хочу тебя пригласить; 🔴 die Einladung. die Einladungen. айнладунг. Danke für die nette Einladung, приглашение. Спасибо за милое приглашение; 🔴 die Torte. die Torten. тортэ. Die Torte schmeckt fantastisch, торт. Торт фантастический на вкус; 🔵 der Sekt. die Sekte. зэкт. Wir trinken ein Glas Sekt, игристое вино. Мы выпьем бокал игристого;",

    60: "🔴 die Kleidung. клайдунг. Seine Kleidung ist immer sauber, одежда. Его одежда всегда чистая; 🔴 die Hose. die Hosen. хозэ. Die Hose passt mir gut, брюки. Брюки мне хорошо подходят; 🟢 das T-Shirt. die T-Shirts. ти-шёрт. Ich trage ein weißes T-Shirt, футболка. Я ношу белую футболку; 🔴 die Jacke. die Jacken. яккэ. Die Jacke ist warm genug, куртка. Куртка достаточно теплая; 🔵 der Schuh. die Schuhe. шу. Meine Schuhe sind neu, ботинок. Мои ботинки новые; 🟢 das Kleid. die Kleider. клайд. Das Kleid steht ihr sehr gut, платье. Платье ей очень идет; 🔵 der Rock. die Röcke. рок. Sie trägt einen kurzen Rock, юбка. Она носит короткую юбку; 🔵 der Pullover. die Pullover. пулловер. Der Pullover ist aus Wolle, свитер. Свитер из шерсти; 🟢 das Hemd. die Hemden. хемд. Er trägt ein blaues Hemd, рубашка. Он носит голубую рубашку; anziehen. анциен. Ich ziehe meine Jacke an, надевать. Я надеваю свою куртку;",
}

// let lessonNum = 1
// localStorage.setItem('lesson',lessonNum)
// localStorage.setItem('lesson',1)
let lessonNum = localStorage.getItem('lesson')

const barP = document.querySelector('.header-bar-p')
const getBtn = document.querySelector('.main-get-button')
const mbox = document.querySelector('.m-box')
const completeBtn = document.querySelector('.m-buttons-complete-btn')
const cancelBtn = document.querySelector('.m-buttons-cancel-btn')
const wordsBtn = document.querySelector('.m-time-get-btn')

const dayP = document.querySelector('.m-day-day-p')
const typeP = document.querySelector('.m-day-type-p')
const topicP = document.querySelector('.m-topic-p')
const videoP = document.querySelector('.m-time-video-p')
const grammarP = document.querySelector('.m-time-grammar-p')
const wordsP = document.querySelector('.m-time-words-p')

const today = new Date();

const options = { 
  day: '2-digit',   // Две цифры для дня (например, 05)
  month: '2-digit', // Две цифры для месяца (например, 05)
  year: '2-digit'   // ДВЕ цифры для года (например, 26)
};

const formattedDate = today.toLocaleDateString('ru-RU', options);
console.log(formattedDate); // Выведет: 16.05.26

// Вставляем на страницу:
document.querySelector('.header-date-p').textContent = formattedDate;

barP.textContent = `${lessonNum}/60`

getBtn.addEventListener('click', ()=>{
    getBtn.classList.add('hidden')
    mbox.classList.remove('hidden')

    dayP.textContent = `day ${lessonNum}`
    if (topics[lessonNum-1].type == "VOCABULARY_DAY"){
        typeP.textContent = 'vocabulary'
    } else if (topics[lessonNum-1].type == "GRAMMAR_DAY") {
        typeP.textContent = 'grammar'
    }

    topicP.textContent = topics[lessonNum-1].topic

    videoP.textContent = topics[lessonNum-1].videoTime
    grammarP.textContent = topics[lessonNum-1].grammarTime
    wordsP.textContent = topics[lessonNum-1].wordsCount
})

wordsBtn.addEventListener('click',()=>{
    navigator.clipboard.writeText(words[lessonNum])
        .then(()=>{
            wordsBtn.classList.remove('m-time-get-btn')
            wordsBtn.classList.add('m-time-get-btn-active')

            setTimeout(() => {
                wordsBtn.classList.remove('m-time-get-btn-active')
                wordsBtn.classList.add('m-time-get-btn')

            },1000)
        })
})

cancelBtn.addEventListener('click',()=>{
    getBtn.classList.remove('hidden')
    mbox.classList.add('hidden')
})

completeBtn.addEventListener('click',()=>{
    getBtn.classList.remove('hidden')
    mbox.classList.add('hidden')

    lessonNum++
    localStorage.setItem('lesson',lessonNum)
    barP.textContent = `${lessonNum}/60`
})