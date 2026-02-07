import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Gift,
  Globe2,
  Moon,
  Sparkles,
  Sun,
  Truck,
} from 'lucide-react';

const LANGUAGE_OPTIONS = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ar', label: 'العربية', short: 'AR' },
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'it', label: 'Italiano', short: 'IT' },
  { code: 'pt', label: 'Português', short: 'PT' },
  { code: 'tr', label: 'Türkçe', short: 'TR' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'zh', label: '中文', short: '中文' },
];

const copy = {
  en: {
    brand: 'Trend Of The World',
    tagline: 'Mood Soaps',
    nav: {
      products: 'The Soaps',
      about: 'Our Story',
      features: 'Features',
    },
    hero: {
      eyebrow: 'Premium Mood Soaps',
      title: ['Pick Your Mood', 'Pick Your Soap'],
      subtitle: 'Premium mood soaps that mix luxury with humor, crafted to match how you feel today.',
      cta: 'Order Now',
      note: 'Limited drops. Small batches. Big moods.',
    },
    about: {
      title: 'Our Story',
      body: 'Trend Of The World is a premium mood soap collection. We make self-care playful, sensual, and proudly giftable - not just another bar on the sink.',
      bullets: [
        'Made in China with rigorous quality control.',
        'Luxury aesthetic with surprise scents.',
        'Each bar is a mood - not just a fragrance.',
      ],
    },
    products: {
      title: 'Choose Your Mood',
      subtitle: 'Four signature moods, four bold personalities.',
      items: [
        {
          title: 'Mentally Out Of Office',
          tone: 'Calm and reset',
          desc: 'Tropical calm for quiet days and clear minds.',
        },
        {
          title: 'Self-Love Mode On',
          tone: 'Warm and soft',
          desc: 'A luxurious glow for self-care rituals.',
        },
        {
          title: "I'm Fine. It's Fine.",
          tone: 'Bright and bold',
          desc: 'Lift your mood when life gets loud.',
        },
        {
          title: 'Washing Away My Bad Decisions',
          tone: 'Fresh and clean',
          desc: 'For new beginnings and clean slates.',
        },
      ],
    },
    features: {
      title: 'Why People Love It',
      subtitle: 'Designed for gifting, daily ritual, and global delivery.',
      items: [
        {
          title: 'Worldwide Shipping',
          text: 'Tracked delivery across major regions.',
        },
        {
          title: 'Surprise Scents',
          text: 'Each mood hides a unique sensory twist.',
        },
        {
          title: 'Gift-Ready Packaging',
          text: 'Premium unboxing that feels expensive.',
        },
      ],
    },
    footer: {
      phone: '0919330802',
      rights: '© 2026 Trend Of The World. All rights reserved.',
      languages: 'Languages',
    },
    ui: {
      language: 'Language',
      theme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      menu: 'Menu',
      close: 'Close',
    },
  },
  ar: {
    brand: 'Trend Of The World',
    tagline: 'صابون المزاج',
    nav: {
      products: 'المنتجات',
      about: 'قصتنا',
      features: 'المميزات',
    },
    hero: {
      eyebrow: 'صابون فاخر للمزاج',
      title: ['اختر مزاجك', 'اختر صابونك'],
      subtitle: 'مجموعة صابون فاخرة بروح مرحة صممت لتناسب شعورك اليوم.',
      cta: 'اطلب الآن',
      note: 'دفعات محدودة. كميات صغيرة. مزاج كبير.',
    },
    about: {
      title: 'قصتنا',
      body: 'Trend Of The World ليست مجرد صابون؛ إنها تجربة مزاجية. ندمج الفخامة مع الدعابة لنمنحك طقوس عناية ممتعة وقابلة للإهداء.',
      bullets: [
        'تصنيع في الصين بجودة عالية ومعايير دقيقة.',
        'تصميم فاخر وروائح مفاجئة.',
        'كل قطعة تمثل حالة شعورية.',
      ],
    },
    products: {
      title: 'اختر مزاجك',
      subtitle: 'أربع حالات رئيسية بأربع شخصيات جريئة.',
      items: [
        {
          title: 'Mentally Out Of Office',
          tone: 'هدوء وراحة',
          desc: 'طاقة استوائية للهدوء والصفاء.',
        },
        {
          title: 'Self-Love Mode On',
          tone: 'عناية ودفء',
          desc: 'فخامة ناعمة لطقوس الاهتمام بالنفس.',
        },
        {
          title: "I'm Fine. It's Fine.",
          tone: 'طاقة قوية',
          desc: 'اشراقة فورية عندما يضغطك اليوم.',
        },
        {
          title: 'Washing Away My Bad Decisions',
          tone: 'بداية جديدة',
          desc: 'نظافة منعشة لبدايات مختلفة.',
        },
      ],
    },
    features: {
      title: 'لماذا يحبه الجميع؟',
      subtitle: 'مصمم للهدايا وروتينك اليومي والتوصيل الدولي.',
      items: [
        {
          title: 'شحن دولي',
          text: 'توصيل مع تتبع لمعظم المناطق.',
        },
        {
          title: 'روائح مفاجئة',
          text: 'كل مزاج يخفي لمسة حسية مختلفة.',
        },
        {
          title: 'تغليف هدية',
          text: 'تجربة فتح فاخرة ومبهرة.',
        },
      ],
    },
    footer: {
      phone: '0919330802',
      rights: '© 2026 Trend Of The World. جميع الحقوق محفوظة.',
      languages: 'اللغات',
    },
    ui: {
      language: 'اللغة',
      theme: 'المظهر',
      light: 'فاتح',
      dark: 'داكن',
      menu: 'القائمة',
      close: 'إغلاق',
    },
  },
  fr: {
    brand: 'Trend Of The World',
    tagline: "Savons d'humeur",
    nav: {
      products: 'Les savons',
      about: 'Notre histoire',
      features: 'Atouts',
    },
    hero: {
      eyebrow: "Savons d'humeur premium",
      title: ['Choisissez votre humeur', 'Choisissez votre savon'],
      subtitle: "Des savons d'humeur premium qui mêlent luxe et humour, pensés pour accompagner ce que vous ressentez aujourd'hui.",
      cta: 'Commander maintenant',
      note: 'Séries limitées. Petits lots. Grandes humeurs.',
    },
    about: {
      title: 'Notre histoire',
      body: "Trend Of The World est une collection premium de savons d'humeur. Nous rendons le self-care ludique, sensuel et digne d'être offert - pas seulement un savon de plus.",
      bullets: [
        'Fabriqué en Chine avec un contrôle qualité rigoureux.',
        'Esthétique luxueuse avec des parfums surprises.',
        "Chaque barre est une humeur, pas seulement un parfum.",
      ],
    },
    products: {
      title: 'Choisissez votre humeur',
      subtitle: 'Quatre humeurs signatures, quatre personnalités audacieuses.',
      items: [
        {
          title: 'Mentally Out Of Office',
          tone: 'Calme et reset',
          desc: 'Calme tropical pour des journées paisibles et un esprit clair.',
        },
        {
          title: 'Self-Love Mode On',
          tone: 'Doux et chaleureux',
          desc: 'Un éclat luxueux pour les rituels de self-care.',
        },
        {
          title: "I'm Fine. It's Fine.",
          tone: 'Lumineux et audacieux',
          desc: "Remonte le moral quand la journée s'accélère.",
        },
        {
          title: 'Washing Away My Bad Decisions',
          tone: 'Frais et propre',
          desc: 'Pour de nouveaux départs et des pages blanches.',
        },
      ],
    },
    features: {
      title: "Pourquoi on l'adore",
      subtitle: 'Pensé pour offrir, le rituel quotidien et la livraison mondiale.',
      items: [
        {
          title: 'Expédition mondiale',
          text: 'Livraison suivie dans les grandes régions.',
        },
        {
          title: 'Parfums surprises',
          text: 'Chaque humeur cache une touche sensorielle unique.',
        },
        {
          title: 'Packaging cadeau',
          text: 'Unboxing premium qui paraît luxueux.',
        },
      ],
    },
    footer: {
      phone: '0919330802',
      rights: '© 2026 Trend Of The World. Tous droits réservés.',
      languages: 'Langues',
    },
    ui: {
      language: 'Langue',
      theme: 'Thème',
      light: 'Clair',
      dark: 'Sombre',
      menu: 'Menu',
      close: 'Fermer',
    },
  },
  es: {
    brand: 'Trend Of The World',
    tagline: 'Jabones de humor',
    nav: {
      products: 'Los jabones',
      about: 'Nuestra historia',
      features: 'Características',
    },
    hero: {
      eyebrow: 'Jabones de humor premium',
      title: ['Elige tu humor', 'Elige tu jabón'],
      subtitle: 'Jabones de humor premium que mezclan lujo y humor, creados para acompañar cómo te sientes hoy.',
      cta: 'Pedir ahora',
      note: 'Ediciones limitadas. Lotes pequeños. Grandes humores.',
    },
    about: {
      title: 'Nuestra historia',
      body: 'Trend Of The World es una colección premium de jabones de humor. Hacemos el cuidado personal divertido, sensual y perfecto para regalar.',
      bullets: [
        'Fabricado en China con control de calidad riguroso.',
        'Estética de lujo con aromas sorpresa.',
        'Cada barra es un estado de ánimo, no solo una fragancia.',
      ],
    },
    products: {
      title: 'Elige tu humor',
      subtitle: 'Cuatro humores icónicos, cuatro personalidades audaces.',
      items: [
        {
          title: 'Mentally Out Of Office',
          tone: 'Calma y reset',
          desc: 'Calma tropical para días tranquilos y mente clara.',
        },
        {
          title: 'Self-Love Mode On',
          tone: 'Cálido y suave',
          desc: 'Un brillo lujoso para rituales de autocuidado.',
        },
        {
          title: "I'm Fine. It's Fine.",
          tone: 'Brillante y audaz',
          desc: 'Levanta el ánimo cuando el día se acelera.',
        },
        {
          title: 'Washing Away My Bad Decisions',
          tone: 'Fresco y limpio',
          desc: 'Para nuevos comienzos y hojas en blanco.',
        },
      ],
    },
    features: {
      title: 'Por qué encanta',
      subtitle: 'Diseñado para regalar, el ritual diario y el envío global.',
      items: [
        {
          title: 'Envío internacional',
          text: 'Entrega con seguimiento en regiones clave.',
        },
        {
          title: 'Aromas sorpresa',
          text: 'Cada humor guarda un giro sensorial único.',
        },
        {
          title: 'Empaque para regalo',
          text: 'Unboxing premium que se siente costoso.',
        },
      ],
    },
    footer: {
      phone: '0919330802',
      rights: '© 2026 Trend Of The World. Todos los derechos reservados.',
      languages: 'Idiomas',
    },
    ui: {
      language: 'Idioma',
      theme: 'Tema',
      light: 'Claro',
      dark: 'Oscuro',
      menu: 'Menú',
      close: 'Cerrar',
    },
  },
  de: {
    brand: 'Trend Of The World',
    tagline: 'Mood-Seifen',
    nav: {
      products: 'Die Seifen',
      about: 'Unsere Geschichte',
      features: 'Highlights',
    },
    hero: {
      eyebrow: 'Premium Mood-Seifen',
      title: ['Wähle deine Stimmung', 'Wähle deine Seife'],
      subtitle: 'Premium Mood-Seifen, die Luxus und Humor verbinden - gemacht für dein Gefühl von heute.',
      cta: 'Jetzt bestellen',
      note: 'Limitierte Drops. Kleine Chargen. Große Stimmung.',
    },
    about: {
      title: 'Unsere Geschichte',
      body: 'Trend Of The World ist eine Premium-Kollektion von Mood-Seifen. Wir machen Self-Care spielerisch, sinnlich und perfekt zum Verschenken.',
      bullets: [
        'Hergestellt in China mit strenger Qualitätskontrolle.',
        'Luxus-Ästhetik mit Überraschungsdüften.',
        'Jeder Riegel ist eine Stimmung - nicht nur ein Duft.',
      ],
    },
    products: {
      title: 'Wähle deine Stimmung',
      subtitle: 'Vier Signature-Moods, vier starke Persönlichkeiten.',
      items: [
        {
          title: 'Mentally Out Of Office',
          tone: 'Ruhig und reset',
          desc: 'Tropische Ruhe für leise Tage und klare Gedanken.',
        },
        {
          title: 'Self-Love Mode On',
          tone: 'Warm und weich',
          desc: 'Ein luxuriöser Glow für Self-Care-Rituale.',
        },
        {
          title: "I'm Fine. It's Fine.",
          tone: 'Hell und mutig',
          desc: 'Hebt die Stimmung, wenn der Tag laut wird.',
        },
        {
          title: 'Washing Away My Bad Decisions',
          tone: 'Frisch und sauber',
          desc: 'Für Neubeginn und saubere Seiten.',
        },
      ],
    },
    features: {
      title: 'Warum es alle lieben',
      subtitle: 'Für Geschenke, tägliche Rituale und weltweiten Versand.',
      items: [
        {
          title: 'Weltweiter Versand',
          text: 'Sendungsverfolgung in wichtigen Regionen.',
        },
        {
          title: 'Überraschungsdüfte',
          text: 'Jede Stimmung bringt einen sensorischen Twist.',
        },
        {
          title: 'Geschenkverpackung',
          text: 'Premium-Unboxing, das teuer wirkt.',
        },
      ],
    },
    footer: {
      phone: '0919330802',
      rights: '© 2026 Trend Of The World. Alle Rechte vorbehalten.',
      languages: 'Sprachen',
    },
    ui: {
      language: 'Sprache',
      theme: 'Thema',
      light: 'Hell',
      dark: 'Dunkel',
      menu: 'Menü',
      close: 'Schließen',
    },
  },
  it: {
    brand: 'Trend Of The World',
    tagline: "Saponi d'umore",
    nav: {
      products: 'I saponi',
      about: 'La nostra storia',
      features: 'Caratteristiche',
    },
    hero: {
      eyebrow: "Saponi d'umore premium",
      title: ['Scegli il tuo umore', 'Scegli il tuo sapone'],
      subtitle: "Saponi d'umore premium che uniscono lusso e ironia, creati per accompagnare come ti senti oggi.",
      cta: 'Ordina ora',
      note: 'Edizioni limitate. Piccoli lotti. Grandi umori.',
    },
    about: {
      title: 'La nostra storia',
      body: "Trend Of The World è una collezione premium di saponi d'umore. Rendiamo la cura di sé giocosa, sensuale e perfetta da regalare.",
      bullets: [
        'Prodotto in Cina con controllo qualità rigoroso.',
        'Estetica di lusso con profumi a sorpresa.',
        'Ogni saponetta è un umore, non solo una fragranza.',
      ],
    },
    products: {
      title: 'Scegli il tuo umore',
      subtitle: 'Quattro umori iconici, quattro personalità audaci.',
      items: [
        {
          title: 'Mentally Out Of Office',
          tone: 'Calmo e reset',
          desc: 'Calma tropicale per giorni tranquilli e mente lucida.',
        },
        {
          title: 'Self-Love Mode On',
          tone: 'Caldo e morbido',
          desc: 'Un bagliore lussuoso per i rituali di self-care.',
        },
        {
          title: "I'm Fine. It's Fine.",
          tone: 'Luminoso e audace',
          desc: "Alza l'umore quando la giornata è intensa.",
        },
        {
          title: 'Washing Away My Bad Decisions',
          tone: 'Fresco e pulito',
          desc: 'Per nuovi inizi e pagine pulite.',
        },
      ],
    },
    features: {
      title: 'Perché piace a tutti',
      subtitle: 'Pensato per regali, rituali quotidiani e consegne globali.',
      items: [
        {
          title: 'Spedizione mondiale',
          text: 'Consegna tracciata nelle principali regioni.',
        },
        {
          title: 'Profumi sorpresa',
          text: 'Ogni umore nasconde un twist sensoriale.',
        },
        {
          title: 'Confezione regalo',
          text: 'Unboxing premium che sembra costoso.',
        },
      ],
    },
    footer: {
      phone: '0919330802',
      rights: '© 2026 Trend Of The World. Tutti i diritti riservati.',
      languages: 'Lingue',
    },
    ui: {
      language: 'Lingua',
      theme: 'Tema',
      light: 'Chiaro',
      dark: 'Scuro',
      menu: 'Menu',
      close: 'Chiudi',
    },
  },
  pt: {
    brand: 'Trend Of The World',
    tagline: 'Sabonetes de humor',
    nav: {
      products: 'Os sabonetes',
      about: 'Nossa história',
      features: 'Destaques',
    },
    hero: {
      eyebrow: 'Sabonetes de humor premium',
      title: ['Escolha seu humor', 'Escolha seu sabonete'],
      subtitle: 'Sabonetes de humor premium que unem luxo e humor, criados para acompanhar como você se sente hoje.',
      cta: 'Pedir agora',
      note: 'Edições limitadas. Lotes pequenos. Grandes humores.',
    },
    about: {
      title: 'Nossa história',
      body: 'Trend Of The World é uma coleção premium de sabonetes de humor. Tornamos o autocuidado divertido, sensorial e perfeito para presentear.',
      bullets: [
        'Fabricado na China com controle de qualidade rigoroso.',
        'Estética de luxo com aromas surpresa.',
        'Cada barra é um humor, não apenas uma fragrância.',
      ],
    },
    products: {
      title: 'Escolha seu humor',
      subtitle: 'Quatro humores icônicos, quatro personalidades ousadas.',
      items: [
        {
          title: 'Mentally Out Of Office',
          tone: 'Calmo e reset',
          desc: 'Calma tropical para dias tranquilos e mente clara.',
        },
        {
          title: 'Self-Love Mode On',
          tone: 'Quente e suave',
          desc: 'Um brilho luxuoso para rituais de autocuidado.',
        },
        {
          title: "I'm Fine. It's Fine.",
          tone: 'Brilhante e ousado',
          desc: 'Eleva o humor quando o dia fica intenso.',
        },
        {
          title: 'Washing Away My Bad Decisions',
          tone: 'Fresco e limpo',
          desc: 'Para novos começos e páginas limpas.',
        },
      ],
    },
    features: {
      title: 'Por que todos amam',
      subtitle: 'Feito para presentear, rituais diários e entrega global.',
      items: [
        {
          title: 'Envio internacional',
          text: 'Entrega com rastreamento nas principais regiões.',
        },
        {
          title: 'Aromas surpresa',
          text: 'Cada humor esconde um toque sensorial único.',
        },
        {
          title: 'Embalagem para presente',
          text: 'Unboxing premium com sensação de luxo.',
        },
      ],
    },
    footer: {
      phone: '0919330802',
      rights: '© 2026 Trend Of The World. Todos os direitos reservados.',
      languages: 'Idiomas',
    },
    ui: {
      language: 'Idioma',
      theme: 'Tema',
      light: 'Claro',
      dark: 'Escuro',
      menu: 'Menu',
      close: 'Fechar',
    },
  },
  tr: {
    brand: 'Trend Of The World',
    tagline: 'Mood sabunlar',
    nav: {
      products: 'Sabunlar',
      about: 'Hikayemiz',
      features: 'Öne çıkanlar',
    },
    hero: {
      eyebrow: 'Premium mood sabunlar',
      title: ['Ruh halini seç', 'Sabununu seç'],
      subtitle: 'Lüks ve mizahı birleştiren premium mood sabunlar, bugün nasıl hissettiğine göre tasarlandı.',
      cta: 'Şimdi sipariş ver',
      note: 'Sınırlı üretim. Küçük partiler. Büyük ruh hali.',
    },
    about: {
      title: 'Hikayemiz',
      body: 'Trend Of The World, premium bir mood sabun koleksiyonudur. Öz bakımı eğlenceli, duyusal ve hediye edilebilir hale getiriyoruz.',
      bullets: [
        'Çin’de sıkı kalite kontrolüyle üretilir.',
        'Lüks estetik ve sürpriz kokular.',
        'Her bar bir ruh halidir, sadece bir koku değil.',
      ],
    },
    products: {
      title: 'Ruh halini seç',
      subtitle: 'Dört imza mood, dört cesur kişilik.',
      items: [
        {
          title: 'Mentally Out Of Office',
          tone: 'Sakin ve reset',
          desc: 'Sessiz günler ve berrak zihinler için tropik huzur.',
        },
        {
          title: 'Self-Love Mode On',
          tone: 'Sıcak ve yumuşak',
          desc: 'Öz bakım ritüelleri için lüks bir ışıltı.',
        },
        {
          title: "I'm Fine. It's Fine.",
          tone: 'Parlak ve cesur',
          desc: 'Gün hızlandığında ruh halini yükseltir.',
        },
        {
          title: 'Washing Away My Bad Decisions',
          tone: 'Ferahlık ve temizlik',
          desc: 'Yeni başlangıçlar ve temiz sayfalar için.',
        },
      ],
    },
    features: {
      title: 'Neden seviliyor',
      subtitle: 'Hediye, günlük ritüel ve global teslimat için tasarlandı.',
      items: [
        {
          title: 'Dünya çapında kargo',
          text: 'Önemli bölgelerde takipli teslimat.',
        },
        {
          title: 'Sürpriz kokular',
          text: 'Her mood benzersiz bir duyusal dokunuş taşır.',
        },
        {
          title: 'Hediye ambalajı',
          text: 'Premium açılış deneyimi.',
        },
      ],
    },
    footer: {
      phone: '0919330802',
      rights: '© 2026 Trend Of The World. Tüm hakları saklıdır.',
      languages: 'Diller',
    },
    ui: {
      language: 'Dil',
      theme: 'Tema',
      light: 'Açık',
      dark: 'Koyu',
      menu: 'Menü',
      close: 'Kapat',
    },
  },
  ru: {
    brand: 'Trend Of The World',
    tagline: 'Настроение в мыле',
    nav: {
      products: 'Мыла',
      about: 'Наша история',
      features: 'Особенности',
    },
    hero: {
      eyebrow: 'Премиальные мыла настроения',
      title: ['Выбери настроение', 'Выбери мыло'],
      subtitle: 'Премиальные мыла, сочетающие роскошь и юмор, чтобы отражать твое состояние сегодня.',
      cta: 'Заказать сейчас',
      note: 'Лимитированные серии. Малые партии. Большое настроение.',
    },
    about: {
      title: 'Наша история',
      body: 'Trend Of The World — премиальная коллекция мыла настроения. Мы делаем уход за собой игривым, чувственным и идеально подходящим для подарка.',
      bullets: [
        'Производство в Китае с жестким контролем качества.',
        'Роскошная эстетика и неожиданные ароматы.',
        'Каждый брусок — это настроение, а не просто аромат.',
      ],
    },
    products: {
      title: 'Выбери настроение',
      subtitle: 'Четыре фирменных настроения, четыре ярких характера.',
      items: [
        {
          title: 'Mentally Out Of Office',
          tone: 'Спокойствие и перезагрузка',
          desc: 'Тропическое спокойствие для тихих дней и ясного ума.',
        },
        {
          title: 'Self-Love Mode On',
          tone: 'Тепло и мягкость',
          desc: 'Роскошное сияние для ритуалов заботы о себе.',
        },
        {
          title: "I'm Fine. It's Fine.",
          tone: 'Ярко и смело',
          desc: 'Поднимает настроение, когда день становится шумным.',
        },
        {
          title: 'Washing Away My Bad Decisions',
          tone: 'Свежесть и чистота',
          desc: 'Для новых стартов и чистых страниц.',
        },
      ],
    },
    features: {
      title: 'Почему любят',
      subtitle: 'Для подарков, ежедневных ритуалов и глобальной доставки.',
      items: [
        {
          title: 'Доставка по миру',
          text: 'Отслеживаемая доставка в ключевые регионы.',
        },
        {
          title: 'Сюрприз-ароматы',
          text: 'Каждое настроение скрывает уникальный сенсорный штрих.',
        },
        {
          title: 'Подарочная упаковка',
          text: 'Премиальный анбоксинг с эффектом роскоши.',
        },
      ],
    },
    footer: {
      phone: '0919330802',
      rights: '© 2026 Trend Of The World. Все права защищены.',
      languages: 'Языки',
    },
    ui: {
      language: 'Язык',
      theme: 'Тема',
      light: 'Светлая',
      dark: 'Темная',
      menu: 'Меню',
      close: 'Закрыть',
    },
  },
  zh: {
    brand: 'Trend Of The World',
    tagline: '情绪香皂',
    nav: {
      products: '香皂系列',
      about: '我们的故事',
      features: '亮点',
    },
    hero: {
      eyebrow: '高级情绪香皂',
      title: ['选择你的心情', '选择你的香皂'],
      subtitle: '将奢华与幽默融合的高级情绪香皂，为你今天的心情而生。',
      cta: '立即下单',
      note: '限量发售，小批量，大情绪。',
    },
    about: {
      title: '我们的故事',
      body: 'Trend Of The World 是高级情绪香皂系列，让自我护理变得有趣、感性且适合送礼。',
      bullets: [
        '中国制造，严格品质管控。',
        '奢华外观与惊喜香气。',
        '每一块都是一种情绪，而不仅是香味。',
      ],
    },
    products: {
      title: '选择你的心情',
      subtitle: '四种标志情绪，四种大胆个性。',
      items: [
        {
          title: 'Mentally Out Of Office',
          tone: '平静与重启',
          desc: '热带宁静，适合安静的日子与清晰的思绪。',
        },
        {
          title: 'Self-Love Mode On',
          tone: '温暖柔和',
          desc: '为自我护理仪式打造的奢华光泽。',
        },
        {
          title: "I'm Fine. It's Fine.",
          tone: '明亮大胆',
          desc: '当生活喧嚣时提升你的心情。',
        },
        {
          title: 'Washing Away My Bad Decisions',
          tone: '清新洁净',
          desc: '给新的开始和干净的页。',
        },
      ],
    },
    features: {
      title: '为什么大家喜欢',
      subtitle: '适合送礼、日常仪式与全球配送。',
      items: [
        {
          title: '全球配送',
          text: '主要地区提供可追踪配送。',
        },
        {
          title: '惊喜香气',
          text: '每种情绪都有独特的感官惊喜。',
        },
        {
          title: '礼盒包装',
          text: '高级开箱体验，质感十足。',
        },
      ],
    },
    footer: {
      phone: '0919330802',
      rights: '© 2026 Trend Of The World. 版权所有。',
      languages: '语言',
    },
    ui: {
      language: '语言',
      theme: '主题',
      light: '浅色',
      dark: '深色',
      menu: '菜单',
      close: '关闭',
    },
  },
};

