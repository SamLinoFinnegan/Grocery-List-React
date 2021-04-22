import React from "react";
import Header from "./components/Header";
import GroceryList from "./components/GroceryList";
import ShoppingCart from "./components/ShoppingCart";


class Container extends React.Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                { id: 1, title: "Ham", added: false, amount: 0 },
                { id: 2, title: "Cheese", added: false, amount: 0 },
                { id: 3, title: "Bread", added: false, amount: 0 },
                { id: 4, title: "Deoderant", added: false, amount: 0 },
                { id: 5, title: "Beer", added: false, amount: 0 }
            ],
            shoppingListItems: [
            ],
        }
    }
    // sumAmount = () => {
    //     const totalAmount = this.state.groceryItems.map(item => {
    //         item.amount.reduce((amount, sumAmount) => {
    //             return amount + sumAmount
    //         }, 0)
    //         return totalAmount
    //     })
    // }
    handleClick = id => {
        this.setState(prevState => {
            const newList = prevState.groceryItems.map(item => {
                if (item.id === id) { item.added = true }
                if (item.id === id) { item.amount++ }
                return item
            })
            const newShoppingList = []
            prevState.groceryItems.forEach(item => {
                if (item.added === true) {
                    newShoppingList.push(item)
                }
            })

            return {
                groceryItems: newList,
                shoppingListItems: newShoppingList
            }
        })
    }

    emptyCart = () => {
        this.setState(prevState => {
            prevState.groceryItems.forEach(item => {
                return {
                    res: item.added = false,
                    amount: item.amount = 0
                }
            })
            return {

                shoppingListItems: []
            }
        })
    }


    addProduct = event => {
        const product = event.target.previousSibling.value;
        if (product !== "" && product !== null) {
            this.setState(prevState => {
                const productID = prevState.groceryItems.length + 1;
                const productObject = { id: productID, title: product, amount: 0 };
                const updatedGroceryList = [productObject, ...prevState.groceryItems];
                return {
                    groceryItems: updatedGroceryList,
                    shoppingListItems: prevState.shoppingListItems,
                }
            })
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <GroceryList
                        list={this.state.groceryItems}
                        handleClick={this.handleClick}
                        addProduct={this.addProduct}
                    />
                    <ShoppingCart
                        list={this.state.shoppingListItems}
                        emptyCart={this.emptyCart}
                        readonly={true}
                    />
                </div>
            </div>
        )
    }
}

export default Container;