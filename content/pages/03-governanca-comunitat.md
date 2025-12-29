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

---
**Següent:** [4. Monetització i Conclusions](/cas-estudi-pytorch/04-monetitzacio-futur)