const productStyles = [
  {
    color: '#fbcfe8',
    glow: 'rgba(251, 207, 232, 0.35)',
    image: '/images/soap1-480.webp',
    srcSet: '/images/soap1-240.webp 240w, /images/soap1-360.webp 360w, /images/soap1-480.webp 480w, /images/soap1-640.webp 640w',
  },
  {
    color: '#f9a8d4',
    glow: 'rgba(249, 168, 212, 0.35)',
    image: '/images/soap2-480.webp',
    srcSet: '/images/soap2-240.webp 240w, /images/soap2-360.webp 360w, /images/soap2-480.webp 480w, /images/soap2-640.webp 640w',
  },
  {
    color: '#f472b6',
    glow: 'rgba(244, 114, 182, 0.35)',
    image: '/images/soap3-480.webp',
    srcSet: '/images/soap3-240.webp 240w, /images/soap3-360.webp 360w, /images/soap3-480.webp 480w, /images/soap3-640.webp 640w',
  },
  {
    color: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.35)',
    image: '/images/soap4-480.webp',
    srcSet: '/images/soap4-240.webp 240w, /images/soap4-360.webp 360w, /images/soap4-480.webp 480w, /images/soap4-640.webp 640w',
  },
];

const highlightIcons = [Sparkles, Globe2, Gift];
const featureIcons = [Truck, Sparkles, Gift];

