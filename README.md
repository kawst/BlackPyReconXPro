# BlackPyReconX - Framework de Cybersécurité Éducatif

![BlackPyReconX](https://img.shields.io/badge/BlackPyReconX-v1.0-red.svg)
![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![License](https://img.shields.io/badge/License-Educational-green.svg)

## 🎯 Objectif

BlackPyReconX est un framework de cybersécurité éducatif modulaire développé en React/TypeScript, simulant une opération complète de reconnaissance et d'analyse de sécurité. Ce projet couvre les phases de reconnaissance, scanning, analyse de vulnérabilités web, et outils cryptographiques.

## ⚠️ Avertissement Légal

**CE FRAMEWORK EST DESTINÉ UNIQUEMENT À DES FINS ÉDUCATIVES ET DE RECHERCHE.**

- ✅ Utilisez uniquement sur vos propres systèmes
- ✅ Obtenez une autorisation écrite avant tout test
- ❌ N'utilisez jamais sur des systèmes tiers sans permission
- ❌ L'auteur n'est pas responsable des utilisations malveillantes

## 🚀 Fonctionnalités

### 📡 Module OSINT
- Reconnaissance passive d'informations publiques
- Géolocalisation IP et informations ASN
- Détection de technologies utilisées
- Recherche de domaines associés
- Analyse de réputation IP

### 🔍 Module Scanner
- Scan de ports TCP/UDP personnalisé
- Détection d'OS via analyse TTL
- Banner grabbing pour services courants
- Test de connectivité avec statistiques
- Affichage graphique des résultats

### 🌐 Module Web Vulnerabilities
- Analyse automatique des vulnérabilités web
- Tests de configuration de sécurité
- Vérification des headers de sécurité
- Analyse des cookies et sessions
- Recommandations de sécurisation

### 🔐 Module Crypto Tools
- Chiffrement/déchiffrement Fernet
- Encodage/décodage Base64
- Chiffrement ROT13 et XOR
- Outils de stéganographie basique
- Démonstrations cryptographiques

### 📊 Module Reporting
- Génération automatique de rapports
- Horodatage complet des opérations
- Résumé exécutif des résultats
- Export des données au format texte
- Statistiques détaillées

### 🤖 Interface Telegram Bot (Simulation)
- Commandes de contrôle à distance
- Notifications automatiques
- Interface utilisateur simplifiée
- Gestion des résultats en temps réel

## 🛠️ Installation et Utilisation

### Prérequis
- Node.js 18+ 
- npm ou yarn
- Navigateur web moderne

### Installation

```bash
# Cloner le projet
git clone https://github.com/votre-username/blackpyreconx.git
cd blackpyreconx

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

### Utilisation de l'Interface Web

1. **Spécifier une cible** : Entrez un domaine ou une IP dans le champ cible
2. **Sélectionner un module** : Cliquez sur "Exécuter" pour le module souhaité
3. **Analyser les résultats** : Consultez la sortie dans le terminal intégré
4. **Générer un rapport** : Utilisez le module "Rapport" pour consolider les résultats

### Ordre d'Exécution Recommandé

```
1. OSINT → Reconnaissance passive
2. Scanner → Découverte de services
3. Web Vulns → Analyse de sécurité web
4. Crypto Tools → Tests cryptographiques
5. Rapport → Génération du rapport final
```

## 📁 Structure du Projet

```
BlackPyReconX/
├── src/
│   ├── App.tsx              # Interface principale
│   ├── main.tsx            # Point d'entrée
│   └── index.css           # Styles globaux
├── public/
├── README.md               # Documentation
├── package.json            # Dépendances
└── vite.config.ts         # Configuration Vite
```

## 🎨 Interface Utilisateur

- **Design moderne** : Interface sombre avec accents rouges
- **Responsive** : Compatible mobile et desktop  
- **Terminal intégré** : Affichage des résultats en temps réel
- **Indicateurs visuels** : Status des modules en couleur
- **Animations fluides** : Transitions et effets visuels

## 🔧 Modules Techniques

### Module OSINT
```typescript
// Simulation de reconnaissance passive
const osintData = {
  geolocation: "Paris, France",
  organization: "OVH SAS",
  asn: "AS16276",
  reputation: "Clean",
  technologies: ["Apache", "PHP", "MySQL"]
};
```

### Module Scanner
```typescript
// Simulation de scan de ports
const scanResults = {
  openPorts: [22, 80, 443, 3306],
  services: ["SSH", "HTTP", "HTTPS", "MySQL"],
  osDetection: "Linux (TTL=64)",
  responseTime: "23ms"
};
```

### Module Crypto
```typescript
// Outils cryptographiques
const cryptoTools = {
  base64: (text: string) => btoa(text),
  rot13: (text: string) => text.replace(/[a-zA-Z]/g, ...),
  fernet: "Simulation de chiffrement Fernet",
  steganography: "Cachage de données dans images"
};
```

## 📈 Concepts Couverts

| Domaine | Compétences |
|---------|-------------|
| **Cybersec Offensive** | Reconnaissance, scanning, analyse vulns |
| **Développement Web** | React, TypeScript, Interface moderne |
| **OSINT** | Recherche d'informations publiques |
| **Réseaux** | TCP/UDP, ports, services |
| **Cryptographie** | Chiffrement, encodage, stéganographie |
| **Reporting** | Documentation, analyse, présentation |

## 🎯 Objectifs Pédagogiques

- Comprendre les phases d'une évaluation de sécurité
- Maîtriser les outils de reconnaissance passive
- Analyser les vulnérabilités web courantes
- Appliquer les concepts cryptographiques
- Documenter et présenter les résultats

## 🚀 Déploiement

### Déploiement Local
```bash
npm run build
npm run preview
```

### Déploiement Production
```bash
# Build pour production
npm run build

# Les fichiers sont générés dans dist/
# Déployez le contenu de dist/ sur votre serveur web
```

## 🤝 Contribution

Ce projet est à des fins éducatives. Les contributions sont les bienvenues pour :
- Améliorer l'interface utilisateur
- Ajouter de nouveaux modules éducatifs
- Corriger les bugs
- Améliorer la documentation

## 📄 Licence

Ce projet est sous licence éducative. Utilisation autorisée uniquement à des fins d'apprentissage et de recherche.

## 👨‍💻 Auteur

**k@wst / Strong System Africa**
- Framework éducatif de cybersécurité
- Interface moderne React/TypeScript
- Simulation réaliste sans composants malveillants

## 🔗 Ressources Utiles

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)
- [SANS Reading Room](https://www.sans.org/reading-room/)
- [CVE Database](https://cve.mitre.org/)

---

**⚠️ Rappel Important :** Ce framework est conçu pour l'apprentissage. Utilisez-le de manière responsable et éthique.
