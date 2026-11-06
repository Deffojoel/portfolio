---
order: 1
icon: radar
title: Lab SOC, chaîne de détection
kicker: Projet principal
summary: Déployer une supervision Wazuh, écrire des règles de détection, puis les éprouver avec des attaques simulées.
outcome: Attaques simulées détectées ou bloquées sur deux environnements
stack: [Wazuh, Suricata, Sysmon, Sigma, Atomic Red Team, pfSense, Active Directory, Docker]
attack: [T1059.001, T1003.001, T1564.001, T1562.004, T1105]
repo: https://github.com/Deffojoel/soc-detection-lab
context: Deux labs complémentaires, l’un réalisé à l’ITIC en 2026, l’autre personnel et documenté en public.
goal: Construire une détection de bout en bout et vérifier qu’elle fonctionne face à de vraies techniques d’attaque, pas seulement sur le papier.
did:
  - Déploiement d’agents Wazuh par GPO (transformations MST) avec Sysmon et enrôlement via authd
  - Suricata IDS/IPS sur pfSense, avec deux méthodes de remontée des logs (agent eve.json et syslog)
  - Traduction de règles Sigma vers le format natif de Wazuh
  - Durcissement d’un domaine Active Directory audité avec Purple Knight
learned: Une détection n’a de valeur que testée. Un test bloqué en amont par Defender et AMSI compte aussi comme un résultat, celui de la défense en profondeur.
results:
  - label: Infrastructure ITIC
    items:
      - 100 % des attaques simulées avec Atomic Red Team détectées
      - Blocage actif immédiat en mode IPS via Netfilter/IPTables
  - label: Lab personnel
    items:
      - 5 règles personnalisées, traduites depuis Sigma
      - T1059.001 et T1564.001 exécutés, alerte générée
      - T1003.001 (dump LSASS) bloqué par Defender/AMSI avant exécution
      - Règle curl.exe (T1105) validée par exécution directe
---

## Deux environnements, une même démarche

**Infrastructure ITIC.** Un SOC opérationnel de laboratoire : agents Wazuh déployés par GPO sur le parc, Suricata IDS/IPS sur pfSense, et un domaine Active Directory durci puis audité avec Purple Knight. Deux méthodes de remontée des logs ont été comparées, l’agent `eve.json` et syslog.

**Lab personnel.** Wazuh 4.9.2 sous Docker, une VM Windows instrumentée avec Sysmon, et cinq règles écrites à partir de Sigma, éprouvées avec Atomic Red Team et des exécutions directes. Le dépôt public contient le runbook complet, les scripts et les règles.

## Règles écrites pour le lab personnel

| Règle | Technique | Détection |
|---|---|---|
| 100101 | T1564.001 | Fichier marqué système via `attrib.exe` |
| 100102 | T1059.001 | Ligne de commande PowerShell anormalement longue |
| 100103 | T1562.004 | Règle de pare-feu Windows créée en « Allow » |
| 100104 | T1003.001 | Accès à LSASS depuis PowerShell |
| 100105 | T1105 | Exécution de `curl.exe` |
