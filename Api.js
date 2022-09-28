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