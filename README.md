# WAGNER.exe — NeoBrutalist Portfolio

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
