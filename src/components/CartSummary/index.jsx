import React from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'
import Table from '../ui/Table'
import Button from '../ui/Button'


const CartSummary = ({ cartItems }) => {
    return (
        <Col md={4} >
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
                    <Button>
                        <Link to='/shipping'>PLACE ORDER</Link>
                    </Button>

                </Card.Content>



            </Card>
        </Col>
    )
}

export default CartSummary