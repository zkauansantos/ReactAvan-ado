import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, {css} from 'styled-components'

async function getPosts() {
    const response = await fetch('http://localhost:3000/json/posts.json')
    return await response.json()
}

const PostsList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const posts = await getPosts()
            setPosts(posts.data)
        }

        fetchData()
    }, [])

    return (
        <Section>
            {posts.map((post, index) => 
                <div key={index}>
                    <Link to={`/post/${post.id}`}>
                        <h2>{post.title}</h2> 
                        <img src={post.image} alt="" />
                    </Link> 
                </div>
            )}
        </Section>
    )
}

const Section = styled.section`
    background-color: black;
    ${props => props.red && css `
        background-color:red;
    `}
    padding: 50px;
`
export { PostsList }