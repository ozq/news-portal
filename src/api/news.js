const MOCK_DATA = [
  { picture: 'https://images.unsplash.com/photo-1640622307911-ee5870412ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', title: 'News Title Lorem Ipsum Dolor Sit Amet', published_at: '03.12.2021', source: 'CNN Indonesia', description: 'Nisi, sagittis aliquet sit rutrum. Nunc, id vestibulum quam ornare adipiscing. Pellentesque sed turpis nunc gravida pharetra, sit nec vivamus pharetra. Velit, dui, egestas nisi, elementum mattis mauris, magnis. Massa tortor nibh nulla condimentum imperdiet scelerisque' },
];

const MOCK_TIMEOUT = 2000;

export default {
  fetch() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_DATA);
      }, MOCK_TIMEOUT);
    });
  },
};
