
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



export default function reducer(state = init, action, args) {
    switch (action) {
        case 'add':
            const [title] = args
            return {
                ...state,
                todos: [...state.todos, {
                    title,
                    completed: false
                }]
            }

        default:
            return state;
    }



}