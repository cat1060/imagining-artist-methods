# Imagining Artist Methods

Seven step-by-step reconstructions of how famous paintings were made: what each artist's process would have been, from training and first decisions to the last stroke, using technical studies, documents and the intermediate works that survive.

**Live site:** https://cat1060.github.io/imagining-artist-methods/

| Guide | Work |
|---|---|
| [The School of Athens, day by day](https://cat1060.github.io/imagining-artist-methods/raphael/) | Raphael, fresco, 1509–11, Vatican Palace |
| [Christ Carrying the Cross, layer by layer](https://cat1060.github.io/imagining-artist-methods/el-greco/) | El Greco, about 1580–85, Metropolitan Museum of Art |
| [Girl with a Pearl Earring, layer by layer](https://cat1060.github.io/imagining-artist-methods/vermeer/) | Johannes Vermeer, about 1665, Mauritshuis |
| [Impression, Sunrise, in one sitting](https://cat1060.github.io/imagining-artist-methods/monet/) | Claude Monet, 1872, Musée Marmottan Monet |
| [A Bar at the Folies-Bergère, rethought](https://cat1060.github.io/imagining-artist-methods/manet/) | Édouard Manet, 1882, The Courtauld, London |
| [The Starry Night, stroke by stroke](https://cat1060.github.io/imagining-artist-methods/van-gogh/) | Vincent van Gogh, 1889, Museum of Modern Art |
| [At the Moulin Rouge, cut and rejoined](https://cat1060.github.io/imagining-artist-methods/toulouse-lautrec/) | Henri de Toulouse-Lautrec, 1892–95, Art Institute of Chicago |

## What's here

- `index.html`: the landing page.
- `assets/series.css` and `assets/series.js`: the layout, type and the stage slider shared by every guide. Each guide sets its own colours in a `<style>` block at the top of its page.
- `<guide>/index.html` and `<guide>/img/`: one folder per guide, with its stage images, chapter scenes, close-ups and intermediate sources.

## About the images

- The paintings, drawings, cartoon and other intermediate sources are public-domain images, mostly from Wikimedia Commons and museum open-access collections. Each is credited where it appears.
- The stage reconstructions and chapter scenes are AI-generated with [Prodia](https://prodia.com) (Gemini 3 Pro Image, FLUX Fill and SAM 3 segmentation), using the real painting as a reference so the composition stays in register. They are labelled on the pages and show plausible appearances, not documented ones.

Each chapter opens with a note on its evidence, and every guide ends with its sources. The Vermeer guide was first published on its own at [cat1060/vermeer-layer-by-layer](https://github.com/cat1060/vermeer-layer-by-layer).
