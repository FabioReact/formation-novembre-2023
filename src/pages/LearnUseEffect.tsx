import { useEffect, useState } from "react"

const LearnUseEffect = () => {
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        console.log('Premier rendu de LearnUseEffect - inside useEffect[]')
        return () => {
            console.log('Appelé lors de la destruction (unmount) du composant LearnUseEffect - return useEffect[]')
        }
    }, [])

    useEffect(() => {
        console.log(`Premier rendu et mise à jour de counter de LearnUseEffect - inside useEffect[counter: ${counter}]`)
        return () => {
            console.log('Appelé lors de la destruction (unmount) du composant LearnUseEffect pour une valeur de counter donnée:', counter)
        }
    }, [ counter ])

    return (
        <section>
            <h1>Understand useEffect</h1>
            <button onClick={() => setCounter(c => c + 1)}>Increment {counter}</button>
        </section>
    )
}

export default LearnUseEffect