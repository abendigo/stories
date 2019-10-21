import ItemView from './views/ItemView.svelte';
import imageFile from '../images/blonde.jpg';
import clubs from '../ontario.json';

export default {
  title: 'Item',
};

export const rounded = () => ({
  Component: ItemView,
  props: { ...clubs[0]
    // name: 'Midway Invader',
    // distance
    // entertainers: [
    //   {src: imageFile, alt: 'alt'},
    //   {src: imageFile, alt: 'alt'},
    //   {src: imageFile, alt: 'alt'},
    //   {src: imageFile, alt: 'alt'}
    // ]
  },
});
