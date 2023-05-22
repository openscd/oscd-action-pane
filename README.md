# \<oscd-action-pane>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @openscd/oscd-action-pane
```

## Usage

```html
<script type="module">
  import 'oscd-action-pane';
</script>

<oscd-action-pane></oscd-action-pane>
```

## Linting and formatting

To scan the project for linting and formatting errors, run

```bash
npm run lint
```

To automatically fix linting and formatting errors, run

```bash
npm run format
```

## Testing with Web Test Runner

To execute a single test run:

```bash
npm run test
```

To run the tests in interactive watch mode run:

```bash
npm run test:watch
```

## Demoing with Storybook

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

## `oscd-action-pane.ts`:

### class: `OscdActionPane`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Properties/Attributes

| Name          | Type      | Default     | Description                                                    |
| ------------- | --------- | ----------- | -------------------------------------------------------------- |
| `label`       | `string`  | `undefined` | Caption text, displayed in the header.                         |
| `icon`        | `string`  | `undefined` | Icon name, displays icon as described in `@material/mwc-icon`. |
| `secondary`   | `boolean` | `false`     | Color header with secondary theme color while focus is within. |
| `highlighted` | `boolean` | `false`     | highlight pane with dotted outline item.                       |
| `level`       | `number`  | `1`         | nesting level, default (closest pane ancestor's level) + 1     |

<hr/>

### Exports

| Kind | Name               | Declaration      | Module              | Package |
| ---- | ------------------ | ---------------- | ------------------- | ------- |
| `js` | `oscd-action-pane` | oscd-action-pane | oscd-action-pane.ts |         |

&copy; 2023 Alliander N.V.
