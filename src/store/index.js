import { action, configure, makeAutoObservable, observable } from 'mobx'

configure({
  useProxies: 'never',
})

class Store {
  items
  loading = true
  error = null
  sort
  filter = null
  cartItems = {}
  totalCount = 0
  totalPrice = 0

  constructor() {
    makeAutoObservable(this, {
      addPizza: action.bound,
      deletePizza: action.bound,
      clearCart: action.bound,
      cartItems: observable.deep,
      plusPizza: action.bound,
      minusPizza: action.bound,
    })
  }

  async fetchPizzas() {
    if (!this.sort) return
    this.loading = true
    const { sort, order } = this.sort
    const filter = this.filter === null ? '' : `&category=${this.filter}`
    const res = await fetch(
      `https://618d3226edab980017fd5289.mockapi.io/react-pizza/pizzas?sortBy=${sort}&order=${order}${filter}`
    )
    const pizzas = await res.json()
    console.log(pizzas);
    this.items = pizzas
    this.loading = false
  }

  setSortType(sort = 'rating', order = 'asc') {
    this.sort = {
      sort,
      order,
    }
    this.fetchPizzas()
  }

  setFilter(filter = null) {
    this.filter = filter
    this.fetchPizzas()
  }

  // Cart ==================
  addPizza(id, pizza) {
    if (this.cartItems[id]) this.cartItems[id].count++
    else this.cartItems[id] = { pizza, count: 1 }

    this.totalCount++
    this.totalPrice += pizza.price
  }

  deletePizza(id) {
    if (window.confirm('Действительно хотите удалить пиццу из корзины?')) {
      this.totalCount -= this.cartItems[id].count
      this.totalPrice -= this.cartItems[id].count * this.cartItems[id].pizza.price
      delete this.cartItems[id]
    }
  }

  clearCart() {
    if (window.confirm('Действительно хотите очистить корзину?')) {
      this.totalCount = 0
      this.totalPrice = 0
      this.cartItems = {}
    }
  }

  plusPizza(id) {
    this.cartItems[id].count++
    this.totalCount++
    this.totalPrice += this.cartItems[id].pizza.price
  }

  minusPizza(id) {
    this.cartItems[id].count--
    this.totalCount--
    this.totalPrice -= this.cartItems[id].pizza.price
    if (this.cartItems[id].count === 0) delete this.cartItems[id]
  }
}

export default new Store()
