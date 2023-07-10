# \<oscd-action-pane>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation

```bash
npm i @openscd/oscd-action-pane
```

## Usage

```html
<script type="module">
  import '@openscd/oscd-action-pane';
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

### Icon font

Material Icons are being used for the icons. This font needs to be added in the html first.
You can add it like so:

```html
<link
  href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
  rel="stylesheet"
/>
```

## Local Demo with `web-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`


## `src/oscd-action-pane.ts`:

### class: `OscdActionPane`, `oscd-action-pane`

#### Superclass

| Name         | Module | Package |
| ------------ | ------ | ------- |
| `LitElement` |        | lit     |

#### Fields

| Name          | Privacy | Type                  | Default | Description                                                   | Inherited From |
| ------------- | ------- | --------------------- | ------- | ------------------------------------------------------------- | -------------- |
| `label`       |         | `string \| undefined` |         | caption text, displayed in the header                         |                |
| `icon`        |         | `string \| undefined` |         | icon name, displayed unless the "icon" slot is filled         |                |
| `secondary`   |         | `boolean`             | `false` | color header with secondary theme color while focus is within |                |
| `highlighted` |         | `boolean`             | `false` | highlight pane with dotted outline                            |                |
| `level`       |         | `number`              | `1`     | nesting level, default (closest pane ancestor's level) + 1    |                |

#### CSS Properties

| Name                                  | Default                   | Description                        |
| ------------------------------------- | ------------------------- | ---------------------------------- |
| `--oscd-action-icon-theme-primary`    | `--oscd-theme-primary`    | Color for border on even levels.   |
| `--oscd-action-icon-theme-on-primary` | `--oscd-theme-on-primary` | Pane color for the uneven levels.  |
| `--oscd-action-icon-theme-secondary`  | `--oscd-theme-secondary`  | Color for border on uneven levels. |
| `--oscd-action-pane-theme-surface`    | `--oscd-theme-surface`    | Pane color for the even levels.    |
| `--oscd-action-icon-theme-on-surface` | `--oscd-theme-on-surface` | Icon and label color.              |
| `--oscd-action-icon-theme-font`       | `--oscd-theme-font`       | Font for label.                    |

#### Slots

| Name     | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| `action` | May contain up to eight icon buttons.                                    |
| `icon`   | If filled overrides the icon property.                                   |
|          | The default slot will be rendered into the pane body in a single column. |

<hr/>

### Exports

| Kind | Name             | Declaration    | Module                  | Package |
| ---- | ---------------- | -------------- | ----------------------- | ------- |
| `js` | `OscdActionPane` | OscdActionPane | src/oscd-action-pane.ts |         |

## `src/OscdActionPane.ts`:

### Exports

| Kind                        | Name               | Declaration    | Module                   | Package |
| --------------------------- | ------------------ | -------------- | ------------------------ | ------- |
| `custom-element-definition` | `oscd-action-pane` | OscdActionPane | /src/oscd-action-pane.js |         |
| `js`                        | `OscdActionPane`   | OscdActionPane | src/OscdActionPane.ts    |         |



&copy; 2023 Alliander N.V.
