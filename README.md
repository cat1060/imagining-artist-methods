# Imagining Artist Methods

Fifteen step-by-step reconstructions of how famous paintings were made: what each artist's process would have been, from training and first decisions to the last stroke, using technical studies, documents and the intermediate works that survive.

**Live site:** https://cat1060.github.io/imagining-artist-methods/

| Guide | Work |
|---|---|
| [The School of Athens, day by day](https://cat1060.github.io/imagining-artist-methods/raphael/) | Raphael, fresco, 1509–11, Vatican Palace |
| [Christ Carrying the Cross, layer by layer](https://cat1060.github.io/imagining-artist-methods/el-greco/) | El Greco, about 1580–85, Metropolitan Museum of Art |
| [Self Portrait as Saint Catherine, a face from the mirror](https://cat1060.github.io/imagining-artist-methods/gentileschi/) | Artemisia Gentileschi, about 1615–17, National Gallery, London |
| [Self-Portrait, caught mid-stroke](https://cat1060.github.io/imagining-artist-methods/leyster/) | Judith Leyster, about 1630, National Gallery of Art, Washington |
| [The Night Watch, back to front](https://cat1060.github.io/imagining-artist-methods/rembrandt/) | Rembrandt van Rijn, 1642, Rijksmuseum, Amsterdam |
| [Girl with a Pearl Earring, layer by layer](https://cat1060.github.io/imagining-artist-methods/vermeer/) | Johannes Vermeer, about 1665, Mauritshuis |
| [Bouquet of Flowers, pressed and painted](https://cat1060.github.io/imagining-artist-methods/ruysch/) | Rachel Ruysch, 1708, Bayerische Staatsgemäldesammlungen, Munich |
| [Self Portrait in a Straw Hat, painted twice](https://cat1060.github.io/imagining-artist-methods/vigee-le-brun/) | Élisabeth Vigée Le Brun, about 1782, National Gallery, London |
| [The Horse Fair, from the market to the frieze](https://cat1060.github.io/imagining-artist-methods/bonheur/) | Rosa Bonheur, 1852–55, Metropolitan Museum of Art |
| [Impression, Sunrise, in one sitting](https://cat1060.github.io/imagining-artist-methods/monet/) | Claude Monet, 1872, Musée Marmottan Monet |
| [Paris Street; Rainy Day, pinned and ruled](https://cat1060.github.io/imagining-artist-methods/caillebotte/) | Gustave Caillebotte, 1877, Art Institute of Chicago |
| [A Bar at the Folies-Bergère, rethought](https://cat1060.github.io/imagining-artist-methods/manet/) | Édouard Manet, 1882, The Courtauld, London |
| [The Starry Night, stroke by stroke](https://cat1060.github.io/imagining-artist-methods/van-gogh/) | Vincent van Gogh, 1889, Museum of Modern Art |
| [At the Moulin Rouge, cut and rejoined](https://cat1060.github.io/imagining-artist-methods/toulouse-lautrec/) | Henri de Toulouse-Lautrec, 1892–95, Art Institute of Chicago |
| [The Ten Largest, on the floor](https://cat1060.github.io/imagining-artist-methods/af-klint/) | Hilma af Klint, No. 7, Adulthood, 1907, Hilma af Klint Foundation, Stockholm |

## What's here

- `index.html`: the landing page.
- `assets/series.css` and `assets/series.js`: the layout, type, the works dropdown and the stage slider shared by every guide. Each guide sets its own colours in a `<style>` block at the top of its page.
- `<guide>/index.html` and `<guide>/img/`: one folder per guide, with its stage images, chapter scenes, close-ups and intermediate sources.

## About the images

- The paintings, drawings, cartoon and other intermediate sources are public-domain images, mostly from Wikimedia Commons and museum open-access collections. A few scientific images, such as the Rijksmuseum's calcium map of The Night Watch (CC BY 4.0), are shown under Creative Commons licences. Each image is credited where it appears. The small artist portraits in the works dropdown are public-domain images from Wikimedia Commons; Vermeer's is the young man in his Procuress, possibly a self-portrait, since no certain portrait of him exists.
- The stage reconstructions and chapter scenes are AI-generated with [Prodia](https://prodia.com) (Gemini 3 Pro Image, FLUX Fill and SAM 3 segmentation), using the real painting as a reference so the composition stays in register. They are labelled on the pages and show plausible appearances, not documented ones.

Each chapter opens with a note on its evidence, and every guide ends with its sources. The Vermeer guide was first published on its own at [cat1060/vermeer-layer-by-layer](https://github.com/cat1060/vermeer-layer-by-layer).
