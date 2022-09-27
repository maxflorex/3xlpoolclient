const API = 'http://10.0.2.2:3000/questions'

export const getQuestions = async () => {
    const res = await fetch(API)
    return await res.json()
}

export const deleteQuestion = async (id) => {
    await fetch(`${API}/${id}}`, {
        method: "DELETE"
    })
}