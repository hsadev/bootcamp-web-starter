import React, {useState} from 'react'
import {StyledForm, DietHealth, DietHealthContainer, Container, LoginRegisterButton} from '../../styles'
import InputBlock from '../../components/LoginRegister/InputBlock'
import DietHealthBlock from '../../components/LoginRegister/DietHealthBlock'

// multiple dietary restrictions!!
// diets: “balanced”, “high-protein”, “high-fiber”, “low-fat”, “low-carb”, “low-sodium”
// health: dairy-free, egg-free, fish-free, gluten-free, kosher, peanut-free, shellfish-free, soy-free, tree-nut-free, vegan, vegetarian

const Register = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [confpass, setConfpass] = useState("")
    const buttonEnabled = email.length > 0 && pass.length > 0 && confpass.length > 0

    const [diet, setDiet] = useState({
        "balanced": false,
        "high-protein": false,
        "high-fiber": false,
        "low-fat": false,
        "low-carb": false,
        "low-sodium": false,
    })
    const [health, setHealth] = useState({
        "dairy-free": false,
        "egg-free": false,
        "gluten-free": false,
        "kosher": false,
        "peanut-free": false,
        "pescatarian": false,
        "shellfish-free": false,
        "soy-free": false,
        "tree-nut-free": false,
        "vegan": false,
        "vegetarian": false,
    })

    const handleDietCheck = ({ target }) => {
        setDiet(s => ({ ...s, [target.name]: !s[target.name] }));}
    
    const handleHealthCheck = ({ target }) => {
        setHealth(s => ({ ...s, [target.name]: !s[target.name] }));}

    const handleSubmit = (event) => {
        event.preventDefault()
        if (pass !== confpass) {
            alert("passwords don't match!")
        }
    }

    return (
        <Container>
        <StyledForm onSubmit={handleSubmit} maxheight="730px">
            <h1>Welcome to Recipe Central</h1>
            <InputBlock 
                label="Email" 
                type="text" 
                name="email" 
                onChangeF={(e) => setEmail(e.target.value)} 
                value={email} 
            />
            <InputBlock 
                label="Password" 
                type="password" 
                name="password" 
                onChangeF={(e) => setPass(e.target.value)} 
                value={pass} 
            />
            <InputBlock 
                label="Confirm Password" 
                type="password" 
                name="confpass" 
                onChangeF={(e) => setConfpass(e.target.value)} 
                value={confpass} 
            />
            <DietHealthContainer>
                <DietHealth>
                    <h3>Dietary concerns:</h3>
                    {Object.keys(diet).map(key => (
                        <DietHealthBlock
                            label={key}
                            handleCheck={handleDietCheck}
                            name={key}
                            checked={diet[key]}
                        />
                    ))}
                </DietHealth>
                <DietHealth>
                    <h3>Health concerns:</h3>
                    {Object.keys(health).map(key => (
                        <DietHealthBlock
                            label={key}
                            handleCheck={handleHealthCheck}
                            name={key}
                            checked={diet[key]}
                        />
                    ))}
                </DietHealth>
            </DietHealthContainer>
            <LoginRegisterButton disabled={ !buttonEnabled } onClick={ handleSubmit }>Register</LoginRegisterButton>
        </StyledForm>
        </Container>
    )
}

export default Register