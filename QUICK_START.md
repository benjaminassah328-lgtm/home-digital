# 🗄️ MongoDB + Prisma Setup - Guide Complet

## ✅ Ce qui a été configuré

### 1️⃣ **Base de Données**
- ✅ Prisma ORM installé
- ✅ MongoDB driver configuré
- ✅ Schéma créé (Software, Service, License, CartItem)

### 2️⃣ **API**
- ✅ GET `/api/softwares` - Récupère tous les logiciels
- ✅ GET `/api/services` - Récupère tous les services

### 3️⃣ **Frontend**
- ✅ Hook `useSoftwares()` - Charge les logiciels
- ✅ Hook `useServices()` - Charge les services
- ✅ Écran de chargement
- ✅ Gestion d'erreur

---

## 🚀 DÉMARRAGE RAPIDE

### **Option 1: MongoDB Local (Simple pour développement)**

#### Étape 1: Installer MongoDB Community
```bash
# Sur macOS avec Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Démarrer MongoDB
brew services start mongodb-community
```

#### Étape 2: Mettre à jour `.env.local`
```
DATABASE_URL="mongodb://localhost:27017/home_digital"
```

#### Étape 3: Initialiser la base
```bash
cd /Users/Lunion/Downloads/HomeDigital/home_digital

# Générer le client Prisma
pnpm exec prisma generate

# Créer les collections
pnpm exec prisma db push

# Remplir avec les données
pnpm db:seed
```

#### Étape 4: Démarrer l'app
```bash
pnpm dev
```

✅ Allez sur http://localhost:3000 - Les données doivent charger!

---

### **Option 2: MongoDB Atlas (Cloud - Gratuit)**

#### Étape 1: Créer un compte MongoDB Atlas
1. Allez sur https://www.mongodb.com/cloud/atlas
2. Créez un compte gratuit
3. Créez un cluster gratuit (M0)

#### Étape 2: Obtenir la chaîne de connexion
1. Dans Atlas, cliquez sur "Connect"
2. Copiez la chaîne de connexion MongoDB+SRV
3. Remplacez `<password>` et `<username>`

#### Étape 3: Mettre à jour `.env.local`
```
DATABASE_URL="mongodb+srv://USERNAME:PASSWORD@cluster-xyz.mongodb.net/home_digital?retryWrites=true&w=majority"
```

#### Étape 4: Initialiser la base
```bash
pnpm exec prisma generate
pnpm exec prisma db push
pnpm db:seed
```

#### Étape 5: Démarrer
```bash
pnpm dev
```

---

## 🧪 Vérifier que tout fonctionne

### Test 1: Vérifier l'API
```bash
curl http://localhost:3000/api/softwares
```

Vous devriez voir:
```json
[
  {"id": "...", "name": "Microsoft Office 365", "price": 99000, ...},
  ...
]
```

### Test 2: Vérifier l'interface
1. Allez sur http://localhost:3000/produits/Services
2. Vous devriez voir les logiciels charger avec un spinner
3. Cliquez sur un logiciel pour l'ajouter au panier

### Test 3: Voir la base de données
```bash
pnpm exec prisma studio
```

Une interface web s'ouvrira pour voir/modifier les données!

---

## 📊 Structure des Fichiers Créés

```
home_digital/
├── .env.local                           ← Configuration de base
├── .env.example                         ← Exemple de config
├── DATABASE_SETUP.md                    ← Documentation
├── prisma/
│   ├── schema.prisma                    ← Schéma de la base
│   └── seed.ts                          ← Données initiales
├── app/
│   └── api/
│       ├── softwares/
│       │   └── route.ts                 ← API GET /api/softwares
│       └── services/
│           └── route.ts                 ← API GET /api/services
├── hooks/
│   ├── useSoftwares.ts                  ← Hook pour charger logiciels
│   └── useServices.ts                   ← Hook pour charger services
└── components/ServiceInformatique/
    ├── Info1.tsx                        ← Main component (utilise les hooks)
    └── ... autres composants
```

---

## 🔄 Flux de Données

```
1. Browser accède à /produits/Services
                ↓
2. Info1.tsx appelle useSoftwares() et useServices()
                ↓
3. Hooks font fetch vers /api/softwares et /api/services
                ↓
4. API routes contactent MongoDB via Prisma
                ↓
5. MongoDB retourne les données
                ↓
6. Composants React affichent les données
                ↓
7. Utilisateur peut cliquer pour ajouter au panier
```

---

## 🛠️ Commandes Utiles

```bash
# Voir/éditer les données
pnpm exec prisma studio

# Voir les migrations
pnpm exec prisma migrate status

# Réappliquer le schema
pnpm exec prisma db push

# Réinitialiser completement (⚠️ supprime données)
pnpm exec prisma migrate reset

# Générer les types
pnpm exec prisma generate

# Remplir de nouvelles données
pnpm db:seed
```

---

## ❓ FAQ

**Q: MongoDB n'est pas accessible?**
A: Vérifiez que:
- MongoDB est en cours d'exécution: `brew services list`
- Votre DATABASE_URL est correct
- Pour Atlas: vérifiez votre IP whitelist

**Q: L'API retourne une erreur?**
A: 
- Vérifiez les logs: `pnpm dev`
- Testez l'API: `curl http://localhost:3000/api/softwares`
- Vérifiez que `pnpm db:seed` a été exécuté

**Q: Les données ne s'affichent pas?**
A:
- Ouvrez la console navigateur (F12)
- Cherchez les erreurs
- Vérifiez que l'API répond: http://localhost:3000/api/softwares

**Q: Ajouter de nouveaux logiciels?**
A:
1. Option 1: Via Prisma Studio (`pnpm exec prisma studio`)
2. Option 2: Via MongoDB Atlas Dashboard
3. Option 3: Créer une API POST (À faire)

---

## 🎯 Prochaines Étapes

1. ✅ MongoDB configuré
2. ✅ API créée
3. ⏭️ Authentification utilisateur (Firebase/Clerk)
4. ⏭️ Système de commandes (Orders)
5. ⏭️ Clés de licence automatiques
6. ⏭️ Admin dashboard pour gérer les logiciels
7. ⏭️ Paiement (Stripe/Wave)

---

## 📞 Besoin d'aide?

- Prisma: https://www.prisma.io/docs
- MongoDB: https://docs.mongodb.com
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
