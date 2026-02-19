# 🚀 HomeDigital - Configuration MongoDB + Prisma

## 📋 Ce qui a été fait

✅ **Prisma ORM** installé et configuré  
✅ **MongoDB** connecté (local ou Atlas)  
✅ **Schéma de base de données** créé avec modèles Software, Service, License, CartItem  
✅ **API routes** créées (/api/softwares et /api/services)  
✅ **Hooks personnalisés** (useSoftwares, useServices)  
✅ **Composants refactorisés** pour utiliser les données de MongoDB  

## 🔧 Configuration

### 1. **Mettre à jour `.env.local`**

Choix entre:

**Option A: MongoDB Local** (Installation requise)
```
DATABASE_URL="mongodb://localhost:27017/home_digital"
```

**Option B: MongoDB Atlas** (Cloud - Recommandé)
```
DATABASE_URL="mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/home_digital?retryWrites=true&w=majority"
```

Pour créer un cluster gratuit MongoDB Atlas:
1. Allez sur https://www.mongodb.com/cloud/atlas
2. Créez un compte gratuit
3. Créez un cluster
4. Obtenez votre chaîne de connexion

### 2. **Initialiser la base de données**

```bash
# Générer le client Prisma
pnpm exec prisma generate

# Créer les tables dans MongoDB
pnpm exec prisma db push

# Remplir avec les données par défaut
pnpm db:seed
```

### 3. **Démarrer l'application**

```bash
pnpm dev
```

L'application devrait maintenant:
- Charger les services et logiciels depuis MongoDB
- Afficher un écran de chargement pendant la récupération
- Afficher une erreur si la base de données n'est pas accessible

## 📊 Architecture de la Base de Données

```
Software
├── id (ObjectId)
├── name (String, unique)
├── price (Int) - en FCFA
├── priceFormatted (String)
├── category (String)
├── icon, description, image, system, publisher (String)
├── stock (Int)
├── rating (Float)
├── reviews (Int)
├── features (String[])
└── licenses (License[]) ← Relation

License
├── id (ObjectId)
├── type (personnel|professionnel|entreprise)
├── duration (1_mois|1_an|perpetuel)
├── users (Int)
├── support (Boolean)
└── softwareId (ObjectId) ← Référence

Service
├── id (ObjectId)
├── icon, title, description (String)
├── features (String[])

CartItem
├── id (ObjectId)
├── nom, prix, image (String/Int)
├── quantite (Int)
├── userId (String, optionnel)
└── timestamps
```

## 🔌 API Routes Disponibles

### GET `/api/softwares`
Récupère tous les logiciels avec leurs licences

```bash
curl http://localhost:3000/api/softwares
```

Réponse:
```json
[
  {
    "id": "...",
    "name": "Microsoft Office 365",
    "price": 99000,
    "category": "Bureau",
    "licenses": [...],
    ...
  }
]
```

### GET `/api/services`
Récupère tous les services

```bash
curl http://localhost:3000/api/services
```

## 🎨 Hooks Personnalisés

### `useSoftwares()`
```tsx
const { softwares, loading, error } = useSoftwares();
```

### `useServices()`
```tsx
const { services, loading, error } = useServices();
```

## 📝 Gestion des Erreurs

Si MongoDB n'est pas accessible:
- Un écran d'erreur s'affiche avec un bouton "Réessayer"
- Les logs d'erreur sont affichés dans la console

## 🔄 Ajouter de Nouveaux Logiciels

**Directement dans MongoDB Atlas:**
1. Allez sur MongoDB Atlas
2. Collections → softwares
3. Insert Document
4. Remplissez les champs

**Ou via code:**
```tsx
// À implémenter: Créer une API POST /api/softwares
```

## 🛠️ Commandes Utiles

```bash
# Voir l'interface Prisma Studio
pnpm exec prisma studio

# Générer les types TypeScript
pnpm exec prisma generate

# Réinitialiser la base de données
pnpm exec prisma db push --skip-generate

# Vérifier les migrations
pnpm exec prisma migrate status
```

## ⚠️ Troubleshooting

**Erreur: "Can't reach database server"**
- Vérifiez que MongoDB est en cours d'exécution
- Vérifiez votre DATABASE_URL
- Pour MongoDB Atlas, vérifiez les IP whitelist

**Erreur: "module not found"**
- Exécutez `pnpm install`
- Exécutez `pnpm exec prisma generate`

**Les données ne se chargent pas**
- Vérifiez les logs du serveur (`pnpm dev`)
- Vérifiez que le seed a été exécuté
- Allez sur http://localhost:3000/api/softwares pour tester l'API

## 🎯 Prochaines Étapes

1. ✅ Configurer MongoDB
2. ✅ Initialiser la base de données
3. Créer l'authentification utilisateur
4. Implémenter les commandes (orders)
5. Système de clés de licence
6. Tableau de bord admin pour gérer les logiciels
