import React from "react";
import { Routes, Route } from 'react-router-dom;'
import { Header } from "./Components/Header";
import { PersonalPage } from "./Pages/PersonalPage";
import { CategoriesPage } from "./Pages/CategoriesPage";
import { AuthPage } from './Pages/AuthPage';
import { RegistrationPage } from "./Pages/RegistrationPage";
import { Footer } from "./Components/Footer";
import Items from "./Components/Items";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Куртка красная',
          img: 'jacket-red.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'clothes',
          price: '40.99'
        },
        {
          id: 2,
          title: 'Спальный гарнитур',
          img: 'furniture.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'furniture',
          price: '2999.99'
        },
        {
          id: 3,
          title: 'Ноутбук',
          img: 'netbook.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'netbook',
          price: '899.99'
        },
        {
          id: 4,
          title: 'Косметика',
          img: 'cosmetic.jpg',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'cosmetics',
          price: '99.99'
        },
        {
          id: 5,
          title: 'Телефон',
          img: 'telephone.webp',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
          category: 'phone',
          price: '1249.99'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
  }
  render() {
    return (
      <div className="App">
        <Header orders={this.state.orders} />
        <Routes>
          <Route path="/cab" element={<PersonalPage />} />
          <Route path="/categ" element={<CategoriesPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/reg" element={<RegistrationPage />} />
        </Routes>
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;