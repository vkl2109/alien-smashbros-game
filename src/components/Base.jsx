import '../css/base.css'
import { LIBRARY } from './Library'
import { BaseCard } from './BaseCard'
import { LibraryCard } from './LibraryCard'
import { useState } from 'react'

export const Base = ({ team, setTeam }) => {

    const [ library, setLibrary ] = useState(LIBRARY)
    const [ staged, setStaged ] = useState()
    const [ input, setInput ] = useState()
    const [ pokemon, setPokemon ] = useState()

    const handleRemove = (member) => {
        setTeam(team => [...team.filter(m => m.id !== member.id)])
        setLibrary(library => [...library, member])
    }

    const handleAdd = (i) => {
        if (staged) {
            setTeam(team => [...team.splice(i, 1, staged)])
        }
    }

    const handleStaged = (member) => {
        setLibrary(library => [...library.filter(m => m.id !== member.id)])
        setStaged(member)
    }
    const handleUnStaged = () => {
        setLibrary([...library, staged])
        setStaged()
    }
    const getPokemon = async (name) => {
        let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        req.json().then(pk => {
            setPokemon(pk);
            const newChar = {
                "id": library.length,
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
            <div className="baseContainer">
                {
                    team.map((member, i) => {
                        if (member) {
                            return (
                                <BaseCard key={member.id} member={member} handleRemove={handleRemove}/>
                            )
                        }
                        else {
                            return (
                                <div className="baseCard">
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
                    <h1>Search for your Next Character!!</h1>
                    {staged ? <h2>Unstage Before Searching!!</h2> : <form onSubmit={(e) => handleSubmit(e)}>
                        <input className="input" type="text" name="name" onChange={(e) => {setInput(e.target.value)}} value={input} placeholder="name"required/>
                        <button className="submit" type="submit">Submit</button>
                    </form>}
                </div>
                <div className="staged">
                    {staged ? (
                                <div className="baseCard">
                                    <h4>{staged.name}</h4>
                                    <img src={staged.img} placeholder="no image found"></img>
                                    <button onClick={()=>handleUnStaged()}className="cardDelete">Remove</button>
                                </div>) : 
                                (<div className="baseCard">
                                    <h4>Stage Empty</h4>
                                </div>)
                    }
                </div>
            </div>
            <div className="libraryContainer">
                {
                    library.map((member, i) => {
                       return (
                            <LibraryCard key={member.id} member={member} handleStaged={handleStaged}/>
                        )
                    })
                }
            </div>
        </div>
    )
}