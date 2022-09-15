const _products = [
  { id: 1, title: "AirPods（第3世代）", price: 23800, inventory: 2 },
  { id: 2, title: "11インチiPad Pro", price: 94800, inventory: 5 },
  { id: 3, title: "14インチMacBook Pro", price: 239800, inventory: 3 },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(_products), 100);
  },
};
