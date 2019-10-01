import ItemView from './views/ItemView.svelte';
import imageFile from '../images/blonde.jpg';

export default {
  title: 'Item',
};

export const rounded = () => ({
  Component: ItemView,
  props: {
    name: 'Midway Invader',
    entertainers: [
      {src: imageFile, alt: 'alt'},
      {src: imageFile, alt: 'alt'},
      {src: imageFile, alt: 'alt'},
      {src: imageFile, alt: 'alt'}
    ]
  },
});
