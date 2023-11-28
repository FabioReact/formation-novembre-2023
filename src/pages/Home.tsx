import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Heroes Arena</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id omnis provident itaque vero ipsum!</p>
            <button onClick={() => navigate('/battle')}>Battle</button>
        </>
    )
}

export default Home