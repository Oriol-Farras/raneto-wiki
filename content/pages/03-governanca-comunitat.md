/*
Title: 3. Governança, Comunitat i Fundació
Description: Com es governa el projecte, el pas a la Linux Foundation i el rol de les Big Tech.
Sort: 3
*/


## L'Era Facebook (2016-2022): El "Dictador Benèvol"
Durant els primers 6 anys, PyTorch era propietat intel·lectual de Meta (Facebook). El repositori vivia sota `facebookresearch`.
*   **El risc:** Tot i ser Open Source, moltes empreses (com Apple o bancs) tenien por d'integrar-lo profundament. Què passaria si Facebook decidia tancar l'aixeta o canviar la llicència?
*   **L'equip:** Els *Core Maintainers* eren gairebé exclusivament empleats de Meta AI.

## La Creació de la PyTorch Foundation (Setembre 2022)
En un moviment estratègic històric, Meta va transferir la propietat de PyTorch a la **Linux Foundation**.

### Per què fer-ho? (Anàlisi Estratègica)
No va ser altruisme, va ser supervivència. Perquè PyTorch es convertís en l'estàndard absolut de la indústria, havia de ser **neutral**. Si seguia sent "de Facebook", Google sempre tindria l'avantatge amb TensorFlow.

### Qui governa ara?
La fundació té una junta directiva formada per competidors directes que col·laboren en el codi base:
*   **Meta:** Creadors originals.
*   **Google:** (Irònicament, ja que tenen TensorFlow/JAX, però necessiten que PyTorch funcioni al seu Cloud).
*   **Microsoft:** Grans inversors via OpenAI.
*   **AWS (Amazon):** Necessiten PyTorch per als seus serveis.
*   **NVIDIA i AMD:** Els fabricants de xips.

### Estructura de Poder
La governança tècnica segueix sent **meritocràtica**. Tenir diners a la fundació et dóna vot en màrqueting i estratègia, però per aprovar un *Pull Request* crític, necessites l'aprovació dels *Top Level Maintainers*, que són els enginyers que més han contribuït històricament (molts encara a Meta, però cada cop més diversificats).

## Eines de Comunicació i Col·laboració

### Canals Oficials de Discussió
La comunitat PyTorch està distribuïda en múltiples plataformes, cadascuna amb un propòsit específic:

**discuss.pytorch.org (Fòrum Oficial)**
*   **Propòsit:** Preguntes tècniques, tutorials, anuncis oficials
*   **Estructura:** Organitzat per categories (PyTorch, TorchVision, Distributed Training, etc.)
*   **Moderació:** Equip de community managers + volunteers
*   **Volum:** ~50.000 posts, ~300.000 usuaris registrats

**PyTorch Dev Slack**
*   **Propòsit:** Comunicació interna entre core contributors i desenvolupadors actius
*   **Accés:** Restringit (cal sol·licitar invitació i demostrar contribucions prèvies)
*   **Canals clau:** `#dev-discuss`, `#rfc` (Request for Comments), `#ci-failures`
*   **Filosofia:** Discussions tècniques de baix nivell i coordinació de releases

