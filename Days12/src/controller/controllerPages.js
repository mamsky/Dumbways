const renderHome = (req,res) =>{
    res.render('index')
}

let datas= []
const renderBlog = (req, res) =>{
    res.render('blog', {data: datas})
}
const addBlog = (req, res)=>{
    const {title, content, images} = req.body

    const fields = {
        author: "Papoy", title, content, images, postedAt: new Date()
    }
    
    datas.push(fields)

    console.log(datas);
    
    res.render('blog', {data: datas})
}

const renderMyproject = (req, res) =>{
    res.render('task/MyProject')
}

const renderDetailProject = (req, res) =>{
    res.render('task/project-detail')
}
const contact = (req, res) =>{
    res.render('contact')
}
const testimonial = (req, res) =>{
    res.render('testimonial')
}
const notfound = (req, res) =>{
    res.render('notfound')
}

module.exports = {renderHome, renderBlog, renderMyproject, renderDetailProject, contact, testimonial, notfound, addBlog}