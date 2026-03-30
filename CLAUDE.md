# reestruturacao_crescitech

## Objetivo
Site ilustrativo para apresentação ao vivo da proposta de reestruturação da Crescitech para João Cardoso. A apresentação tem 10 telas sequenciais com scroll snap, animações de entrada via Framer Motion e dois sistemas de cor distintos.

## Stack
- React 18 + Vite
- Tailwind CSS com paletas customizadas
- Framer Motion para todas as animações
- Netlify para deploy

## Comportamento global
- Scroll snap: cada tela ocupa exatamente 100vh
- Navegação lateral fixa com 10 pontos clicáveis
- Tela de abertura (hero screen) antes das 9 seções
- Todas as animações usam whileInView, once: true, amount: 0.2

## Paletas

### Crescitech (hero + telas 1, 2, 4, 5, 6, 7, 8, 9)
- Azul Profundo #1D3557: títulos e elementos principais
- Azul Turquesa #00B5C5: destaques, bordas e acentos
- Azul Acinzentado #A8C0D6: textos secundários
- Cinza Neutro #F2F2F2: fundos alternativos
- Branco #FFFFFF: base e contraste
- Preto Sutil #333333: corpo de texto

### FrAiDay (tela 3 apenas)
- Amarelo #F5A800
- Preto #0D0D0D

## Tipografia
- Syne Extrabold: todos os títulos
- Pacifico: logo FrAiDay exclusivamente
- DM Sans: corpo de texto

## Estrutura de pastas
```
src/
  components/
    sections/   → HeroScreen + Section01 a Section09
    ui/         → NavIndicator, SectionWrapper, ColorTransition
  constants/
    content.js  → todos os textos centralizados
    media.js    → links de mídia do Instagram
  App.jsx
  main.jsx
  index.css
```

## Telas
- Tela 0: Hero screen com logo Crescitech e animação de entrada
- Tela 1: O diagnóstico atual da Crescitech
- Tela 2: A proposta central (divisão Crescitech e FrAiDay)
- Tela 3: FrAiDay — identidade e posicionamento (paleta amarelo e preto)
- Tela 4: Portfólio completo de produtos e ofertas
- Tela 5: Estratégia de marketing e presença digital
- Tela 6: Funil de aquisição gratuito
- Tela 7: Programa para escritórios de advocacia
- Tela 8: Onboarding automatizado e Follow Up
- Tela 9: Próximos passos e roadmap

## Transição de cor
- Entrada tela 3: fundo interpola de #ffffff para #0D0D0D via useScroll + useTransform
- Saída tela 3: fundo interpola de #0D0D0D para #ffffff

## Mídias
- Embeds do Instagram nas telas 5 e 6
- Links centralizados em src/constants/media.js
- Placeholders visuais com borda tracejada turquesa durante desenvolvimento