import { Property, Broker, ServiceItem } from './types';

export const HERO_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfl4O9zJ6bLc0wD-u-0rPl0etyu6Bj57YgxZwFWYYgyZjzoMb7ywxiXjM9I6t6_trhn9_97LaOZ4PAmPn2hRUfWEbTEKDuAaX7ahixMfQLSdhxy8MDzVsLFhhxXgOdmet-A8SE5MX0ekO2CqzmtDL5PVTkzzl-8HnzofRnXRuppuIk6O-0WFPfVC7D9iTHQ4tsYWhA4YIId6uKq49pHaSVO7Bka8AICAlpJCMAhbLKe7-dVWVSHwnv';

export const ABOUT_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkL3pi3bB609lQxhQJjhqvmVzJ3tQxFta73GphUOhRV1YYRtv55NvVAw4LaiMcI0vBa6UZ5fg2kQlyz-G8TaEiAGlehYB5mEoJB7pgMiSCvMxSQ1r09WkfcbzWxcg4wFkZ4k9V6uBdu1gi85CkkoEysQXk78nHuKWymwMptW3HS1ai-G9h5udlq6iVezOwOPVyjYIy24c4Hd8KoWkYhbOz4H27v7OOz_NaghVvIhMo8wwaQujB--pT';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Penthouse Mirabad',
    price: '$1,250,000',
    numericPrice: 1250000,
    location: 'г. Ташкент, Мирабадский р-н',
    district: 'Мирабадский',
    dealType: 'Купить',
    bedrooms: 3,
    bathrooms: 2,
    area: '280 м²',
    badge: 'EXCLUSIVE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHfivVFclY7BBykXnpKP6Zhoo63GJ9q4lmhunEX5F_YZCXXeh4CWOTmKRC_rKMlTDD9xJjW7-TACxBoqH94MGjW-WWkmNjhs9-idB7-F7wa0IyUSR9FILLZ7-Uk5qg5GdaFk-8Yih0zOia5ud3jPQWqlGI9kuYuGzxshgRyQGJNYIxVCO33vluzO5vSoq1Mek6ffkAx0djujKne_St6qKsWA0l20IPbDkDd94Fdjf4CpiBpKatAiJu',
    description: 'Эксклюзивный двухуровневый пентхаус с панорамным видом на весь центр Ташкента. Авторский дизайнерский ремонт, премиальные отделочные материалы, просторная терраса и собственная система «Умный дом».',
    features: ['Панорамная терраса', 'Система Умный дом', 'Подземный паркинг', 'Приватный лифт', 'Консьерж 24/7']
  },
  {
    id: '2',
    title: 'Villa Residence',
    price: '$2,800,000',
    numericPrice: 2800000,
    location: 'г. Ташкент, Кибрайский р-н',
    district: 'Мирзо-Улугбекский',
    dealType: 'Купить',
    bedrooms: 5,
    area: '650 м²',
    badge: 'NEW',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDKXFJ8az1PbsKCPpkgi0iAB5aDEWCwoWrVBRpPvkxTS0FCzmcg1Zez1IbqwFnJwl3mZN0CMWhJqS2mMwEwFUXRqWOv21mYC9WLKlKo4vw32ig3ftsnamMs4RGMnOu54DnjP2R2RIJywxfphP9Szse2PT9sbq6ROQ_0VU365AVBNpH-ahsBwUM9kcBL-lXQnln4l4LIfEPnuooNx5b9ujnfzUA7Gs2QTd58T-OBLP_HF70E2hkjizzg',
    description: 'Роскошная современная резиденция в экологически чистом районе с переливным бассейном, ландшафтным садом и гостевым домом. Полная приватность и высший уровень безопасности.',
    features: ['Инфинити бассейн', 'Ландшафтный дизайн', 'Гостевой дом', 'Охрана 24/7', 'Гараж на 4 авто']
  },
  {
    id: '3',
    title: 'Loft Apartment',
    price: '$450,000',
    numericPrice: 450000,
    location: 'г. Ташкент, Яккасарайский р-н',
    district: 'Яккасарайский',
    dealType: 'Купить',
    bedrooms: 2,
    bathrooms: 1,
    area: '140 м²',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-Y-EeEDRM170yO_wmV0M2qh4tnnNxTtWDsPwfWxD-yjMO0paaf-h6tACSMrek9Pqnc52siQNFFP_ShKwQn1nkyIVDqEO7CPQkYsw_HuMKVM4UZ3_06zH-I_eznui12nYjrz4_ThGTe3kKFSjEyM3-7kKdxkrv7iyXRNmF7hARiDLlSptfvGXKaVbj8o20OWkaUgwKu-91ORJ8WH4VQJnm4uRCTvU8Nl6LAubxc0LpdEEdb2OesDTL',
    description: 'Дизайнерский лофт с высокими потолками 4.5м, открытой планировкой и винтажной отделкой. Идеальное пространство для ценителей стильной урбанистической архитектуры.',
    features: ['Высокие потолки 4.5м', 'Панорамные окна', 'Дизайнерская мебель', 'Закрытый двор', 'Фитнес-зал в ЖК']
  },
  {
    id: '4',
    title: 'Sky Residence',
    price: '$890,000',
    numericPrice: 890000,
    location: 'Tashkent City, Блок A',
    district: 'Юнусабадский',
    dealType: 'Купить',
    bedrooms: 4,
    bathrooms: 3,
    area: '210 м²',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAB9KbF4aWcF-YitMz2HpNQpXAm3eNGGqILxqNxhLnfZYFADxTT8L5KQT45OkRAAoiN1jMHq-f-h_MuH9sA3aL3o5BUA1aqq3D6MYz2YE5MyfMaleEdylpOqCaqLg38MoPvk7defZ30PTPeATJm4LvUsh0EqRyPwtUcGkGGmwpfpPwe79AP8Ll7KJGbiXQLeqMJpmD8QNMZXGDml1YVlheTtgmSIw3mtbjh3FfdJd0eE4towIQip1L',
    description: 'Видовые апартаменты премиум-класса в флагманском небоскребе Tashkent City. Из окон открывается великолепный вид на парк и фонтаны.',
    features: ['Вид на Tashkent City Park', 'Сервис 5* отеля', 'СПА и бассейны', 'Паркинг', 'Рестораны в здании']
  },
  {
    id: '5',
    title: 'Grand Mansion',
    price: '$5,500,000',
    numericPrice: 5500000,
    location: 'г. Ташкент, Луначарский р-н',
    district: 'Мирзо-Улугбекский',
    dealType: 'Купить',
    bedrooms: 8,
    area: '1200 м²',
    badge: 'ELITE',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8PcLyTFQd8e0EeiE1hSmxFNxmX-kNi7_zDmaMXVts6Q8Yp9yCpK6OCMmi-1ZAvHWpxvVp75OphXu9toLtCCCkDJTsvAJo7vHc6kwyQCVCeVJVkXqQj9qq8s9VHZZ-ZOMUd4EO992yeQQz5azmy6RhN3x0i_l7odUh6ocY_CdzfoY0XAIvxi5z5_be1ff8gks2fIwol4nGa2k0lu6J-fHwyMlkx73ztd5PEYrvuvIK0Z_igl0B-DLl',
    description: 'Величественный классический особняк с мраморной отделкой, собственным СПА-комплексом, внутренним и внешним бассейнами и теннисным кортом.',
    features: ['Внутренний СПА-комплекс', 'Открытый и закрытый бассейны', 'Теннисный корт', 'Винный погреб', 'Дом для персонала']
  },
  {
    id: '6',
    title: 'Modern Duplex',
    price: '$620,000',
    numericPrice: 620000,
    location: 'г. Ташкент, Чиланзарский р-н',
    district: 'Чиланзарский',
    dealType: 'Купить',
    bedrooms: 3,
    bathrooms: 2,
    area: '185 м²',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9MZ3NwaUIb9h70VHak_bvhSjpD3wAk6dQhtv2F4lFQo6hlprypPXhPYtXguFStXdeCTnRzGBZ4rXu4aoCmsm_N-JwFwbWQxERO2IwKUFWcUwZJwqNIhHM44ldX_yvxoBjPFIA1LU4F_f44_ygTMsjl5CzE-6S4CCkLnieMK1H-rB3_hBF9M5JSuWe9byz3JpaGVOP29fFTsqEGXYTuZ8BEuQX7E5loECYv4fXAXl3Dx-KNdHVJa19',
    description: 'Современный дуплекс в двух уровнях с парящей лестницей, панорамным остеклением и авторской европейской системой освещения.',
    features: ['Двухуровневая планировка', 'Парящая лестница', 'Европейская сантехника', 'Подземный автобокс']
  }
];

