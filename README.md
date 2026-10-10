# WAGNER.exe — NeoBrutalist Portfolio

[![Live](https://img.shields.io/badge/demo-ao_vivo-4ade80?style=for-the-badge&logo=vercel&logoColor=white)](https://wagner-port.vercel.app)
![Tailwind](https://img.shields.io/badge/Tailwind-CDN-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

Base: Arham43-ops/NeoBrutalist, adaptado para Wagner Schemmer Martins.
Estrutura profissional separada (sem monolito, sem React).

```
wagner-neo-portfolio/
├── index.html            # markup + seções (about/skills/experience/stats/projects/reports/contact)
├── css/
│   ├── variables.css     # tokens (cores neo-*, sombras)
│   ├── components.css    # cursor, marquee, cards, animações
│   └── style.css         # base body + grid
├── js/
│   ├── tailwind.config.js # paleta + font + shadows (Tailwind CDN)
│   ├── cursor.js          # cursor custom difference
│   ├── github-stats.js    # fetch GitHub/LeetCode → TROCAR username
│   └── ui.js              # reveal on scroll + progress bar
└── Assets/
    ├── images/            # TROCAR img.jpg pela sua foto
    └── Resume/            # TROCAR CV em PDF
```

## Rodar
Go Live no VSCode (index.html) ou `npx serve .`

## Personalizar
1. `Assets/images/img.jpg` → sua foto
2. `Assets/Resume/` → seu CV
3. `js/github-stats.js` → troca `arham43-ops` pelo seu `Wagner-Schemmer`
4. Seção projects no `index.html` → seus 3 ia-income
5. Cores em `css/variables.css` + `js/tailwind.config.js` (mantém sincronizado)
