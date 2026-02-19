// prisma/seed.ts
// Fichier pour initialiser la base de données avec les données par défaut

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Initialisation de la base de données...");

  // Nettoyer les données existantes
  await prisma.cartItem.deleteMany({});
  await prisma.software.deleteMany({});
  await prisma.service.deleteMany({});

  // Créer les services
  const services = await prisma.service.createMany({
    data: [
      {
        icon: "💿",
        title: "Vente de Logiciels",
        description:
          "Accédez à une large gamme de logiciels professionnels et personnels à prix compétitifs.",
        features: [
          "Licences authentiques",
          "Support technique",
          "Mises à jour gratuites",
        ],
      },
      {
        icon: "📚",
        title: "Formations Informatiques",
        description:
          "Des formations adaptées à votre niveau pour maîtriser les technologies actuelles.",
        features: [
          "Cours en ligne",
          "Certificats reconnus",
          "Formateurs expérimentés",
        ],
      },
      {
        icon: "🛠️",
        title: "Assistance Technique",
        description:
          "Support technique 24/7 pour résoudre tous vos problèmes informatiques.",
        features: [
          "Assistance rapide",
          "Experts disponibles",
          "Dépannage complet",
        ],
      },
    ],
  });

  console.log(`✅ ${services.count} services créés`);

  // Créer les logiciels avec licences
  const softwares = [
    {
      name: "Microsoft Office 365",
      price: 99000,
      priceFormatted: "99 000 FCFA",
      category: "Bureau",
      icon: "📝",
      description:
        "Suite complète de productivité avec Word, Excel, PowerPoint et Outlook",
      image: "/images/office365.png",
      stock: 45,
      rating: 4.8,
      reviews: 234,
      features: [
        "Word",
        "Excel",
        "PowerPoint",
        "Outlook",
        "OneDrive 1TB",
        "Support 24/7",
      ],
      system: "Windows, Mac, iOS, Android",
      publisher: "Microsoft",
      licenses: [
        { type: "personnel", duration: "1_an", users: 1, support: true },
        { type: "professionnel", duration: "1_an", users: 5, support: true },
        {
          type: "entreprise",
          duration: "perpetuel",
          users: 999,
          support: true,
        },
      ],
    },
    {
      name: "Adobe Creative Cloud",
      price: 54990,
      priceFormatted: "54 990 FCFA",
      category: "Design",
      icon: "🎨",
      description:
        "Suite professionnelle complète pour créatifs avec Photoshop, Illustrator et Premiere",
      image: "/images/adobe.png",
      stock: 32,
      rating: 4.9,
      reviews: 567,
      features: [
        "Photoshop",
        "Illustrator",
        "Premiere Pro",
        "After Effects",
        "InDesign",
        "Lightroom",
      ],
      system: "Windows, Mac",
      publisher: "Adobe",
      licenses: [
        { type: "personnel", duration: "1_an", users: 1, support: false },
        { type: "professionnel", duration: "1_an", users: 3, support: true },
        { type: "entreprise", duration: "1_an", users: 50, support: true },
      ],
    },
    {
      name: "Norton 360 Deluxe",
      price: 49000,
      priceFormatted: "49 000 FCFA",
      category: "Sécurité",
      icon: "🛡️",
      description:
        "Protection antivirus complète avec VPN, gestionnaire de mots de passe et contrôle parental",
      image: "/images/norton.png",
      stock: 78,
      rating: 4.7,
      reviews: 892,
      features: [
        "Antivirus",
        "VPN",
        "Gestionnaire de mots de passe",
        "Contrôle parental",
        "Sauvegarde cloud",
      ],
      system: "Windows, Mac, iOS, Android",
      publisher: "Norton",
      licenses: [
        { type: "personnel", duration: "1_an", users: 5, support: true },
        { type: "personnel", duration: "perpetuel", users: 5, support: true },
      ],
    },
    {
      name: "Visual Studio Code",
      price: 0,
      priceFormatted: "Gratuit",
      category: "Développement",
      icon: "💻",
      description:
        "Éditeur de code source gratuit et puissant pour tous les langages de programmation",
      image: "/images/vscode.png",
      stock: 999,
      rating: 4.9,
      reviews: 2341,
      features: [
        "Intellisense",
        "Extensions",
        "Debugging",
        "Git intégré",
        "Terminal intégré",
      ],
      system: "Windows, Mac, Linux",
      publisher: "Microsoft",
      licenses: [
        { type: "personnel", duration: "perpetuel", users: 999, support: false },
      ],
    },
    {
      name: "JetBrains IntelliJ IDEA",
      price: 179000,
      priceFormatted: "179 000 FCFA",
      category: "Développement",
      icon: "🔧",
      description:
        "IDE professionnel pour Java et développement multi-langages avec support avancé",
      image: "/images/intellij.png",
      stock: 28,
      rating: 4.8,
      reviews: 456,
      features: [
        "Java",
        "Kotlin",
        "Python",
        "PHP",
        "JavaScript",
        "Debugging avancé",
      ],
      system: "Windows, Mac, Linux",
      publisher: "JetBrains",
      licenses: [
        { type: "personnel", duration: "1_an", users: 1, support: true },
        { type: "professionnel", duration: "1_an", users: 10, support: true },
        {
          type: "entreprise",
          duration: "perpetuel",
          users: 999,
          support: true,
        },
      ],
    },
    {
      name: "WinRAR",
      price: 29000,
      priceFormatted: "29 000 FCFA",
      category: "Utilitaires",
      icon: "📦",
      description:
        "Gestionnaire d'archives puissant pour compresser, décompresser et créer des archives",
      image: "/images/winrar.png",
      stock: 156,
      rating: 4.6,
      reviews: 1203,
      features: [
        "Compression RAR/ZIP",
        "Cryptage AES",
        "Réparation d'archives",
        "Interface intuitive",
      ],
      system: "Windows, Mac, Linux",
      publisher: "WinRAR",
      licenses: [
        { type: "personnel", duration: "perpetuel", users: 1, support: false },
        {
          type: "professionnel",
          duration: "perpetuel",
          users: 50,
          support: true,
        },
      ],
    },
    {
      name: "Kaspersky Internet Security",
      price: 39000,
      priceFormatted: "39 000 FCFA",
      category: "Sécurité",
      icon: "🔐",
      description:
        "Solution de sécurité avancée contre les menaces cybernétiques et les ransomwares",
      image: "/images/kaspersky.png",
      stock: 91,
      rating: 4.7,
      reviews: 678,
      features: [
        "Antivirus",
        "Pare-feu",
        "Protection en temps réel",
        "Analyse comportementale",
      ],
      system: "Windows, Mac",
      publisher: "Kaspersky",
      licenses: [
        { type: "personnel", duration: "1_an", users: 3, support: true },
        { type: "professionnel", duration: "1_an", users: 20, support: true },
      ],
    },
    {
      name: "Sublime Text 4",
      price: 89000,
      priceFormatted: "89 000 FCFA",
      category: "Développement",
      icon: "✍️",
      description:
        "Éditeur de texte sophistiqué pour développeurs avec performances optimales",
      image: "/images/sublime.png",
      stock: 45,
      rating: 4.8,
      reviews: 834,
      features: [
        "Édition multi-ligne",
        "Snippets",
        "Palettes de commandes",
        "Plugins",
      ],
      system: "Windows, Mac, Linux",
      publisher: "Sublime HQ",
      licenses: [
        { type: "personnel", duration: "perpetuel", users: 1, support: false },
        {
          type: "professionnel",
          duration: "perpetuel",
          users: 999,
          support: true,
        },
      ],
    },
    {
      name: "Bitdefender Total Security",
      price: 44000,
      priceFormatted: "44 000 FCFA",
      category: "Sécurité",
      icon: "🔒",
      description:
        "Protection complète avec antivirus, VPN illimité et optimisation du système",
      image: "/images/bitdefender.png",
      stock: 64,
      rating: 4.9,
      reviews: 945,
      features: [
        "Antivirus",
        "VPN illimité",
        "Optimisation",
        "Anti-ransomware",
        "Webcam Guard",
      ],
      system: "Windows, Mac, iOS, Android",
      publisher: "Bitdefender",
      licenses: [
        { type: "personnel", duration: "1_an", users: 10, support: true },
        { type: "personnel", duration: "perpetuel", users: 10, support: true },
      ],
    },
    {
      name: "Microsoft Windows 11 Pro",
      price: 199000,
      priceFormatted: "199 000 FCFA",
      category: "Systèmes",
      icon: "🪟",
      description:
        "Système d'exploitation Windows 11 Pro pour professionnels avec fonctionnalités avancées",
      image: "/images/windows11.png",
      stock: 38,
      rating: 4.7,
      reviews: 2105,
      features: [
        "Hyper-V",
        "BitLocker",
        "Domain Join",
        "Group Policy",
        "Taskbar personnalisée",
      ],
      system: "Windows",
      publisher: "Microsoft",
      licenses: [
        { type: "personnel", duration: "perpetuel", users: 1, support: true },
        {
          type: "professionnel",
          duration: "perpetuel",
          users: 999,
          support: true,
        },
      ],
    },
    {
      name: "AutoCAD 2024",
      price: 149000,
      priceFormatted: "149 000 FCFA",
      category: "Design",
      icon: "📐",
      description:
        "Logiciel professionnel de CAO pour architecture, ingénierie et design",
      image: "/images/autocad.png",
      stock: 19,
      rating: 4.8,
      reviews: 567,
      features: [
        "Dessin 2D/3D",
        "BIM",
        "Collaboration cloud",
        "API",
        "Mobile app",
      ],
      system: "Windows, Mac",
      publisher: "Autodesk",
      licenses: [
        { type: "professionnel", duration: "1_an", users: 1, support: true },
        { type: "entreprise", duration: "1_an", users: 50, support: true },
      ],
    },
    {
      name: "VLC Media Player",
      price: 0,
      priceFormatted: "Gratuit",
      category: "Multimédia",
      icon: "🎬",
      description:
        "Lecteur multimédia gratuit et open-source supportant tous les formats vidéo et audio",
      image: "/images/vlc.png",
      stock: 999,
      rating: 4.7,
      reviews: 8934,
      features: [
        "Tous les formats",
        "Sans publicités",
        "Open-source",
        "Personnalisable",
      ],
      system: "Windows, Mac, Linux, iOS, Android",
      publisher: "VideoLAN",
      licenses: [
        { type: "personnel", duration: "perpetuel", users: 999, support: false },
      ],
    },
  ];

  // Créer chaque logiciel avec ses licences
  for (const software of softwares) {
    const { licenses, ...softwareData } = software;
    const created = await prisma.software.create({
      data: {
        ...softwareData,
        licenses: {
          create: licenses,
        },
      },
      include: {
        licenses: true,
      },
    });
    console.log(`✅ Créé: ${created.name}`);
  }

  console.log("🎉 Base de données initialisée avec succès!");
}

main()
  .catch((e) => {
    console.error("❌ Erreur:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
