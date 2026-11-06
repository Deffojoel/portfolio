---
order: 4
icon: server
title: Haute disponibilité web
kicker: Infrastructure
summary: Garder un site web en ligne même si un serveur tombe, et le durcir avant sa mise en production.
outcome: Répartition de charge HAProxy et bascule Keepalived sur IP virtuelle
stack: [Debian, Nginx, HAProxy, Keepalived, Apache]
attack: []
repo: https://github.com/Deffojoel/-Mise-en-Haute-Disponibilit--Web--Debian-Nginx-HAProxy-Keepalived--config
context: Service web réparti sur deux serveurs.
goal: Assurer la continuité de service et réduire la surface d’attaque.
did:
  - Répartition de charge entre deux serveurs web avec HAProxy
  - Bascule automatique avec Keepalived sur une IP virtuelle partagée
  - Durcissement avant mise en ligne d’Apache en HTTPS (en-têtes HTTP, masquage de signature, listing de répertoires désactivé)
---
