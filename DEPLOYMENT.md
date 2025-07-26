# 🚀 Guide de Déploiement - BlackPyReconX

## 📋 Prérequis

- Node.js 18 ou supérieur
- npm ou yarn
- Compte sur une plateforme de déploiement (Netlify, Vercel, etc.)

## 🛠️ Déploiement Local

### 1. Installation des dépendances
```bash
npm install
```

### 2. Lancement en mode développement
```bash
npm run dev
```
L'application sera accessible sur `http://localhost:5173`

### 3. Build de production
```bash
npm run build
```
Les fichiers optimisés seront générés dans le dossier `dist/`

### 4. Prévisualisation locale
```bash
npm run preview
```

## 🌐 Déploiement sur Netlify

### Méthode 1 : Déploiement automatique via Git

1. **Connecter votre repository**
   - Allez sur [Netlify](https://netlify.com)
   - Cliquez sur "New site from Git"
   - Connectez votre repository GitHub/GitLab

2. **Configuration du build**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

3. **Variables d'environnement** (si nécessaire)
   ```
   NODE_VERSION=18
   ```

### Méthode 2 : Déploiement manuel

1. **Build local**
   ```bash
   npm run build
   ```

2. **Upload du dossier dist**
   - Glissez-déposez le dossier `dist/` sur Netlify
   - Ou utilisez Netlify CLI :
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

## ⚡ Déploiement sur Vercel

### Via Vercel CLI
```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel --prod
```

### Via Interface Web
1. Importez votre projet sur [Vercel](https://vercel.com)
2. Configuration automatique détectée
3. Déploiement automatique

## 🐳 Déploiement avec Docker

### 1. Créer un Dockerfile
```dockerfile
FROM node:18-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 2. Build et run
```bash
docker build -t blackpyreconx .
docker run -p 80:80 blackpyreconx
```

## 🔧 Configuration Avancée

### Variables d'environnement
Créez un fichier `.env` pour la configuration :
```env
VITE_APP_TITLE=BlackPyReconX
VITE_API_URL=https://api.example.com
```

### Configuration Nginx (si nécessaire)
```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
}
```

## 📊 Optimisations de Performance

### 1. Analyse du bundle
```bash
npm run build -- --analyze
```

### 2. Optimisations Vite
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['lucide-react']
        }
      }
    }
  }
});
```

## 🔒 Sécurité

### Headers de sécurité
Ajoutez ces headers à votre serveur :
```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

### HTTPS
- Activez HTTPS sur votre plateforme de déploiement
- Utilisez des certificats SSL/TLS valides
- Configurez HSTS si possible

## 📈 Monitoring et Analytics

### 1. Google Analytics (optionnel)
```html
<!-- Dans index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### 2. Monitoring d'erreurs
Intégrez Sentry ou un service similaire pour le monitoring des erreurs.

## 🚨 Dépannage

### Problèmes courants

1. **Erreur de build**
   ```bash
   # Nettoyer le cache
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Problème de routing**
   - Configurez les redirections pour SPA
   - Ajoutez `_redirects` pour Netlify :
   ```
   /*    /index.html   200
   ```

3. **Problème de permissions**
   ```bash
   # Fixer les permissions
   chmod +x node_modules/.bin/*
   ```

## 📱 Tests de Déploiement

### Checklist de validation
- [ ] Application se charge correctement
- [ ] Tous les modules fonctionnent
- [ ] Interface responsive sur mobile
- [ ] Performance acceptable (< 3s de chargement)
- [ ] Pas d'erreurs console
- [ ] HTTPS activé
- [ ] Headers de sécurité configurés

### Tests automatisés
```bash
# Tests unitaires
npm run test

# Tests e2e (si configurés)
npm run test:e2e
```

## 🎯 Mise en Production

### 1. Préparation
- [ ] Tests complets effectués
- [ ] Documentation à jour
- [ ] Variables d'environnement configurées
- [ ] Monitoring en place

### 2. Déploiement
- [ ] Build de production créé
- [ ] Déploiement sur l'environnement de staging
- [ ] Validation sur staging
- [ ] Déploiement en production

### 3. Post-déploiement
- [ ] Vérification du fonctionnement
- [ ] Tests de charge si nécessaire
- [ ] Monitoring des métriques
- [ ] Communication aux utilisateurs

## 📞 Support

En cas de problème :
1. Vérifiez les logs de build
2. Consultez la documentation de votre plateforme
3. Vérifiez les issues GitHub du projet
4. Contactez l'équipe de support si nécessaire

---

**🎉 Félicitations !** Votre framework BlackPyReconX est maintenant déployé et prêt à être utilisé pour l'apprentissage de la cybersécurité !