let products = [
  { id: 1, name: "Teszt 1", price: 3000, quantity: 18, imgsrc: 'https://picsum.photos/250/200' },
  { id: 2, name: "Teszt 2", price: 4000, quantity: 18, imgsrc: 'https://picsum.photos/250/200' },
  { id: 3, name: "Teszt 3", price: 2000, quantity: 38, imgsrc: 'https://picsum.photos/250/200' },
  { id: 4, name: "Teszt 4", price: 1000, quantity: 88, imgsrc: 'https://picsum.photos/250/200' },
  { id: 5, name: "Teszt 5", price: 5000, quantity: 58, imgsrc: 'https://picsum.photos/250/200' },
  { id: 6, name: "Teszt 6", price: 5000, quantity: 68, imgsrc: 'https://picsum.photos/250/200' },
  { id: 7, name: "Teszt 7", price: 2000, quantity: 78, imgsrc: 'https://picsum.photos/250/200' },
  { id: 8, name: "Teszt 8", price: 9000, quantity: 88, imgsrc: 'https://picsum.photos/250/200' },
  { id: 9, name: "Teszt 9", price: 54000, quantity: 98, imgsrc: 'https://picsum.photos/250/200' },
  { id: 10, name: "Teszt 10", price: 30000, quantity: 108, imgsrc: 'https://picsum.photos/250/200' },
  { id: 11, name: "Teszt 11", price: 28000, quantity: 181, imgsrc: 'https://picsum.photos/250/200' },
  { id: 12, name: "Teszt 12", price: 4000, quantity: 182, imgsrc: 'https://picsum.photos/250/200' },
  { id: 13, name: "Teszt 13", price: 11000, quantity: 138, imgsrc: 'https://picsum.photos/250/200' },
  { id: 14, name: "Teszt 14", price: 543000, quantity: 184, imgsrc: 'https://picsum.photos/250/200' },
  { id: 15, name: "Teszt 15", price: 63000, quantity: 184, imgsrc: 'https://picsum.photos/250/200' },
  { id: 16, name: "Teszt 16", price: 3000, quantity: 18, imgsrc: 'https://picsum.photos/250/200' },
  { id: 17, name: "Teszt 17", price: 32000, quantity: 3186, imgsrc: 'https://picsum.photos/250/200' },
  { id: 18, name: "Teszt 18", price: 33000, quantity: 1385, imgsrc: 'https://picsum.photos/250/200' },
  { id: 19, name: "Teszt 19", price: 30000, quantity: 184, imgsrc: 'https://picsum.photos/250/200' },
  { id: 20, name: "Teszt 20", price: 31000, quantity: 138, imgsrc: 'https://picsum.photos/250/200' },
  { id: 21, name: "Teszt 21", price: 3000, quantity: 183, imgsrc: 'https://picsum.photos/250/200' },
  { id: 22, name: "Teszt 22", price: 23000, quantity: 124, imgsrc: 'https://picsum.photos/250/200' },
  { id: 23, name: "Teszt 23", price: 3000, quantity: 146, imgsrc: 'https://picsum.photos/250/200' },
  { id: 24, name: "Teszt 24", price: 33000, quantity: 312, imgsrc: 'https://picsum.photos/250/200' },
  { id: 25, name: "Teszt 25", price: 43000, quantity: 181, imgsrc: 'https://picsum.photos/250/200' },
  { id: 26, name: "Teszt 26", price: 53000, quantity: 1822, imgsrc: 'https://picsum.photos/250/200' },
  { id: 27, name: "Teszt 27", price: 3000, quantity: 183, imgsrc: 'https://picsum.photos/250/200' },
  { id: 28, name: "Teszt 28", price: 73000, quantity: 310, imgsrc: 'https://picsum.photos/250/200' }
]


export function getProducts() {
  let copy = Array.from(products)
  return copy
}