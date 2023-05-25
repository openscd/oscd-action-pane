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
}

const Template: Story<ArgTypes> = ({
  label = 'Label',
  icon = '',
  secondary = false,
  highlighted = false,
  level = 1,
  description = 'some text',
}: ArgTypes) => html`
  <oscd-action-pane
    .label=${label}
    .icon=${icon}
    ?secondary=${secondary}
    ?highlighted=${highlighted}
    .level=${level}
  >
    ${description}
  </oscd-action-pane>
`;

const Template2: Story<ArgTypes> = ({
  label = 'Label',
  icon = '',
  secondary = false,
  highlighted = false,
  level = 1,
  description,
}: ArgTypes) => html`
  <oscd-action-pane
    .label=${label}
    .icon=${icon}
    ?secondary=${secondary}
    ?highlighted=${highlighted}
    .level=${level}
  >
    ${description ? description : `Level: ${level}`}
    <oscd-action-pane
      .label=${label}
      .icon=${icon}
      ?secondary=${!secondary}
      ?highlighted=${!highlighted}
      .level=${level + 1}
    >
      ${description ? description : `Level: ${level + 1}`}
      <oscd-action-pane
        .label=${label}
        .icon=${icon}
        ?secondary=${secondary}
        ?highlighted=${highlighted}
        .level=${level + 2}
      >
        ${description ? description : `Level: ${level + 2}`}
      </oscd-action-pane>
    </oscd-action-pane>
  </oscd-action-pane>
`;

export const JustALabel = Template.bind({});

export const LabelWithIcon = Template.bind({});
LabelWithIcon.args = {
  icon: 'shopping_cart',
};

export const SecondaryColorWhenSelected = Template.bind({});
SecondaryColorWhenSelected.args = {
  icon: 'shopping_cart',
  secondary: true,
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  icon: 'shopping_cart',
  highlighted: true,
};

export const WithMultipleLevels = Template2.bind({});
WithMultipleLevels.args = {
  icon: 'shopping_cart',
  level: 1,
};