export const BROKERS: Broker[] = [
  {
    id: 'b1',
    name: 'Алишер Каримов',
    role: 'Основатель / Ведущий брокер',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnwlrgMPfSMN2y98ltjLNOyrtNxirJVwjdcV9GC_W26Ra9oZjFnV6VbvnPO3ti0ZUWlt4zJJkMJVsxsuqIGuwBrUzoxvFfje_3FlJBA_zi84e3o5alkvjNTntumlGiaNsBO36Ghbh8cw5Cdk672wd6fTTlJ-NRS0ZDORkuYx1EG5N0F0coMpRFryxJtwEZXsWaaAkVg8yfm0-egdNpE9xWZiOgOHFkVPujeLlfHqArOy-ade8ohU3b'
  },
  {
    id: 'b2',
    name: 'Малика Саидова',
    role: 'Эксперт по новостройкам',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9Dr2ySZ--AxZ7EcMC7QZJwnMFT8pT97A6Mk95xBAL7TQgRavzBUX-KUsGZh_ov73Xc913sMuJHI8ClAta-JDDgfUzOuhoBn3SmE3eBOje7ADQrcPgSFMnFnJIPmMAkQxVx30hFKq7dC2OQxZJUUWGTKwdg46hQ3e-3jDbwrOhLwkkv4c5EbeG5BYtQDr9wkPgA0G0V59Lw5q9GEXpQi1dFDw6U9-nZXLmwnNujSNBtyW9iXtKaCx7'
  },
  {
    id: 'b3',
    name: 'Рустам Исламов',
    role: 'Специалист по инвестициям',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-v9AhrTpShbS3JUT8q26aBeb4wGe5egNmuRTbzK7kaqFkgrMaR59cJg1cZlSVp7UrtWmrtJFrQPzrUDh7ZFJVWyfbZ-fkwOvHtjnM_T6sy3_J7poXEXfsyjEHHOftzaalMbvVg7ZuCqHpU4epTEwMvqlwVk0iwGMxvNWyIP9LkPPsdLoauLrcG5qzvy0uRlpaI1SQWNC26ZoDt1uoe2gLfRrfISQKbHK9nJMC5IhRJe4bokabTQMI'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    icon: 'gavel',
    title: 'Юридическое сопровождение',
    description: 'Полная проверка чистоты сделки, подготовка документов и сопровождение на всех этапах регистрации собственности.'
  },
  {
    id: 's2',
    icon: 'apartment',
    title: 'Покупка новостроек',
    description: 'Прямой доступ к закрытым продажам в лучших жилых комплексах Ташкента от проверенных застройщиков.'
  },
  {
    id: 's3',
    icon: 'analytics',
    title: 'Оценка',
    description: 'Профессиональный анализ рыночной стоимости объектов элитной недвижимости на основе глубокой экспертизы рынка.'
  }
];
