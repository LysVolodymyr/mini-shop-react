import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'New Air on M2 chip',
          img: '/mac-book-1.jpg',
          desc: '8-Core CPU, 8-Core GPU, 8GB Unified Memory, 256GB SSD Storage',
          category: 'mac-book',
          price: '1199'
        },
        {
          id: 2,
          title: 'New Pro 13" on M2 chip ',
          img: '/mac-book-2.jpg',
          desc: '8-Core CPU, 14-Core GPU, 16GB Unified Memory, 512GB SSD Storage',
          category: 'mac-book',
          price: '1299'
        },
        {
          id: 3,
          title: 'New Pro 16" on M2 chip ',
          img: '/mac-book-2.jpg',
          desc: '8-Core CPU, 14-Core GPU, 16GB Unified Memory, 512GB SSD Storage',
          category: 'mac-book',
          price: '1699'
        },
        {
          id: 4,
          title: 'New 24" iMac',
          img: '/mac-1.jpg',
          desc: '8-Core CPU, 7-Core GPU256GB Storage, 256GB storage, 8GB unified memory, 24-inch 4.5K Retina display²',
          category: 'imac',
          price: '1299'
        },
        {
          id: 5,
          title: 'New 27" iMac',
          img: '/mac-1.jpg',
          desc: '8-Core CPU, 7-Core GPU256GB Storage, 256GB storage, 8GB unified memory, 24-inch 4.5K Retina display²',
          category: 'imac',
          price: '1699'
        },
        {
          id: 6,
          title: 'New Mac mini on M2 chip',
          img: '/mac-mini.jpg',
          desc: '8-Core CPU, 8-Core GPU, 8GB Unified Memory, 256GB SSD Storage',
          category: 'mac-mini',
          price: '699'
        },
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(){
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  chooseCategory(category) {
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)  })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item){
    let isInArray = false
this.state.orders.forEach(el => {
  if(el.id === item.id) 
  isInArray = true
})
  if (!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
