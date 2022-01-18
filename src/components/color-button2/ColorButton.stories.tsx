import React from "react";
import type { Story, Meta } from '@storybook/react/types-6-0';
import ColorButton from "./ColorButton";

type Props = React.ComponentProps<typeof ColorButton>;

const componentStoryFormat: Meta = {
  title: 'ColorButton2',
  component: ColorButton,
} as Meta;

const Template: Story<Props> = (args) => <ColorButton {...args} />;

export const Red = Template.bind({});
Red.args = {
  color: "red"
}

export const Blue = Template.bind({});
Blue.args = {
  color: "blue"
}

export default componentStoryFormat;
