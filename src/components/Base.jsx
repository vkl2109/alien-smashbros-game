import '../css/base.css'
import { BaseCard } from './BaseCard'
import { LibraryCard } from './LibraryCard'
import { useState } from 'react'

export const Base = ({ team, setTeam, library, setLibrary }) => {

    const [ staged, setStaged ] = useState()
    const [ input, setInput ] = useState()
    const [ pokemon, setPokemon ] = useState()

    const handleRemove = (member) => {
        setTeam(team => [...team.map(m => {
            if (!m || m.name === member.name) {
                return null
            }
            return m
        })])
        setLibrary(library => [...library, member])
    }

    const handleAdd = (i) => {
        if (staged) {
            setTeam(team => [...team.map((m, j) => {
                if (!m && j === i) {
                    return {...staged, "id": i}
                }
                return m
            })])
        }
        setStaged()
    }

    const handleStaged = (member) => {
        if (staged) {
            setLibrary(library => [...library, staged])
        }
        setLibrary(library => [...library.filter(m => m.name !== member.name)])
        setStaged(staged => member)
    }
    const handleUnStaged = () => {
        setLibrary(library => [...library, staged])
        setStaged()
    }
    const getPokemon = async (name) => {
        let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        req.json().then(pk => {
            setPokemon(pk);
            const newChar = {
                "id": library.length + 5,
                "name": pk.name,
                "strength": 1,
                "health": 10,
                "range": 1,
                "img": pk.sprites.front_default,
            }
            setStaged(newChar)
            console.log(pk);
        }).catch(error => {
            setPokemon(null);
            console.log(error.message);
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        await getPokemon(input)
        setInput()
    }

    return(
        <div className="totalBase">
            <h1>TEAM</h1>
            <div className="baseContainer">
                {
                    team.map((member, i) => {
                        if (member) {
                            return (
                                <BaseCard key={i} member={member} handleRemove={handleRemove}/>
                            )
                        }
                        else {
                            return (
                                <div key={i} className="stageCard">
                                    <h4>Add Here</h4>
                                    <div className="btnDiv">
                                        <button onClick={() => handleAdd(i)}className="cardUpdate">Add</button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="search">
                <div className="search-left">
                    <h1>Find your Next Character!!</h1>
                    {staged ? <h2>Unstage Before Searching!!</h2> : <form onSubmit={(e) => handleSubmit(e)}>
                        <input className="input" type="text" name="name" onChange={(e) => {setInput(e.target.value)}} value={input} placeholder="name"required/>
                        <button className="submit" type="submit">Submit</button>
                    </form>}
                </div>
                <div className="staged">
                    {staged ? (
                                <BaseCard member={staged} handleRemove={handleUnStaged} />) : 
                                (<div className="stageCard">
                                    <h4>Stage Empty</h4>
                                </div>)
                    }
                </div>
            </div>
            <h1>LIBRARY</h1>
            <div className="libraryContainer">
                {
                    library.map((member, i) => {
                       return (
                            <LibraryCard key={i} member={member} handleStaged={handleStaged}/>
                        )
                    })
                }
            </div>
        </div>
    )
}