import AppView from './views/AppView.svelte';
import imageFile from '../images/blonde.jpg';
import clubs from '../ontario.json';

export default {
  title: 'App',
};

export const rounded = () => ({
  Component: AppView,
  props: { clubs
    // clubs: [
    //   {
    //     name: 'Midway Invader',
    //     entertainers: [
    //       {src: imageFile, alt: 'alt'},
    //       {src: imageFile, alt: 'alt'},
    //       {src: imageFile, alt: 'alt'},
    //       {src: imageFile, alt: 'alt'}
    //     ]
    //   },
    //   {
    //     name: 'New Locomotion',
    //     entertainers: [
    //       {src: imageFile, alt: 'alt'},
    //       {src: imageFile, alt: 'alt'},
    //       {src: imageFile, alt: 'alt'},
    //       {src: imageFile, alt: 'alt'}
    //     ]
    //   },
    //   {
    //     name: 'Mathesons',
    //     entertainers: [
    //       {src: imageFile, alt: 'alt'},
    //       {src: imageFile, alt: 'alt'},
    //       {src: imageFile, alt: 'alt'},
    //       {src: imageFile, alt: 'alt'}
    //     ]
    //   },
    // ]
  },
});
