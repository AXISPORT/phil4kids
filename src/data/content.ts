export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  images: string[];
  features: string[];
}

export interface Album {
  slug: string;
  title: string;
  year: number;
  cover: string;
  description: string;
  spotifyUrl: string;
  tracks: { title: string; duration: string }[];
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  category: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 'card-game',
    name: 'Tierisch in Bewegung – Bewegungskartenspiel',
    description:
      'Das Bewegungskartenspiel für die ganze Familie! Jede Karte zeigt ein Tier mit einer lustigen Bewegungsaufgabe. Kinder lernen die Tiere kennen, imitieren ihre Bewegungen und kommen dabei richtig in Schwung. Ideal für drinnen und draußen, zu Hause und auf Reisen.',
    price: '19,99 €',
    images: [],
    features: [
      '36 farbig illustrierte Tierkarten',
      'Alter ab 3 Jahren',
      'Fördert Motorik, Kreativität und Tierkenntnisse',
      'Hergestellt aus recyceltem Karton',
      'Inklusive Spielanleitung mit zusätzlichen Bewegungsspielen',
    ],
  },
];

export const albums: Album[] = [
  {
    slug: 'tierisch-in-bewegung',
    title: 'Tierisch in Bewegung',
    year: 2024,
    cover: '',
    description: 'Das Debütalbum mit den größten Hits wie "Der Löwe tanzt" und "Elefant im Galopp".',
    spotifyUrl: 'https://open.spotify.com/album/example1',
    tracks: [
      { title: 'Der Löne tanzt', duration: '3:24' },
      { title: 'Elefant im Galopp', duration: '2:58' },
      { title: 'Ameisenmarsch', duration: '3:12' },
      { title: 'Butterfly Flieg mit mir', duration: '3:45' },
      { title: 'Känguru Hop', duration: '2:41' },
      { title: 'Pinguin Schlittschuhlaufen', duration: '3:08' },
      { title: 'Tigerstreifen Disco', duration: '3:33' },
      { title: 'Frosch im Teich', duration: '2:55' },
    ],
  },
  {
    slug: 'bewegung-ist-alles',
    title: 'Bewegung ist alles',
    year: 2023,
    cover: '',
    description: 'Das zweite Album mit neuen Bewegungsliedern für die ganze Familie.',
    spotifyUrl: 'https://open.spotify.com/album/example2',
    tracks: [
      { title: 'Mach mit!', duration: '3:10' },
      { title: 'Spring wie ein Hase', duration: '2:48' },
      { title: 'Rundumschlag', duration: '3:22' },
      { title: 'Wellenreiten', duration: '2:55' },
      { title: 'Zirkus im Kopf', duration: '3:40' },
      { title: 'Regenbogenlauf', duration: '3:15' },
      { title: 'Nachtschicht', duration: '2:38' },
      { title: 'Guten Morgen Welt', duration: '3:50' },
    ],
  },
];

export const videos: Video[] = [
  {
    id: 'v1',
    title: 'Tierisch in Bewegung – Musikvideo',
    description: 'Das offizielle Musikvideo zur Titelballade des Albums.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '',
    category: 'Musikvideo',
  },
  {
    id: 'v2',
    title: 'Bewegungsspiel: So spielst du mit den Karten',
    description: 'Eine Anleitung, wie ihr das Kartenspiel zu Hause spielen könnt.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '',
    category: 'Tutorial',
  },
  {
    id: 'v3',
    title: 'Live auf dem Kinderfest 2024',
    description: 'Highlights vom Live-Auftritt auf dem großen Kinderfest.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '',
    category: 'Live',
  },
  {
    id: 'v4',
    title: 'Elefant im Galopp – Lyric Video',
    description: 'Das offizielle Lyric Video zu "Elefant im Galopp".',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '',
    category: 'Musikvideo',
  },
  {
    id: 'v5',
    title: '5 Minuten Bewegung für Kinder',
    description: 'Kurze Bewegungseinheit für zwischendurch.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '',
    category: 'Tutorial',
  },
  {
    id: 'v6',
    title: 'Backstage: So entsteht ein Kinderlied',
    description: 'Ein Blick hinter die Kulissen der Musikproduktion.',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: '',
    category: 'Backstage',
  },
];

export const events: Event[] = [
  {
    id: 'e1',
    title: 'Kinderfest Berlin',
    date: '2026-08-15',
    location: 'Berlin, Deutschland',
    description:
      'Ein ganzer Tag voller Musik, Bewegung und Spaß! Philipp bringt seine "Tierisch in Bewegung"-Show direkt auf die Bühne.',
    image: '',
  },
  {
    id: 'e2',
    title: 'Bewegungsfest München',
    date: '2026-09-12',
    location: 'München, Deutschland',
    description:
      'Interaktive Workshops und Live-Auftritte für die ganze Familie. Mit dem Kartenspiel, Musik und gemeinsamen Bewegungsstationen.',
    image: '',
  },
  {
    id: 'e3',
    title: 'Schulworkshop Hamburg',
    date: '2026-10-05',
    location: 'Hamburg, Deutschland',
    description:
      'Philipp besucht Schulen und führt die Kinder in die Welt der Tierbewegungen ein. Anmeldung über die Schule möglich.',
    image: '',
  },
  {
    id: 'e4',
    title: 'Weihnachtsshow Wien',
    date: '2026-12-18',
    location: 'Wien, Österreich',
    description:
      'Eine besondere Weihnachtsshow mit neuen Liedern, bekannten Hits und viel Bewegung für die ganze Familie.',
    image: '',
  },
];

