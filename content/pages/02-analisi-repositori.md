/*
Title: 2. Anàlisi del Repositori (Arqueologia de Codi)
Description: Dades del GitHub, anàlisi de commits històrics, conflictes i fites tècniques.
Sort: 2
*/

## Dades Vives (Gener 2025)
*   **Popularitat:** +80k Stars, +20k Forks.
*   **Velocitat:** El projecte es mou a una velocitat vertiginosa, tancant centenars de Pull Requests setmanals. Això demostra que no està en "mode manteniment", sinó en expansió agressiva.

## Model de negoci i llicenciament


### Llicència: BSD-3-Clause (Modificada)
PyTorch es distribueix sota una llicència BSD de 3 clàusules, amb algunes modificacions específiques introduïdes per Facebook/Meta. En la pràctica, això és una llicència molt permissiva i favorable per als usuaris.

Pel que fa a l’ús, no hi ha pràcticament limitacions: es pot utilitzar PyTorch en projectes comercials sense cap mena de restricció, modificar el codi i redistribuir-lo lliurement. A diferència de llicències com la GPL, no cal fer públics els canvis que es facin. L’única obligació real és mantenir els avisos de copyright originals. També inclou una clàusula de patents: Meta concedeix una llicència sobre les seves patents relacionades amb PyTorch, però aquesta llicència es revoca si l’usuari inicia una demanda de patents contra Meta.

L’elecció de la BSD-3 en lloc d’Apache o MIT no és casual. Aquesta llicència permet protegir millor la marca “PyTorch” i evita que tercers puguin utilitzar el nom o fer branding enganyós sobre versions modificades del framework.

### Cost per als Usuaris: 100% Gratuït
Quant al cost, PyTorch és completament gratuït. No existeixen versions Enterprise ni edicions de pagament: el mateix codi s’utilitza tant en una startup petita com en grans empreses com Google. El projecte es manté gràcies a finançament corporatiu (principalment de Meta, NVIDIA, AMD i Microsoft) i a les contribucions gestionades sota el paraigua de la Linux Foundation.

Les empreses que hi participen no guanyen diners venent PyTorch en si, sinó pel que l’envolta. Meta el fa servir com a infraestructura clau per a productes propis com Instagram Reels o les transcripcions de WhatsApp. NVIDIA es beneficia indirectament perquè un bon suport de CUDA a PyTorch impulsa la venda de GPUs. I moltes startups construeixen negoci oferint serveis, consultoria o plataformes basades en PyTorch, com és el cas de Lightning AI o Hugging Face.

## Fites Històriques i Curiositats del Codi

### 1. La "Gran Unificació": Variable i Tensor (v0.4.0 - Abril 2018)
Si reviseu la història del git, trobareu un punt d'inflexió massiu el 2018.
*   **El problema:** Antigament, per calcular gradients, havies d'embolicar les dades: `Variable(Tensor(data))`. Això era redundant i confús per als júniors.
*   **La solució (Refactor Èpic):** Els desenvolupadors van fusionar les classes `Tensor` i `Variable` en el codi C++ (llibreria ATen). Això va simplificar enormement l'API, però va requerir reescriure el nucli del sistema.

### 2. El conflicte "Caffe2 Merge" (Març 2018)
Aquest és un exemple fascinant de política d'empresa reflectida al codi.
*   **Context:** Facebook tenia dos fills: PyTorch (Recerca/Lent) i Caffe2 (Producció/Ràpid/Mòbil).
*   **El Merge:** Per evitar duplicar feina, van decidir fusionar Caffe2 *dins* del repositori de PyTorch.
*   **Resultat:** Avui dia, si mireu el codi font a `csrc/`, encara hi trobareu vestigis d'aquesta fusió. Va ser un moviment crític per convertir PyTorch en una eina "end-to-end", capaç d'anar del laboratori al telèfon mòbil.

### 3. El drama del suport a Windows
Durant els primers 2 anys, PyTorch era "Linux/Mac only".
*   **El conflicte:** Els fils d'Issues a GitHub estaven plens d'usuaris de Windows enfadats. Els *Core Devs* (que treballaven amb servidors Linux) eren reticents a mantenir la complexitat de Windows.
*   **La comunitat al rescat:** Va ser la comunitat externa qui va forçar i liderar els primers ports a Windows, fins que finalment es va acceptar oficialment.

### 4. La resposta a JAX: PyTorch 2.0 (2022-2023)
L'últim gran canvi al repositori ha estat la introducció de `torch.compile`.
*   **El motiu:** Google va treure JAX, que era molt més ràpid gràcies a la compilació XLA.
*   **La reacció:** PyTorch va haver de trencar la seva filosofia de "només Python pur" per introduir un compilador JIT seriós i no perdre la corona del rendiment.

---
**Següent:** [3. Governança i Comunitat](/cas-estudi-pytorch/03-governanca-comunitat)
