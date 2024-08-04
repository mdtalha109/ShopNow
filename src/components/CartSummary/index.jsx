import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'
import Table from '../ui/Table'
import Button from '../ui/Button'

import styles from './index.module.css'

const CartSummary = ({ cartItems }) => {
    return (
        <div className={styles.cart_summary}>
            <Card>
                <Card.Header>
                    Price Summary
                </Card.Header>

                <Card.Content>
                    <Table>
                        <Table.Row>
                            <Table.Cell> Total prce:</Table.Cell>
                            <Table.Cell> ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell> Dilevery Charge:</Table.Cell>
                            <Table.Cell> 100Rs </Table.Cell>
                        </Table.Row>

                    </Table>
                    <Button isFullWidth={true}>
                        <Link to='/shipping'><span className={styles.order_btn}>Place Order</span></Link>
                    </Button>
                </Card.Content>
            </Card>
            </div>
    )
}

export default CartSummary