import {
  Globe,
  ShoppingCart,
  Layout,
  Search,
  Wrench,
  Server,
  Shield,
  Headphones,
} from "lucide-react";

export const navLinks = [
  { label: "Αρχική", href: "#home" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Έργα", href: "#portfolio" },
  { label: "Πακέτα", href: "#pricing" },
  { label: "Επικοινωνία", href: "#contact" },
];

export const whyChooseUs = [
  {
    icon: "⚡",
    title: "Γρήγορη Φόρτωση",
    description:
      "Βελτιστοποιημένες ιστοσελίδες με εξαιρετικούς χρόνους φόρτωσης για καλύτερη εμπειρία χρήστη.",
  },
  {
    icon: "📱",
    title: "Άψογη Εμφάνιση σε Κινητά",
    description:
      "Responsive design που προσαρμόζεται τέλεια σε κάθε συσκευή, από smartphone έως desktop.",
  },
  {
    icon: "🔍",
    title: "SEO Βελτιστοποίηση",
    description:
      "Βασική και προχωρημένη SEO βελτιστοποίηση για καλύτερη κατάταξη στις μηχανές αναζήτησης.",
  },
  {
    icon: "🛠",
    title: "Υποστήριξη & Συντήρηση",
    description:
      "Συνεχής υποστήριξη, ενημερώσεις και τεχνική συντήρηση μετά την παράδοση του έργου.",
  },
];

export const services = [
  {
    icon: Globe,
    title: "Κατασκευή Ιστοσελίδων",
    description:
      "Επαγγελματικές, μοντέρνες ιστοσελίδες προσαρμοσμένες στις ανάγκες της επιχείρησής σας.",
  },
  {
    icon: ShoppingCart,
    title: "Ηλεκτρονικά Καταστήματα (E-shop)",
    description:
      "Πλήρως λειτουργικά e-shops με ασφαλείς πληρωμές και εύκολη διαχείριση προϊόντων.",
  },
  {
    icon: Layout,
    title: "Landing Pages",
    description:
      "Στοχευμένες landing pages με υψηλά conversion rates για καμπάνιες και προσφορές.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Τεχνική και περιεχομενική SEO βελτιστοποίηση για ορατότητα και οργανική κίνηση.",
  },
  {
    icon: Wrench,
    title: "Συντήρηση & Διαχείριση",
    description:
      "Τακτικές ενημερώσεις, backups και διαχείριση περιεχομένου χωρίς να ανησυχείτε.",
  },
  {
    icon: Server,
    title: "Hosting & Domain Setup",
    description:
      "Πλήρης ρύθμιση hosting, domain και email για άμεση online παρουσία.",
  },
];

export const portfolioProjects = [
  {
    title: "Eco ReHome Constructions",
    category: "Κατασκευή Ιστοσελίδας – Construction Website",
    description:
      "Πλήρης σχεδίαση και ανάπτυξη επαγγελματικής ιστοσελίδας για εταιρεία ανακαινίσεων και κατασκευών με μοντέρνο UI/UX, responsive design και δομή παρουσίασης υπηρεσιών και έργων.",
    gradient: "from-amber-600/20 via-stone-800/10 to-amber-900/30",
    accent: "#D97706",
    image: "/portfolio/ecore.png",
    link: "https://ecorehomeconstructions.com",
    isLive: true,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Ανάλυση Αναγκών",
    description:
      "Κατανοούμε τους στόχους, το κοινό και τις απαιτήσεις της επιχείρησής σας.",
  },
  {
    step: "02",
    title: "Σχεδιασμός",
    description:
      "Δημιουργούμε wireframes και premium UI/UX designs που αντικατοπτρίζουν την εταιρεία σας.",
  },
  {
    step: "03",
    title: "Κατασκευή",
    description:
      "Αναπτύσσουμε την ιστοσελίδα με σύγχρονες τεχνολογίες και βέλτιστες πρακτικές.",
  },
  {
    step: "04",
    title: "Παράδοση & Υποστήριξη",
    description:
      "Παραδίδουμε το έργο και παρέχουμε συνεχή υποστήριξη για optimal performance.",
  },
];

export const pricingPlans = [
  {
    name: "Κατασκευή Ιστοσελίδας",
    price: "400€ (εφάπαξ)",
    description: "Επαγγελματική ιστοσελίδα με σύγχρονο σχεδιασμό και γρήγορη απόδοση.",
    features: [
      "Responsive design (mobile friendly)",
      "Βασικό SEO setup",
      "Φόρμα επικοινωνίας",
      "Σύνδεση email",
      "Έτοιμη παράδοση ιστοσελίδας",
    ],
    note: "Δεν περιλαμβάνει υποστήριξη",
    highlighted: false,
    popular: false,
  },
  {
    name: "Κατασκευή + Υποστήριξη",
    price: "400€ + 50€/μήνα",
    description: "Ιστοσελίδα με πλήρη υποστήριξη και συνεχή διαχείριση.",
    features: [
      "Όλα τα στοιχεία του Basic πακέτου",
      "Μηνιαία υποστήριξη",
      "Updates περιεχομένου",
      "Backups & security updates",
      "Μικρές αλλαγές στο site",
      "Τεχνική υποστήριξη",
    ],
    note: "Ιδανικό για επιχειρήσεις που θέλουν να μην ασχολούνται καθόλου",
    highlighted: true,
    popular: true,
  },
  {
    name: "Premium Ιστοσελίδα",
    price: "650€ (εφάπαξ)",
    description: "Πλήρως custom σχεδίαση για επιχειρήσεις που θέλουν κορυφαία online παρουσία με υψηλής ποιότητας UI/UX.",
    features: [
      "Custom UI/UX design",
      "Advanced SEO setup",
      "Blog ή δυναμικό περιεχόμενο",
      "Performance optimization",
      "Premium animations",
      "Υψηλή αισθητική επιπέδου agency",
    ],
    highlighted: false,
    popular: false,
  },
  {
    name: "Premium + Υποστήριξη",
    price: "650€ + 50€/μήνα",
    description: "Premium custom σχεδίαση με πλήρη μηνιαία υποστήριξη και συνεχή διαχείριση.",
    features: [
      "Όλα τα στοιχεία του Premium πακέτου",
      "Μηνιαία υποστήριξη",
      "Updates περιεχομένου",
      "Backups & security updates",
      "Μικρές αλλαγές στο site",
      "Τεχνική υποστήριξη",
    ],
    note: "Ιδανικό για επιχειρήσεις που θέλουν το κορυφαίο αποτέλεσμα χωρίς να ασχολούνται",
    highlighted: false,
    popular: false,
  },
];

export const maintenancePlans = [
  {
    name: "Basic Care",
    icon: Shield,
    features: ["Updates", "Backups", "Υποστήριξη"],
  },
  {
    name: "Business Care",
    icon: Wrench,
    features: ["Updates", "Security", "Αλλαγές Περιεχομένου"],
  },
  {
    name: "Premium Care",
    icon: Headphones,
    features: [
      "Πλήρης Διαχείριση",
      "Priority Support",
      "Βελτιστοποιήσεις",
    ],
  },
];

export const testimonials = [
  {
    name: "Νίκος Παπαδόπουλος",
    role: "Ιδιοκτήτης, Café Aurora",
    content:
      "Η Elite Web Designs μας δημιούργησε μια εντυπωσιακή ιστοσελίδα που αύξησε τις online κρατήσεις κατά 40%. Επαγγελματική ομάδα με άριστη επικοινωνία.",
    rating: 5,
  },
  {
    name: "Μαρία Κωνσταντίνου",
    role: "CEO, Lux Properties",
    content:
      "Από την πρώτη συνάντηση κατάλαβα ότι δουλεύουν με premium standards. Η ιστοσελίδα μας ξεχωρίζει στον κλάδο των ακινήτων.",
    rating: 5,
  },
  {
    name: "Γιώργος Αντωνίου",
    role: "Ιδιοκτήτης, FitZone Gym",
    content:
      "Γρήγορη παράδοση, τέλειο αποτέλεσμα και συνεχής υποστήριξη. Το e-shop και το booking system λειτουργούν άψογα.",
    rating: 5,
  },
  {
    name: "Ελένη Δημητρίου",
    role: "Διευθύντρια, MediCare Clinic",
    content:
      "Εξαιρετική εμπειρία από την αρχή μέχρι το τέλος. Η ιστοσελίδα μας εμπνέει εμπιστοσύνη στους ασθενείς μας.",
    rating: 5,
  },
];

export const faqItems = [
  {
    question: "Πόσο κοστίζει μια ιστοσελίδα;",
    answer:
      "Τα πακέτα μας ξεκινούν από 400€ (εφάπαξ) για βασική ιστοσελίδα και φτάνουν μέχρι 650€ για Premium custom σχεδίαση. Υπάρχει επίσης η επιλογή μηνιαίας υποστήριξης +50€/μήνα. Επικοινωνήστε μαζί μας για δωρεάν προσφορά!",
  },
  {
    question: "Πόσο χρόνο χρειάζεται η παράδοση;",
    answer:
      "Παραδίδουμε απλές ιστοσελίδες σε 24 ώρες και ηλεκτρονικά καταστήματα (e-shops) εντός 72 ωρών. Δουλεύουμε γρήγορα χωρίς να θυσιάζουμε ποιότητα.",
  },
  {
    question: "Παρέχετε hosting;",
    answer:
      "Ναι, προσφέρουμε πλήρη ρύθμιση hosting και domain setup. Μπορούμε να διαχειριστούμε τα πάντα για εσάς ή να σας καθοδηγήσουμε στην επιλογή του κατάλληλου provider.",
  },
  {
    question: "Υπάρχει υποστήριξη μετά την παράδοση;",
    answer:
      "Ναι! Προσφέρουμε μηνιαία υποστήριξη 50€/μήνα που περιλαμβάνει updates περιεχομένου, backups, security updates, μικρές αλλαγές στο site και τεχνική υποστήριξη. Διαθέσιμη για όλα τα πακέτα.",
  },
  {
    question: "Περιλαμβάνεται SEO;",
    answer:
      "Ναι, όλα τα πακέτα περιλαμβάνουν βασική SEO βελτιστοποίηση. Το Premium πακέτο (650€) περιλαμβάνει advanced SEO setup για καλύτερη κατάταξη στις μηχανές αναζήτησης.",
  },
  {
    question: "Πώς επικοινωνώ μαζί σας;",
    answer:
      "Μπορείτε να συμπληρώσετε τη φόρμα επικοινωνίας στη σελίδα ή να στείλετε email στο elitewebdesigns2@gmail.com. Απαντάμε εντός 24 ωρών!",
  },
];

export const stats = [
  { value: 150, suffix: "+", label: "Ολοκληρωμένα Έργα" },
  { value: 98, suffix: "%", label: "Ικανοποιημένοι Πελάτες" },
  { value: 5, suffix: "+", label: "Χρόνια Εμπειρίας" },
  { value: 24, suffix: "/7", label: "Premium Support" },
];
