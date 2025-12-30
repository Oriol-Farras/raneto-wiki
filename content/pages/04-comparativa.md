/*
Title: 4. Comparativa amb Altres Frameworks
Description: PyTorch vs TensorFlow, JAX i altres eines de l'ecosistema Python per a ML/AI.
Sort: 4
*/

## Per què Comparar? El Context de la "Guerra dels Frameworks"
Entre 2015 i 2020, el món del Deep Learning va viure una autèntica guerra de trinxeres entre frameworks. Avui dia, PyTorch ha guanyat la batalla acadèmica, però TensorFlow encara domina en certs nínxols industrials, i JAX està emergint com a alternativa per a investigadors avançats.

## PyTorch vs TensorFlow/Keras

### Història de la Rivalitat
**TensorFlow** (Google, 2015) va ser el primer framework mainstream. Durant 2016-2018 semblava invencible, però tenia un problema fatal: **grafs estàtics**. Havies de definir tota la xarxa neuronal *abans* d'executar-la, cosa que feia el debugging infernal.

PyTorch (Meta, 2016) va arribar amb una filosofia oposada: **grafs dinàmics** (eager execution). El codi s'executava línia per línia com Python normal, fent-lo molt més intuïtiu.

### Comparativa Tècnica

| Característica | PyTorch | TensorFlow/Keras |
|----------------|---------|------------------|
| **Filosofia de disseny** | "Python-first", imperatiu | Declaratiu (històricament), ara híbrid |
| **Corba d'aprenentatge** | Moderada (més Pythonic) | Alta (TF 1.x), Baixa (Keras/TF 2.x) |
| **Debugging** | Trivial (pdb, print) | Complicat (TF 1.x), Millorat (TF 2.x) |
| **Flexibilitat** | Màxima (recerca) | Bona, però més rígida |
| **Desplegament a producció** | Millor amb TorchScript/ONNX | Excel·lent (TensorFlow Serving, TFLite) |
| **Suport per a mòbil** | Acceptable (PyTorch Mobile) | Excel·lent (TensorFlow Lite) |
| **Ecosistema** | Hugging Face, Lightning AI | TensorFlow Hub, TFX |
| **Adopció acadèmica** | ~75% dels papers (2023) | ~15% dels papers (caiguda des del 50% el 2018) |
| **Adopció industrial** | Creixent (OpenAI, Tesla, Meta) | Encara dominant (Google, Uber, Airbnb) |

### Pros i Contres

**PyTorch - Punts Forts:**

*  **Intuïtiu:** Si saps Python, saps PyTorch. No cal aprendre un DSL (Domain Specific Language).
*  **Recerca:** Ideal per a prototips ràpids i arquitectures experimentals (Transformers, GANs, RL).
*  **Comunitat acadèmica:** Tots els papers recents publiquen codi en PyTorch.
*  **Dynamic computation graphs:** Pots canviar l'arquitectura en temps d'execució (útil per a NLP).

**PyTorch - Punts Febles:**

*  **Desplegament històricament complicat:** Fins fa poc, portar un model a producció era difícil (millorat amb TorchServe).
*  **Menys eines "enterprise":** TensorFlow té TFX (pipeline end-to-end) molt madur.
*  **Suport mòbil inferior:** TensorFlow Lite és més estable que PyTorch Mobile.

**TensorFlow/Keras - Punts Forts:**

*  **Ecosistema de producció:** TensorFlow Serving, TFLite, TensorFlow.js són estàndard industrial.
*  **Keras:** API d'alt nivell molt fàcil per a principiants.
*  **Integració amb Google Cloud:** TPUs (Tensor Processing Units) estan optimitzades per a TF.
*  **Estabilitat:** Menys breaking changes que PyTorch.

**TensorFlow/Keras - Punts Febles:**

*  **Complexitat històrica:** TF 1.x era un malson. TF 2.x va millorar, però l'ecosistema té capes d'abstracció confuses.
*  **Pèrdua de momentum acadèmic:** Els investigadors han migrat a PyTorch.
*  **Menys "Pythonic":** Encara es nota que ve d'una filosofia de grafs estàtics.

### Quan triar cadascun?
**Tria PyTorch si:**

*   Fas recerca o prototips ràpids
*   Necessites flexibilitat màxima
*   El teu equip té experiència en Python
*   Vols integrar-te amb Hugging Face, LangChain, etc.

**Tria TensorFlow si:**

*   Necessites desplegar a mòbils (Android/iOS)
*   Tens infraestructura Google Cloud amb TPUs
*   Prioritzes estabilitat i backward compatibility
*   Ja tens models TensorFlow en producció

## PyTorch vs JAX

### L'Emergència de JAX (Google, 2018)
**JAX** és el "fill rebel" de Google. No és un framework de Deep Learning tradicional, sinó una llibreria de diferenciació automàtica sobre NumPy amb compilació XLA.

### Comparativa Tècnica

| Característica | PyTorch | JAX |
|----------------|---------|-----|
| **Paradigma** | Orientat a objectes (nn.Module) | Funcional pur |
| **Rendiment** | Bo (torch.compile en 2.0+) | Excel·lent (XLA compilation) |
| **Facilitat d'ús** | Alta (API intuïtiva) | Moderada (cal entendre programació funcional) |
| **Ecosistema** | Immens (torchvision, torchaudio, etc.) | Petit però creixent (Flax, Haiku, Optax) |
| **Paralelització** | Complexa (DDP, FSDP) | Trivial (pmap, vmap) |
| **Adopció** | Mainstream | Nínxol (DeepMind, OpenAI researchers) |

