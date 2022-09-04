import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';
import axios from 'axios';

const ProductScreen = ({ match }) => {
    const [prod, setProd] = useState([]);
    useEffect(() => {
        async function fetchProd() {
            const { data } = await axios.get(`/api/products/${match.params.id}`)
            setProd(data)
        }
        fetchProd()
    },[])
/*    const { id } = useParams();
    const product = products.find((p) => p._id === id);*/
    return <div>
{/*        <Link to='/' className='btn btn-light my-3 rounded'>Back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
        </Row>*/}
    </div>;
};

export default ProductScreen;