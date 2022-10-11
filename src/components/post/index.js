import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import  styled, {css} from 'styled-components'

async function getPost(id) {
    const response = await fetch(`http://localhost:3000/json/post-${id}.json`)
    return await response.json()
} 

const PostDetails = () => {
    const [post, setPost] = useState({})

    const {id} = useParams()
    

    useEffect(() => {
        async function fetchData() {
            const post = await getPost(id)
        
            setPost(post.data)
        }

        fetchData()
    }, [])

    return (
        <Section>
                    <Link to='/'> Voltar para a tela anterior</Link>
                <div>
                    <h2>{post.title}</h2>
                    <Img src={post.image} alt={post.title}/>
                    <p>{post.text}</p>
                </div>
        </Section>
    )
}

const Section = styled.section`
    color: white;
    background-color: black;
    ${props => props.red && css `
        background-color:red;
    ` }
    padding: 50px;
`

const Img = styled.img`
    width: 100%;
`

export { PostDetails }