### Pros i Contres

**JAX - Punts Forts:**

*  **Rendiment brutal:** XLA compilation genera codi CUDA més ràpid que PyTorch (pre-2.0).
*  **Paralelització elegant:** `jax.pmap` permet distribuir càlcul en múltiples GPUs amb una línia.
*  **Matemàtiques pures:** Ideal per a mètodes numèrics avançats (simulacions físiques, Bayesian ML).
*  **Composabilitat:** Les transformacions (grad, jit, vmap) es poden combinar lliurement.

**JAX - Punts Febles:**

* **Corba d'aprenentatge:** Requereix entendre programació funcional (immutabilitat, closures).
* **Ecosistema immadur:** Menys llibreries de tercers.
* **Debugging complicat:** Els errors de XLA són críptics.
* **No és "PyTorch++":** No pots portar codi PyTorch directament.

### Quan triar JAX?
**Tria JAX si:**

*   Ets investigador avançat i necessites màxim rendiment
*   Treballes amb simulacions científiques o mètodes Bayesians
*   Vols experimentar amb arquitectures que requereixen paralelització massiva
*   No et fa por aprendre un nou paradigma

**Segueix amb PyTorch si:**

*   Necessites ecosistema madur (Hugging Face, etc.)
*   Prioritzes prototipatge ràpid
*   El teu equip no té experiència en programació funcional

### La Resposta de PyTorch: torch.compile (2023)
PyTorch 2.0 va introduir `torch.compile`, que utilitza TorchDynamo + TorchInductor per competir amb JAX:

*   **Acceleracions:** 2-10x en molts casos
*   **Filosofia:** "El millor dels dos móns" - sintaxi PyTorch, rendiment JAX
*   **Estat:** Encara no tan madur com XLA, però millora ràpidament

## Comparativa amb l'Ecosistema Python ML

### Taula de Popularitat (GitHub, Gener 2025)

| Projecte | Stars | Forks | Llenguatge Principal | Data d'inici | Propòsit |
|----------|-------|-------|----------------------|--------------|----------|
| **PyTorch** | 82k | 22k | Python/C++ | 2016 | Deep Learning framework |
| **TensorFlow** | 185k | 74k | C++/Python | 2015 | Deep Learning framework |
| **Scikit-Learn** | 59k | 25k | Python/Cython | 2010 | Machine Learning clàssic |
| **Hugging Face Transformers** | 135k | 27k | Python | 2018 | NLP pre-trained models |
| **Keras** | 61k | 19k | Python | 2015 | High-level Neural Networks API |
| **JAX** | 30k | 2.9k | Python | 2018 | Numerical computing |
| **FastAI** | 26k | 7.5k | Python | 2016 | High-level PyTorch wrapper |

### Anàlisi de les Dades

**Observacions clau:**

1. **TensorFlow lidera en stars absolutes**, però això reflecteix el seu avantatge temporal (va sortir abans).
2. **Hugging Face ha explotat:** En 6 anys ha superat PyTorch en stars, demostrant el poder de l'ecosistema.
3. **Scikit-Learn segueix viu:** El ML clàssic no ha mort; molts problemes no necessiten Deep Learning.
4. **JAX té menys forks:** Indica una comunitat més petita però més especialitzada.

**Taxa de Creixement (2023-2024):**

*   PyTorch: +8k stars/any
*   TensorFlow: +4k stars/any (desacceleració)
*   JAX: +5k stars/any (acceleració)
*   Hugging Face: +25k stars/any (explosiu)

### Posicionament Estratègic

**PyTorch com a "Base Layer":**
PyTorch s'ha convertit en la **infraestructura base** sobre la qual es construeixen altres eines:

*   **Hugging Face:** Utilitza PyTorch per sota (també suporta TF, però PyTorch és prioritari).
*   **FastAI:** Wrapper educatiu sobre PyTorch.
*   **Lightning AI:** Framework per simplificar codi PyTorch repetitiu.
*   **ONNX:** Format d'intercanvi que PyTorch suporta natívament.

**Analogia:** PyTorch és com Linux kernel; Hugging Face seria Ubuntu.

## Conclusions de la Comparativa

### El Panorama Actual (2025)

*   **Recerca:** PyTorch és rei absolut (75%+ dels papers).
*   **Producció Legacy:** TensorFlow segueix dominant en empreses grans que van adoptar-lo el 2016-2018.
*   **Producció Nova:** PyTorch és l'elecció per defecte (OpenAI, Anthropic, Stability AI usen PyTorch).
*   **Nínxol científic:** JAX està capturant investigadors avançats (DeepMind publica cada cop més en JAX).
*   **Futur:** La convergència de rendiment (torch.compile vs XLA) farà que l'elecció sigui més sobre ecosistema que sobre velocitat pura.

### La Lliçó Estratègica

PyTorch va guanyar no per ser tècnicament superior en tots els aspectes, sinó per **baixar la barrera d'entrada** i **escoltar la comunitat**. TensorFlow era més ràpid el 2017, però era massa difícil d'usar. JAX és més ràpid avui, però PyTorch està tancant la bretxa sense sacrificar usabilitat.

**La guerra dels frameworks ens ensenya:** En OSS, la millor tecnologia no sempre guanya; guanya la que té millor DX (Developer Experience) i comunitat més activa.

---
**Següent:** [5. Monetització i Conclusions](/cas-estudi-pytorch/05-monetitzacio-futur)