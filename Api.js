
const API = 'http://10.0.2.2:3000/questions'


// GET ITEMS
export const getQuestions = async () => {
    const res = await fetch(API)
    return await res.json()
}

// GET SINGLE ITEM
export const getQuestion = async (qId) => {
    const res = await fetch(`${API}/${qId}`)
    return await res.json()
}

// DELETE ITEM
export const deleteQuestion = async (id) => {
    await fetch(`${API}/${id}}`, {
        method: "DELETE"
    })
}

// SAVE ITEM
export const saveQuestion = async (newQ) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: { accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(newQ)
    })
    return await res.json()
}

// UPDATE ITEM
export const updateQuestion = async (id, newQ) => {
    res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(newQ)
    })
    return await res.json()
}


// - - - - - - - - - - - - - - - - - - - - - - 


export const getSong = async (artist, song) => {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '696fbe228fmshe6b3d7bf1bd843fp12903bjsnac987cfb3696',
            'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com'
        }
    };
    res = await fetch(`https://theaudiodb.p.rapidapi.com/searchtrack.php?s=${artist}&t=${song}`, options)
    
    return await res.json()
}