export const articles: Article[] = [
  {
    slug: 'warum-bewegung-wichtig-ist',
    title: 'Warum Bewegung so wichtig für Kinder ist',
    excerpt:
      'Bewegung fördert nicht nur die körperliche Gesundheit, sondern auch die kognitive Entwicklung und das Sozialverhalten von Kindern.',
    content: `
      ## Warum Bewegung so wichtig für Kinder ist

      Bewegung ist essenziell für die gesunde Entwicklung von Kindern. Sie fördert nicht nur die körperliche Fitness, sondern hat auch einen enormen Einfluss auf die geistige und soziale Entwicklung.

      ### Körperliche Gesundheit

      Regelmäßige Bewegung stärkt das Immunsystem, fördert das Knochenwachstum und beugt Übergewicht vor. Kinder, die sich viel bewegen, schlafen besser und haben mehr Energie für den Alltag.

      ### Kognitive Entwicklung

      Studien zeigen, dass Bewegung die Konzentrationsfähigkeit verbessert und das Lernen unterstützt. Der Austausch von Sauerstoff im Gehirn wird gefördert, was zu besseren schulischen Leistungen führen kann.

      ### Sozialverhalten

      Gemeinsame Bewegungsspiele fördern Teamarbeit, Kommunikation und Empathie. Kinder lernen Regeln einzuhalten, mit Frustration umzugehen und gemeinsam Probleme zu lösen.

      ### Was können Eltern tun?

      - Täglich mindestens 60 Minuten Bewegung einplanen
      - Bewegungsspiele in den Alltag integrieren
      - Vorbild sein und gemeinsam aktiv sein
      - Verschiedene Bewegungsarten ausprobieren
    `,
    date: '2026-06-15',
    category: 'Gesundheit',
    image: '',
  },
  {
    slug: 'tierisch-in-bewegung-spiel-tipps',
    title: 'So spielst du "Tierisch in Bewegung" zu Hause',
    excerpt:
      'Praktische Tipps und Spielvarianten, um das Kartenspiel zu Hause maximal zu genießen.',
    content: `
      ## So spielst du "Tierisch in Bewegung" zu Hause

      Das Kartenspiel "Tierisch in Bewegung" bietet viele verschiedene Spielvarianten. Hier sind unsere Favoriten:

      ### Das Grundspiel

      Jeder Spieler zieht eine Karte und imitiert die darauf gezeigte Tierbewegung. Die anderen Spieler raten, welches Tier es ist. Wer richtig rät, bekommt einen Punkt.

      ### Die Bewegungskette

      Der erste Spieler zeigt eine Bewegung, der nächste wiederholt sie und fügt eine eigene hinzu. So entsteht eine immer längere Kette von Bewegungen.

      ### Tier-Staffel

      In Teams werden die Karten aufgereiht. Jedes Teammitglied muss die Bewegung seiner Karte ausführen, bevor das nächste an die Reihe kommt.

      ### Kreativmodus

      Die Kinder erfinden eigene Tierbewegungen und die Eltern raten mit. So wird die Kreativität gefördert!
    `,
    date: '2026-05-20',
    category: 'Spielanleitung',
    image: '',
  },
  {
    slug: 'philipp-greifenberg-interview',
    title: 'Interview: Philipp über seine Mission',
    excerpt:
      'Ein Gespräch mit Philipp Greifenberg darüber, wie "Tierisch in Bewegung" entstanden ist und wohin die Reise geht.',
    content: `
      ## Interview: Philipp über seine Mission

      **Phil4Kids: Wie ist die Idee zu "Tierisch in Bewegung" entstanden?**

      *Philipp: Ich habe als Kindertrainer gesehen, wie viele Kinder immer mehr Zeit vor Bildschirmen verbringen. Gleichzeitig faszinieren sie Tiere. Da lag es nahe, beides zu verbinden.*

      **Phil4Kids: Was war die größte Herausforderung?**

      *Philipp: Die Musik so zu gestalten, dass sie sowohl Kinder als auch Eltern anspricht. Und die Bewegungen so zu wählen, dass sie sicher sind, aber auch wirklich Spaß machen.*

      **Phil4Kids: Was ist das Ziel des Projekts?**

      *Philipp: Einfach gesagt: Kinder wieder rausbringen. Bewegung soll wieder selbstverständlich sein. Wenn ein Kind nach Hause kommt und sagt "Mama, Papa, lasst uns die Tierkarten spielen!", dann habe ich mein Ziel erreicht.*

      **Phil4Kids: Was kommt als nächstes?**

      *Philipp: Wir arbeiten an einem zweiten Album und planen Live-Shows auf ganz Deutschland. Und vielleicht kommt ja noch ein Spiel dazu!*
    `,
    date: '2026-04-10',
    category: 'Interview',
    image: '',
  },
];

export function getAlbumBySlug(slug: string) {
  return albums.find((a) => a.slug === slug);
}

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
