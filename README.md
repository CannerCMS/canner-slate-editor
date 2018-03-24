<div align="center">
  <img alt="slate-markdown" src="https://cloud.githubusercontent.com/assets/7525670/26826026/a457bb8a-4ab7-11e7-8db4-bfe3ac67a726.png" />
  <br />
  <br />
  <p>Add live markdown preview to your Slate editor.</p>
  <br />
  <p>Demo: <a href="https://slate-markdown.spectrum.chat">slate-markdown.spectrum.chat</a></p>
</div>

## Installation

[![Greenkeeper badge](https://badges.greenkeeper.io/Canner/slate-markdown.svg?token=8d701143863d7b8431a3893c29e93ab89e6c9fde33a06a4b73b3971971740b37&ts=1521899598949)](https://greenkeeper.io/)

```sh
npm install slate-markdown
```

## Usage

```javascript
import { Editor } from 'slate';
import MarkdownPlugin from 'slate-markdown';

const markdown = MarkdownPlugin();

<Editor
  plugins={[markdown]}
/>
```

## Options

### `sizes`

*(default: `['2.441em', '1.953em', '1.563em', '1.25em', '1em']`)*

A list of sizes to use for the headings, the index + 1 is used for the level

```javascript
const markdown = MarkdownPlugin({
  // This is the default:
  sizes: ['2.441em', '1.953em', '1.563em', '1.25em', '1em'],
  //       ^ h1       ^ h2       ^ h3       ^ h4      ^ h5
})
```

### `classnames`

An object containing additional classnames to attach to the rendered components. Useful to adapt the styling.

```javascript
const markdown = MarkdownPlugin({
  classnames: {
    // When a title is rendered it will now have a .custom-title className
    title: 'custom-title',
  }
})
```

Possible keys are for the object are:

```javascript
'title' | 'bold' | 'italic' | 'punctuation' | 'code' | 'list' | 'hr' | 'url'
```

### `strict`

*(default: `true`)*

This plugin uses PrismJS for highlighting the markdown. By default the Prism markdown grammar extends the markup grammar, and thusly supports things like `<tag>`s, `<script>`s etc.

This option disables the inherited HTML grammar, only allowing actual markdown to pass through. Set this to `false` if you want to highlight HTML within the markdown.

## Roadmap

This plugin is fairly complete (± small bugs) and used in production by us at [Spectrum](https://spectrum.chat). Nevertheless, there's some features we are looking to implement in the future:

- [ ] GitHub-style codeblocks with triple backticks

If you want to help out with any of these, please feel free to submit PRs!

## Development

Development of this plugin is done via the `example/` app. Here's how to get the plugin building locally:

```sh
# Download the repo
git clone https://github.com/withspectrum/slate-markdown
# Install the dependencies of the package
cd slate-markdown
npm install
# Start the build process with a watcher
npm run build -- --watch # (notice the extra --, you need those!)
```

To see your local version of the plugin locally open another terminal tab and run these commands:

```sh
# Get into the example folder (this is assuming you're already in the slate-markdown folder)
cd example
# Install the example dependencies
npm install
# Run the example locally, this should open a browser tab
npm start
# If this doesn't open a browser tab open http://localhost:3000 manually
```

Now whenever you change the package the example app will reload automatically with the new code.

## License

Licensed under the MIT License, Copyright ©️ 2017 Maximilian Stoiber. See [LICENSE.md](LICENSE.md) for more information.

Most of this code was taken directly from the Slate examples, thanks to [@ianstormtaylor](https://github.com/ianstormtaylor). [Source for the example copied here](https://github.com/ianstormtaylor/slate/blob/460498b5ddfcecee7439eafe4f4d31cacde69f41/examples/markdown-preview/index.js).
