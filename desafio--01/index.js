class ProductManager {
  constructor() {
    this.products = []; // 1. array de productos que se van a agregar
  }

  // 2. método para agregar productos
  addProduct(title, description, price, thumbnail, code, stock) {
    if ((!title || !description || !price || !thumbnail || !code, !stock)) {
      return console.log("error: All fields are required");
    } else if (this.products.some((product) => product.code === code.trim())) {
      return console.log("error: Product code already exists");
    } else {
      const product = {
        id: this.products.length
          ? this.products[this.products.length - 1].code + 1
          : 1,
        title: title.trim(),
        description: description.trim(),
        price: price,
        thumbnail: thumbnail.trim(),
        code: code.trim(),
        stock: stock,
      };
      this.products.push(product);
    }
  }

  // 3. método para obtener productos e imprimirlos en consola
  getProducts() {
    return this.products;
  }

  // 4. método para obtener un producto por su id
  getProductById(id) {
    return (
      this.products.find((product) => product.id == id) || {
        error: "Not Found",
      }
    );
  }
}

// TESTING

const productManager = new ProductManager();
console.log("Array vacío", productManager.getProducts()); // devuelve array vacío

productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);

console.log("Primer producto agregado", productManager.getProducts()); // devuelve array con el producto agregado

productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
); // se agrega un producto con el mismo código, devuelve error

console.log("Busqueda de producto id 1", productManager.getProductById(1)); // devuelve el producto con id 1
console.log(
  "Busqueda de producto id 1000",
  productManager.getProductById(1000)
); // devuelve error