const detectLanguage = () => {
  if (typeof navigator === 'undefined') return 'en';
  const value = (navigator.language || 'en').toLowerCase();
  if (value.startsWith('ar')) return 'ar';
  if (value.startsWith('fr')) return 'fr';
  if (value.startsWith('es')) return 'es';
  if (value.startsWith('de')) return 'de';
  if (value.startsWith('it')) return 'it';
  if (value.startsWith('pt')) return 'pt';
  if (value.startsWith('tr')) return 'tr';
  if (value.startsWith('ru')) return 'ru';
  if (value.startsWith('zh')) return 'zh';
  return 'en';
};

function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langMenuRef = useRef(null);

  useEffect(() => {
    const storedLang = localStorage.getItem('totw-lang');
    if (storedLang && copy[storedLang]) {
      setLang(storedLang);
    } else {
      setLang(detectLanguage());
    }

    const storedTheme = localStorage.getItem('totw-theme');
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('totw-lang', lang);
    setMenuOpen(false);
  }, [lang]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('totw-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (!langOpen) return;
    const handleClick = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [langOpen]);

  const t = copy[lang];
  const isRTL = lang === 'ar';
  const isDark = theme === 'dark';
  const currentLanguage = LANGUAGE_OPTIONS.find((item) => item.code === lang) || LANGUAGE_OPTIONS[0];

  const products = useMemo(() => {
    return t.products.items.map((item, index) => ({
      ...item,
      ...productStyles[index],
    }));
  }, [t.products.items]);

  const highlights = useMemo(() => {
    return t.about.bullets.map((item, index) => ({
      text: item,
      Icon: highlightIcons[index % highlightIcons.length],
    }));
  }, [t.about.bullets]);

  const features = useMemo(() => {
    return t.features.items.map((item, index) => ({
      ...item,
      Icon: featureIcons[index % featureIcons.length],
    }));
  }, [t.features.items]);

  const featurePrimary = features[0];
  const featureSecondary = features[1];
  const featureTertiary = features[2];


  return (
    <div className="sunset-page flow-text min-h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
      <header className="sunset-bar relative sticky top-0 z-40 overflow-hidden border-b border-amber-300/40 bg-pink-50/90 backdrop-blur-xl dark:border-amber-200/40 dark:bg-black/55">
        <div className={`relative z-10 mx-auto flex max-w-6xl items-center px-4 py-3 sm:px-6 sm:py-4 ${isRTL ? 'justify-end gap-4 md:justify-between md:flex-row-reverse' : 'justify-between'}`}>
          <div className={`flex items-center gap-3 sm:gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-secondary text-white shadow-soft">
              <Globe2 size={20} />
            </div>
            <div className={isRTL ? 'text-right' : 'text-left'}>
              <p className="hidden text-[11px] uppercase tracking-[0.45em] text-slate-500 dark:text-pink-600 sm:block">{t.tagline}</p>
              <h1 className="brand-title text-sm font-medium sm:text-lg">{t.brand}</h1>
            </div>
          </div>

          <nav className={`soap-nav hidden items-center gap-3 text-xs font-medium md:flex ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <a className="soap-nav__item" href="#products">{t.nav.products}</a>
            <span className="soap-nav__dot" aria-hidden="true" />
            <a className="soap-nav__item" href="#about">{t.nav.about}</a>
            <span className="soap-nav__dot" aria-hidden="true" />
            <a className="soap-nav__item" href="#features">{t.nav.features}</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-amber-300/60 bg-pink-50/90 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:border-amber-200/40 dark:bg-dark-card dark:text-pink-300 md:inline-flex"
            >
              {t.hero.cta}
            </a>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="sunset-hamburger group flex h-11 w-11 items-center justify-center rounded-full border border-amber-200/70 bg-pink-50/90 text-pink-700 shadow-lg transition hover:-translate-y-0.5 active:scale-95 dark:border-amber-200/30 dark:bg-pink-500/5 dark:text-pink-200 md:hidden"
              aria-label={menuOpen ? t.ui.close : t.ui.menu}
            >
              <span className={`hamburger-icon ${menuOpen ? 'is-open' : ''}`} aria-hidden="true">
                <span />
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="sunset-panel rounded-b-3xl border-t border-amber-300/40 bg-pink-50/95 px-5 py-4 shadow-lg backdrop-blur-2xl dark:border-amber-200/40 dark:bg-dark-card/95 md:hidden">
            <div className={`grid gap-3 text-sm font-medium ${isRTL ? 'text-right' : 'text-left'}`}>
              <a className="flex items-center justify-between rounded-xl border border-amber-100/70 bg-pink-50/90 px-4 py-3 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 dark:border-amber-200/40 dark:bg-pink-500/5 dark:text-pink-300" href="#products" onClick={() => setMenuOpen(false)}>
                <span>{t.nav.products}</span>
                <span className="text-pink-600 dark:text-pink-300">→</span>
              </a>
              <a className="flex items-center justify-between rounded-xl border border-amber-100/70 bg-pink-50/90 px-4 py-3 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 dark:border-amber-200/40 dark:bg-pink-500/5 dark:text-pink-300" href="#about" onClick={() => setMenuOpen(false)}>
                <span>{t.nav.about}</span>
                <span className="text-pink-600 dark:text-pink-300">→</span>
              </a>
              <a className="flex items-center justify-between rounded-xl border border-amber-100/70 bg-pink-50/90 px-4 py-3 text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-200 dark:border-amber-200/40 dark:bg-pink-500/5 dark:text-pink-300" href="#features" onClick={() => setMenuOpen(false)}>
                <span>{t.nav.features}</span>
                <span className="text-pink-600 dark:text-pink-300">→</span>
              </a>
              <a className="flex items-center justify-between rounded-xl border border-amber-100/70 bg-gradient-to-r from-pink-600 to-pink-400 px-4 py-3 text-white shadow-sm transition hover:-translate-y-0.5" href="#contact" onClick={() => setMenuOpen(false)}>
                <span>{t.hero.cta}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="main">
      <section className="overflow-hidden" id="hero">
        <div className="relative w-full">
          <img
            src="/images/hero-sea-1280.webp"
            srcSet="/images/hero-sea-640.webp 640w, /images/hero-sea-960.webp 960w, /images/hero-sea-1280.webp 1280w, /images/hero-sea-1600.webp 1600w"
            sizes="100vw"
            alt=""
            aria-hidden="true"
            fetchpriority="high"
            loading="eager"
            decoding="async"
            className="h-[60vh] w-full object-cover md:h-[75vh]"
          />
          <img
            src="/images/hero-text-640.webp"
            srcSet="/images/hero-text-320.webp 320w, /images/hero-text-480.webp 480w, /images/hero-text-640.webp 640w"
            sizes="(min-width: 768px) 52vw, 78vw"
            alt={t.brand}
            decoding="async"
            className="hero-text-fly absolute left-1/2 top-1/2 w-[78%] max-w-md drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] md:w-[52%] md:max-w-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200" />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-6 pb-12 text-center md:pt-10 md:pb-16">
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] uppercase tracking-[0.5em]">{t.hero.eyebrow}</p>
            <h2 className="text-3xl font-medium leading-tight sm:text-4xl md:text-6xl">
              {t.hero.title[0]}<br />{t.hero.title[1]}
            </h2>
            <p className="mt-6 text-base md:text-lg">{t.hero.subtitle}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-amber-400/80 bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-xl shadow-black/20 transition hover:-translate-y-1 dark:border-amber-300 dark:bg-pink-200 dark:text-black"
              >
                {t.hero.cta}
                <ArrowUpRight className="transition group-hover:translate-x-0.5" size={16} />
              </a>
              <span className="text-xs uppercase tracking-[0.35em]">{t.hero.note}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-visibility py-24" id="about">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-12">
            <div
              className="royal-card rounded-3xl p-8 shadow-soft backdrop-blur-xl md:col-span-7"
            >
              <p className="text-[11px] uppercase tracking-[0.45em] text-slate-500 dark:text-slate-400">{t.nav.about}</p>
              <h3 className="mt-4 text-3xl font-medium text-slate-900 dark:text-white md:text-4xl">{t.about.title}</h3>
              <p className="mt-5 text-base text-slate-600 dark:text-slate-300">{t.about.body}</p>
            </div>

            <div className="grid gap-6 md:col-span-5">
              <div
                className="royal-card rounded-3xl p-6 shadow-soft backdrop-blur-xl"
              >
                <p className="text-[11px] uppercase tracking-[0.45em] text-slate-500 dark:text-slate-400">Mood Lab</p>
                <div className="mt-6 grid gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="royal-mini flex items-center justify-between rounded-2xl px-4 py-3 shadow-sm">
                    <span>4</span>
                    <span>{lang === 'ar' ? 'حالات شعورية' : 'Signature Moods'}</span>
                  </div>
                  <div className="royal-mini flex items-center justify-between rounded-2xl px-4 py-3 shadow-sm">
                    <span>100%</span>
                    <span>{lang === 'ar' ? 'جاهز للشحن' : 'Deployment Ready'}</span>
                  </div>
                  <div className="royal-mini flex items-center justify-between rounded-2xl px-4 py-3 shadow-sm">
                    <span>24/7</span>
                    <span>{lang === 'ar' ? 'دعم العملاء' : 'Customer Support'}</span>
                  </div>
                </div>
              </div>

              {highlights.map((item, index) => (
                <div
                  key={`${item.text}-${index}`}
                  className="royal-card rounded-2xl p-4 shadow-soft backdrop-blur-xl"
                >
                  <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                    <div className="royal-icon flex h-11 w-11 items-center justify-center rounded-xl shadow-sm">
                      <item.Icon size={18} />
                    </div>
                    <p className="text-sm text-slate-800 dark:text-slate-200">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="content-visibility py-24" id="products">
        <div className="mx-auto max-w-6xl px-6">
          <div className={`mb-12 ${isRTL ? 'text-right' : 'text-center md:text-left'}`}>
            <p className="text-[11px] uppercase tracking-[0.45em] text-pink-700 dark:text-pink-200">Collection</p>
            <h3 className="text-ink-wave mt-3 text-3xl font-medium md:text-4xl">{t.products.title}</h3>
            <p className="mt-4 text-base text-slate-900 dark:text-slate-200">{t.products.subtitle}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.title}
                className="royal-card product-card group rounded-3xl p-6 shadow-soft backdrop-blur-2xl transition hover:-translate-y-2"
              >
                <div className="relative">
                  <div
                    className="absolute -inset-6 rounded-[32px] opacity-0 blur-3xl transition group-hover:opacity-100"
                    style={{ background: product.color }}
                  />
                  <div
                    className="relative rounded-[24px] border border-amber-300/60 bg-pink-900/30 shadow-xl"
                    style={{ boxShadow: isDark ? `0 0 45px ${product.glow}` : undefined }}
                  >
                          <img
                            src={product.image}
                            srcSet={product.srcSet}
                            sizes="(min-width: 1280px) 240px, (min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                            alt={product.title}
                            loading="lazy"
                            decoding="async"
                            className="h-52 w-full object-contain p-4 transition duration-700 group-hover:scale-105 sm:h-56 md:h-60"
                          />
                  </div>
                </div>
                <div className={`mt-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="flex items-center justify-between">
                    <h4 className="text-ink-wave text-xl font-medium">{product.title}</h4>
                    <span className="text-xs font-semibold text-pink-700 dark:text-pink-200">{lang === 'ar' ? 'مزاج' : 'Mood'}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-900 dark:text-slate-200">{product.desc}</p>
                  <span className="royal-pill mt-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold">
                    {product.tone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-visibility py-24" id="features">
        <div className="mx-auto max-w-6xl px-6">
          <div className={`mb-12 ${isRTL ? 'text-right' : 'text-center md:text-left'}`}>
            <p className="text-[11px] uppercase tracking-[0.45em] text-pink-700 dark:text-pink-200">Features</p>
            <h3 className={`mt-3 text-3xl font-medium md:text-4xl ${isDark ? 'text-ink-wave' : 'text-pink-800'}`}>{t.features.title}</h3>
            <p className="mt-4 text-base text-slate-900 dark:text-slate-200">{t.features.subtitle}</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {featurePrimary && (
              <div
                className="royal-card bubble-card rounded-3xl p-8 shadow-soft backdrop-blur-xl lg:col-span-7"
              >
                <div className={`flex items-start justify-between gap-6 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                  <div className="flex items-center gap-4">
                    <div className="royal-icon flex h-12 w-12 items-center justify-center rounded-2xl shadow-sm">
                      <featurePrimary.Icon size={22} />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.4em] text-pink-700 dark:text-pink-200">Feature 01</p>
                      <h4 className="text-ink-wave mt-2 text-2xl font-medium">{featurePrimary.title}</h4>
                    </div>
                  </div>
                  <span className="royal-pill hidden rounded-full px-3 py-1 text-xs font-semibold sm:inline-flex">
                    Premium
                  </span>
                </div>
                <p className="mt-6 text-base text-slate-900 dark:text-slate-200">{featurePrimary.text}</p>
                <div className={`mt-8 flex flex-wrap gap-3 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                  {features.map((item) => (
                    <span
                      key={item.title}
                      className="royal-pill rounded-full px-4 py-2 text-xs font-semibold"
                    >
                      {item.title}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="grid gap-6 lg:col-span-5">
              {featureSecondary && (
                <div
                  className="royal-card bubble-card relative overflow-hidden rounded-3xl p-6 shadow-soft backdrop-blur-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary" />
                  <div className={`mt-2 flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                    <div className="royal-icon flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm">
                      <featureSecondary.Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-ink-wave text-lg font-medium">{featureSecondary.title}</h4>
                      <p className="mt-2 text-sm text-slate-900 dark:text-slate-200">{featureSecondary.text}</p>
                    </div>
                  </div>
                </div>
              )}
              {featureTertiary && (
                <div
                  className="royal-card bubble-card relative overflow-hidden rounded-3xl p-6 shadow-soft backdrop-blur-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-secondary to-brand-primary" />
                  <div className={`mt-2 flex items-start gap-4 ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                    <div className="royal-icon flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm">
                      <featureTertiary.Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-ink-wave text-lg font-medium">{featureTertiary.title}</h4>
                      <p className="mt-2 text-sm text-slate-900 dark:text-slate-200">{featureTertiary.text}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      </main>

      <footer id="contact" className="sunset-footer border-t border-amber-300/40 py-12 text-sm text-slate-700 dark:border-amber-200/40 dark:text-slate-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-slate-400">Trend Of The World</p>
            <p className="mt-2 text-lg font-medium text-slate-900 dark:text-white">{t.brand}</p>
            <p className="mt-2">{lang === 'ar' ? 'الهاتف' : 'Phone'}: {t.footer.phone}</p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{t.footer.languages}</span>
            <div className="flex flex-wrap gap-2">
              {LANGUAGE_OPTIONS.map((item) => (
                <button
                  key={item.code}
                  onClick={() => setLang(item.code)}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${lang === item.code ? 'border-amber-400 text-slate-900 dark:border-amber-400 dark:text-white' : 'border-amber-300/60 text-slate-600 hover:border-amber-400/30 dark:border-amber-200/40 dark:text-slate-300 dark:hover:border-amber-400/50'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <span className="text-xs text-slate-400">{t.footer.rights}</span>
          </div>
        </div>
      </footer>

      <div
        ref={langMenuRef}
        className={`fixed bottom-6 z-50 ${isRTL ? 'left-6' : 'right-6'}`}
      >
        <div className="flex flex-col items-end gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-400 bg-pink-100 text-black shadow-xl ring-1 ring-amber-300/60 backdrop-blur-xl transition active:scale-95 dark:border-amber-300 dark:bg-pink-200 dark:text-black"
            aria-label={theme === 'dark' ? t.ui.light : t.ui.dark}
          >
            {theme === 'dark' ? <Sun size={20} className="text-black" /> : <Moon size={20} className="text-black" />}
          </button>

          <div className="relative">
            {langOpen && (
              <div className="absolute bottom-14 right-0 w-52 rounded-2xl border border-amber-500 bg-pink-100/95 p-2 shadow-xl backdrop-blur-xl dark:border-amber-400 dark:bg-pink-900/95">
                <div className="max-h-64 overflow-y-auto">
                  {LANGUAGE_OPTIONS.map((item) => (
                    <button
                      key={item.code}
                      onClick={() => {
                        setLang(item.code);
                        setLangOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition ${lang === item.code ? 'bg-pink-200 text-pink-900 dark:bg-pink-700/30 dark:text-white' : 'text-slate-900 hover:bg-pink-100/70 dark:text-pink-100 dark:hover:bg-pink-800/30'}`}
                    >
                      <span>{item.label}</span>
                      <span className="lang-short">{item.short}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
            <button
              onClick={() => setLangOpen((prev) => !prev)}
              className="flex items-center gap-2 rounded-full border border-amber-600 bg-pink-200 px-4 py-2 text-xs font-semibold text-slate-900 shadow-xl ring-1 ring-pink-400/40 backdrop-blur-xl transition active:scale-95 dark:border-amber-300 dark:bg-pink-900/90 dark:text-pink-100"
              aria-label={t.ui.language}
            >
              <Globe2 size={18} className="text-slate-900 dark:text-pink-100" />
              <span className="lang-short">{currentLanguage.short}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
