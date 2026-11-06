# Portfolio de Joël Deffo

Site statique construit avec [Astro](https://astro.build), publié sur GitHub Pages.
En ligne : https://deffojoel.github.io/portfolio/

## Modifier le contenu

| Je veux changer | Fichier |
|---|---|
| Disponibilité, liens, compétences, parcours, certifications, rooms | `src/data/profile.ts` |
| Un projet | `src/content/projects/*.md` |
| Le CV | Remplacer `public/CV-Joel-Deffo.pdf` |
| Les couleurs et typographies | `src/styles/tokens.css` |
| Les mentions légales | `src/pages/mentions-legales.astro` |

Pour ajouter un projet, copie un fichier de `src/content/projects/` et change son `order`.
Sa page détaillée est créée automatiquement. Le texte placé sous le bloc d'en-tête `---` y apparaît.

Si `learned` est absent d'un projet, `[À compléter]` s'affiche en local, et le bloc est masqué sur le site publié.

## Travailler en local

Il faut Node.js 22 ou plus récent.

```bash
npm install
npm run dev
```

Le site s'ouvre sur http://localhost:4321/portfolio/.

```bash
npm run build
npm run preview
```

## Photos

Les originaux restent dans `images/`, hors du dépôt.
`npm run photos` régénère les versions retouchées dans `src/assets/photos/`.
Astro produit ensuite les formats AVIF et WebP et les tailles responsives au build.

## Publier

Chaque push sur `main` lance `.github/workflows/deploy.yml`, qui construit puis publie le site.
Dans GitHub, **Settings > Pages > Source** doit être réglé sur **GitHub Actions**.

## Statistiques et formulaire

Les deux se règlent dans `services`, en haut de `src/data/profile.ts`. Vides, ils sont désactivés.

- **GoatCounter :** code du compte. Statistiques sur `https://<code>.goatcounter.com`. Sans cookie, donc sans bandeau.
- **Web3Forms :** clé d'accès reçue par email. Elle est publique par conception, ce n'est pas un secret.

La page de confidentialité et la politique CSP s'adaptent automatiquement.

## Passer à un domaine personnalisé

1. Dans `astro.config.mjs`, remplacer `site` par le domaine et `base` par `'/'`.
2. Mettre à jour l'URL du sitemap dans `public/robots.txt`.
3. Créer `public/CNAME` avec le domaine, puis configurer le DNS chez le registraire.

Ces réglages sont les seuls à changer : tous les liens internes en dépendent.

## Sécurité

- GitHub Pages ne permet pas d'envoyer des en-têtes HTTP personnalisés. La CSP passe par une balise `meta`, qui ne couvre pas `frame-ancestors`, et HSTS, `X-Frame-Options` et `Permissions-Policy` ne sont pas réglables.
- `public/_headers` contient la version complète, prête pour Cloudflare Pages ou Netlify. Il faudra y ajouter le domaine Web3Forms si le formulaire est activé.
- Aucun secret dans ce dépôt. `CV/`, `images/`, `references/` et `.env*` sont exclus par `.gitignore`.
- Aucune dépendance n'est livrée au navigateur, et les polices sont auto-hébergées.
- Le CV publié contient des données personnelles (adresse, téléphone, âge) : c'est un choix assumé, à revoir si besoin.
- Les actions GitHub sont épinglées par SHA, et Dependabot propose les mises à jour chaque mois.