**GitHub Discussions**
*   **Propòsit:** Debats sobre roadmap, RFC (proposals d'arquitectura), feedback sobre features
*   **Avantatge:** Integrat directament amb el repositori, permet enllaçar issues i PRs
*   **Format:** Més informal que issues, però més estructurat que Slack

**Altres canals secundaris:**
*   **Discord comunitari:** No oficial, gestionat per fans (10k+ membres)
*   **Twitter/X (@PyTorch):** Anuncis oficials i marketing
*   **Stack Overflow:** Etiqueta `pytorch` amb 50k+ preguntes

### Política de Contribució: Com entrar al projecte?

**CONTRIBUTING.md i Documentació**
PyTorch té una guia de contribució extensa i ben documentada:
*   **Localització:** `CONTRIBUTING.md` al repositori arrel
*   **Contingut:** Instruccions per compilar des de zero, estil de codi (PEP8 per Python, Google Style per C++), workflow de PR
*   **Developer Guide:** Documentació de 100+ pàgines explicant l'arquitectura interna

**CLA (Contributor License Agreement) - Obligatori**
Abans que qualsevol PR sigui acceptat, cal signar el **Meta CLA**:
*   **Què implica?** Garanteixes que el teu codi és original i cedeix drets d'ús a la Linux Foundation
*   **Procés:** Automàtic via bot de GitHub la primera vegada que obres un PR
*   **Controvèrsia:** Alguns desenvolupadors ho veuen com a barrera d'entrada, però és estàndard en projectes corporatius

**Barrera d'entrada: Moderada-Alta**
*   **Dificultat tècnica:** Compilar PyTorch des de codi pot trigar 1-2 hores i requereix >32GB RAM
*   **Revisió estricta:** Els PRs reben feedback exhaustiu (sovint 5-10 rondes de revisions)
*   **Temps d'acceptació:** Un PR no trivial pot trigar setmanes o mesos a fusionar-se
*   **Però:** La comunitat és acollidora amb principiants si mostren voluntat d'aprendre

**Camí recomanat per a nous contributors:**
1. Començar amb issues etiquetades com `good first issue`
2. Contribuir documentació (menys barreres tècniques)
3. Fixar bugs petits abans d'intentar features grans
4. Participar activament a discussions abans d'obrir PRs

### Resolució de Conflictes i Codi de Conducta

**Code of Conduct (CoC) - Linux Foundation**
PyTorch adopta el **Contributor Covenant**, un estàndard de la indústria:
*   **Principis:** Respecte, inclusió, tolerància zero amb assetjament
*   **Abast:** Aplica a tots els espais del projecte (GitHub, Slack, fòrums, conferències)
*   **Conseqüències:** Warnings, bans temporals o permanents segons gravetat

**Qui arbitra?**
*   **Primera línia:** Moderadors comunitaris i core maintainers
*   **Escalació:** Comitè de conducta de la Linux Foundation (casos greus)
*   **Transparència:** Les decisions es comuniquen públicament si afecten a bans permanents

**Resolució de conflictes tècnics:**
*   **Desacords de disseny:** Es resolen via RFC (Request for Comments) públics
*   **Deadlocks:** El Steering Committee (5 membres electes) té vot de desempat
*   **Precedent:** En 8 anys, només s'han produït ~3 desacords majors que hagin requerit votació formal

**Casos famosos:**
*   **Debate sobre TorchScript vs torch.compile (2021-2022):** La comunitat estava dividida sobre quin compilador seria el futur. Es va resoldre via RFC i benchmark públics.
*   **Windows support controversy (2017):** Va generar tensions però es va resoldre amb compromís i recursos dedicats.

### Model de Finançament: Quotes Corporatives

**Com es finança PyTorch?**
A diferència de projectes petits amb Patreon o "Buy me a coffee", PyTorch opera a escala industrial:

**Premier Members (Linux Foundation)**
*   **Cost:** $100.000 - $500.000 anuals per empresa (no públic exactament)
*   **Membres actuals:** Meta, NVIDIA, AMD, Microsoft, AWS, Google, Intel
*   **Beneficis:** Seient a la junta directiva, influència en roadmap, branding en esdeveniments

**General Members**
*   **Cost:** $5.000 - $20.000 anuals
*   **Tipus:** Startups, universitats, empreses mitjanes
*   **Beneficis:** Accés prioritari a canals privats, invitacions a summits

**Donacions individuals: Pràcticament inexistents**
*   No hi ha botó de "Donate" al web oficial
*   Les contribucions individuals es fan via temps (codi, documentació, moderació)
*   Raó: El pressupost anual estimat del projecte és de ~$10-15 milions (salaris, infraestructura), impossible de cobrir amb micromecenatge

**On va el finançament?**
*   **Salaris:** Core maintainers a temps complet (empleats per Meta/NVIDIA/etc. però dedicats a PyTorch)
*   **Infraestructura:** Servers CI/CD amb GPUs (cost estimat: $2M/any)
*   **Esdeveniments:** PyTorch Conference, hackathons, beques per a estudiants
*   **Marketing i advocacia:** Creació de tutorials, cursos, documentació


---
**Següent:** [4. Monetització i Conclusions](/cas-estudi-pytorch/04-monetitzacio-futur)
