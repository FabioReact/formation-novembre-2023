type Props = {
  buttonFunction: (arg: unknown) => void
}

const Form = (props: Props) => {
  const user = {
    name: 'Fabio',
  }
  return (
    <div>
      <p>Titre du formulaire</p>
      <button onClick={() => props.buttonFunction(user)}>Affiche dans la console</button>
    </div>
  )
}

export default Form // Export par defaut
// export { Form } // Export nommé
