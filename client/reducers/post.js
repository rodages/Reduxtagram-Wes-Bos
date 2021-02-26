//a reducer takes two things
//1.action (info of what happened)
//2.copy of current state

function posts(state = [], action) {
    console.log(state, action)
    return state
}

export default posts