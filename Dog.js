class Tindog {
    constructor(data) {
        Object.assign(this, data)
    }
    
     setMatchStatus(bool) {
        this.hasBeenLiked = true;
        this.hasBeenSwiped = true;
    }
    
    getDogHtml() {
        const { name, avatar, age, bio } = this;
        return `
        <div class="feature-suggestion">
        <img class="dog-img" src="${avatar}">
        <div class="dog-info">
            <h4> ${name}, ${age} </h4>
            <div class="dog-bio">
                ${bio}
            </div>
        </div>     
    </div>`
    }

}
export default Tindog;









