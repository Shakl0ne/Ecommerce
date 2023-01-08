import React, {useEffect, useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'

const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}

function SearchBox() {


    const navigate = useNavigate()
    const path = useLocation().pathname

    let query = useQuery().get("keyword")
    query = query ? query : ''

    const [keyword, setKeyword] = useState(query)

    useEffect(() => {
        setKeyword(query)
    }, [query])

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        } else {
            navigate(path)
        }
    }
    return (
        <Form onSubmit={submitHandler} className='d-flex'>
            <Form.Control
                type='text'
                name='q'
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5 p-2'
            ></Form.Control>

            <Button
                type='submit'
                variant='outline-success'
                className='p-2 mx-md-1'
            >Submit
            </Button>
        </Form>
    )
}

export default SearchBox