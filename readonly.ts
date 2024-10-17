//read only

const Name : string = "amin"
interface Iblog {
    readonly title: string;
     readonly text: string;
}

function newBlog ( blog : Iblog) : Iblog {
    return blog
}

const blog234 = newBlog({title: "titleblg" , text : "asdf"});

console.log(blog234)