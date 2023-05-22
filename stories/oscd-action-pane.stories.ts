import { html, TemplateResult } from 'lit-element';
import '@material/mwc-icon';
import '../src/oscd-action-pane.js';

export default {
  title: 'OscdActionPane',
  component: 'oscd-action-pane',
  argTypes: {
    label: { control: 'text' },
    icon: { control: 'text' },
    secondary: { control: 'boolean' },
    highlighted: { control: 'boolean' },
    level: { control: 'number' },
    description: { control: 'text' },
    label_2: { control: 'text' },
    icon_2: { control: 'text' },
    secondary_2: { control: 'boolean' },
    highlighted_2: { control: 'boolean' },
    level_2: { control: 'number' },
    description_2: { control: 'text' },
    label_3: { control: 'text' },
    icon_3: { control: 'text' },
    secondary_3: { control: 'boolean' },
    highlighted_3: { control: 'boolean' },
    level_3: { control: 'number' },
    description_3: { control: 'text' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label?: string;
  icon?: string;
  secondary: boolean;
  highlighted: boolean;
  level: number;
  description: string;
  label_2?: string;
  icon_2?: string;
  secondary_2: boolean;
  highlighted_2: boolean;
  level_2: number;
  description_2: string;
  label_3?: string;
  icon_3?: string;
  secondary_3: boolean;
  highlighted_3: boolean;
  level_3: number;
  description_3: string;
}

const Template: Story<ArgTypes> = ({
  label = 'First action-pane',
  icon = 'shopping_cart',
  secondary = false,
  highlighted = false,
  level = 1,
  description = 'some text',
  label_2 = 'Second action-pane',
  icon_2 = 'pin',
  secondary_2 = true,
  highlighted_2 = true,
  level_2 = 2,
  description_2 = 'some other text',
  label_3 = 'Third action-pane',
  icon_3 = 'key',
  secondary_3 = false,
  highlighted_3 = false,
  level_3 = 3,
  description_3 = 'again some other text',
}: ArgTypes) => html`
  <link
    href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
    rel="stylesheet"
  />
  <style>
    body {
      --mdc-theme-on-surface: #657b83;
      --mdc-theme-surface: #fdf6e3;
      --mdc-theme-primary: #2aa198;
      --mdc-theme-on-primary: #eee8d5;
      --mdc-theme-secondary: #6c71c4;
    }
  </style>
  <oscd-action-pane
    .label=${label}
    .icon=${icon}
    .secondary=${secondary}
    .highlighted=${highlighted}
    .level=${level}
  >
    ${description}
  </oscd-action-pane>
  <oscd-action-pane
    .label=${label_2}
    .icon=${icon_2}
    .secondary=${secondary_2}
    .highlighted=${highlighted_2}
    .level=${level_2}
  >
    ${description_2}
  </oscd-action-pane>
  <oscd-action-pane
    .label=${label_3}
    .icon=${icon_3}
    .secondary=${secondary_3}
    .highlighted=${highlighted_3}
    .level=${level_3 + 1}
  >
    ${description_3}
  </oscd-action-pane>
`;

export const Regular = Template.bind({});
