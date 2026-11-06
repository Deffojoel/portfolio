/**
 * Toutes les informations du site, hors projets (voir src/content/projects/).
 * Pour mettre à jour ton profil, modifie uniquement ce fichier.
 */

export const profile = {
  name: 'Joël Deffo',
  fullName: 'Alain Joël Deffo Neda',
  role: 'Étudiant en Mastère Cybersécurité, Blue Team',
  lead: "Je construis, supervise et défends des infrastructures : Active Directory, pfSense, détection avec Wazuh et Suricata.",
  seeking: 'Alternance en SOC, administration systèmes ou réseaux',
  availability: {
    short: 'Disponible en alternance',
    start: 'Dès que possible',
    rhythm: '3 semaines en entreprise, 1 semaine à l’école',
    zone: 'Île-de-France',
  },
  city: 'Chevilly-Larue, Île-de-France',
  email: 'joeldeffo.fr@gmail.com',
  phone: '+33 7 43 58 76 02',
  phoneHref: '+33743587602',
  cv: 'CV-Joel-Deffo.pdf',
  links: {
    github: 'https://github.com/Deffojoel',
    linkedin: 'https://www.linkedin.com/in/joel-deffo',
    tryhackme: 'https://tryhackme.com/p/joeldeffo.fr',
    writeups: 'https://github.com/Deffojoel/tryhackme-writeups',
  },
};

/**
 * Services externes. Vides pour l'instant : le site fonctionne sans.
 * goatcounter : le code choisi à l'inscription (https://<code>.goatcounter.com).
 * web3forms : la clé d'accès reçue par email. Elle est publique par conception.
 */
export const services = {
  goatcounter: 'joeldeffo',
  web3forms: '',
};

export const about = [
  'Mon parcours a commencé sur le terrain : souder de la fibre optique et configurer des routeurs MikroTik chez Matrix Télécom, puis traiter des incidents réseau en support N2/N3 chez Intelcia.',
  'Aujourd’hui en Mastère Cybersécurité à Sup de Vinci (label ANSSI SecNumedu), je me spécialise en défense : déployer une chaîne de détection, écrire des règles, puis les éprouver avec des attaques simulées.',
];

export const motto = 'Comprendre avant d’agir, analyser avant de sécuriser.';

export const skills = [
  {
    title: 'Détection et SOC',
    icon: 'radar',
    items: ['Wazuh', 'Suricata IDS/IPS', 'Elastic / ELK', 'TheHive', 'Cortex', 'Sysmon', 'Sigma', 'Atomic Red Team', 'MITRE ATT&CK', 'NIST IR Lifecycle'],
  },
  {
    title: 'Systèmes',
    icon: 'server',
    items: ['Windows Server', 'Active Directory', 'GPO', 'Kerberos', 'PKI', 'Purple Knight', 'Red Hat', 'Debian', 'Ubuntu', 'Kali', 'Durcissement Linux', 'Microsoft 365'],
  },
  {
    title: 'Réseaux et sécurité',
    icon: 'network',
    items: ['TCP/IP', 'VLAN', 'Routage', 'DNS', 'DHCP', 'DMZ', 'pfSense (HA / CARP)', 'iptables', 'Fortinet', 'MikroTik (VRRP)', 'Cisco', 'VPN IPsec', 'OpenVPN', 'Wireshark'],
  },
  {
    title: 'Supervision',
    icon: 'activity',
    items: ['Zabbix', 'GLPI'],
  },
  {
    title: 'Virtualisation, cloud et continuité',
    icon: 'layers',
    items: ['VMware ESXi', 'Hyper-V', 'Docker', 'AWS (EC2, S3, IAM)', 'Veeam', 'UrBackup', 'Borg Backup', 'Stratégie 3-2-1', 'PRA / PCA'],
  },
  {
    title: 'Automatisation',
    icon: 'terminal',
    items: ['Ansible', 'Python', 'Bash', 'PowerShell'],
  },
  {
    title: 'Test et OSINT',
    icon: 'crosshair',
    items: ['Nmap', 'Nikto', 'Dirb', 'Burp Suite', 'sqlmap', 'Metasploit Framework', 'LinPEAS', 'OWASP', 'Énumération DNS', 'theHarvester', 'Google Dorks'],
  },
  {
    title: 'Normes et méthode',
    icon: 'scale',
    items: ['ISO 27001', 'EBIOS RM', 'NIS2', 'Cyber Resilience Act', 'Scrum', 'Cycle en V', 'Jira', 'ITIL (notions)', 'Documentation technique'],
  },
];

export const experience = [
  {
    period: 'Janvier 2024 à octobre 2025',
    title: 'Conseiller Technique Premium',
    org: 'Intelcia Cameroun',
    summary: 'Support N2/N3 : diagnostic d’incidents sur box fibre et routeurs, dépannage à distance TCP/IP, DHCP, DNS et Wi-Fi, formation des clients aux bonnes pratiques de sécurité.',
  },
  {
    period: 'Septembre à décembre 2023',
    title: 'Webmaster',
    org: 'DSITS',
    summary: 'Création et maintenance de sites web, suivi de sécurité (mises à jour, sauvegardes), résolution d’incidents d’hébergement et de DNS, ateliers IoT pour enfants.',
  },
  {
    period: 'Avril à juin 2022',
    title: 'Technicien réseaux',
    org: 'Matrix Télécom Cameroun',
    summary: 'Configuration de routeurs MikroTik (routage, firewall, QoS), liaisons point à point Ubiquiti, soudure et tests de fibre optique, supervision des équipements.',
  },
];

export const education = [
  { period: 'En cours', title: 'Mastère Cybersécurité', org: 'Sup de Vinci', note: 'label ANSSI SecNumedu' },
  { period: '2026', title: 'Bachelor Cybersécurité et Cloud', org: 'ITIC Paris', note: 'RNCP 37680, titre Administrateur d’Infrastructures Sécurisées' },
  { period: '2023', title: 'Licence QSIR, Qualité Sécurité Internet et Réseaux', org: 'IUT-FV Cameroun' },
  { period: '2022', title: 'DUT ISR, Informatique et Services Réseaux', org: 'IUT-FV Cameroun' },
];

export const certifications = [
  { title: 'Certified in Cybersecurity (CC)', org: 'ISC2', note: '2025' },
  { title: 'Red Hat System Administration I (RH124)', org: 'Red Hat', note: 'Version 10' },
  { title: 'Getting Started with Linux Fundamentals (RH104)', org: 'Red Hat', note: 'Version 9.1' },
];

/** Rooms documentées dans le dépôt tryhackme-writeups. */
export const rooms = [
  {
    title: 'Blue',
    topic: 'Exploitation Windows et SMB',
    technique: 'MS17-010, EternalBlue',
    href: 'https://github.com/Deffojoel/tryhackme-writeups/tree/main/rooms/blue-eternalblue',
  },
  {
    title: 'TryHeartMe',
    topic: 'Authentification et autorisation web',
    technique: 'Falsification de JWT',
    href: 'https://github.com/Deffojoel/tryhackme-writeups/tree/main/rooms/tryheartme-jwt',
  },
];
