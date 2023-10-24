# stats-api-docs

Documentation for Brawlhalla esports stats API

You can find the documentation itself at https://docs.brawltools.com

## Project Structure

This project uses the [Astro](https://docs.astro.build) web framework.

Astro looks for `.astro` or `.md` files, though we primarily use `.md` files, in the `src/pages/` directory. Each page is exposed as a route based on its path and file name and should correspond with the route of the API endpoint, unless it's a resource or datatype.

The `src/components/` directory includes any Astro components that are reused in the project.

The `src/layouts/` directory is how the framework for pages is defined. This project only has one layout.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

