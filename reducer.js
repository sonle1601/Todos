
const init = {
    todos: [
        {
            title: 'Learn JS',
            completed: false
        },
        {
            title: 'Learn HTML',
            completed: true
        }
    ],
}

const actions = {
    add({ todos }, title) {
        todos.push({ title, completed: false })
    }
}


export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state




}