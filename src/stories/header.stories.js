import HeaderView from './views/HeaderView.svelte';

export default {
  title: 'Header',
};

export const rounded = () => ({
  Component: HeaderView,
  props: {
    rounded: true,
    message: 'Rounded text',
  },
});
