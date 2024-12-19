const renderHome = (req,res) =>{
    res.render('index')
}

let datas= []
const renderBlog = (req, res) =>{
    res.render('blog', {data: datas})
}

const renderAddBlog = (req, res) =>{
    res.render('add-blog')
}

const getDetailBlogId = (req, res)=>{
    const index = req.params.index
    
    res.render('detail-blog', {data: datas[index]})
}

const getBlogId = (req, res)=>{
    const index = req.params.index
    
    res.render('edit-blog', {data:datas[index], index})
}

const editBlogWithId = (req, res)=>{
    const {index} = req.params
    const img  = req.query.image
    
    let {title, content, images} = req.body

    if(images == ''){
        images = img
    }
    
    const fields = {
        author: "Papoy", title, content, images, postedAt: new Date()
    }
    datas[index] = fields
    res.redirect('/blog')
}

const deleteBlog = (req, res)=>{
    const {index} = req.params

      datas.splice(index, 1)
    
      res.redirect('/blog')
}

const addBlog = (req, res)=>{
    const {title, content, images} = req.body

    for(let i = 0; i < datas.length; i++){
        if(datas[i].title.includes(title)){
            return res.render('add-blog', {data: datas, message: 'Title Tidak Boleh sama'})
        }
    }

    const fields = {
        author: "Papoy", title, content, images, postedAt: new Date()
    }
    
    datas.push(fields)
    
    res.render('blog', {data: datas})
}

let arr = []

const renderMyproject = (req, res) =>{
    let getlocalStorage = JSON.parse(localStorage.getItem("project") || "[]");
    if (arr == '') {
        arr.push(...getlocalStorage);
    }
    res.render('task/MyProject',{data: getlocalStorage} )
}

const postMyproject = (req, res) =>{
    const {name,startDate, endDate, description,images} = req.body
    const {nodejs, reactjs, nextjs, typescript} = req.body
    
    let checkBox = []
    if(nodejs){
        checkBox.push(nodejs)
    }
    if(reactjs){
        checkBox.push(reactjs)
    }
    if(nextjs){
        checkBox.push(nextjs)
    }
    if(typescript){
        checkBox.push(typescript)
    }

    let data = {
        author: "Papoy",
        projectName:name,
        startDate: startDate,
        endDate: endDate,
        description: description,
        checkBox: checkBox,
        images: images
    }
    // let getlocalStorage = JSON.parse(localStorage.getItem("project") || "[]");
    arr.push(data)
    localStorage.setItem("project", JSON.stringify(arr));
    res.render('task/MyProject',{data: arr} )
}

const deleteMyProject = (req, res)=>{
    const {index} = req.params
    let getlocalStorage = JSON.parse(localStorage.getItem("project") || "[]");

    getlocalStorage.splice(index,1);
    localStorage.setItem('project', JSON.stringify(getlocalStorage));
    res.redirect('/MyProject')
}

const renderDetailProject = (req, res) =>{
    const index = req.params.index
    let getlocalStorage = JSON.parse(localStorage.getItem("project") || "[]");
    let cb = getlocalStorage[index].checkBox

    let arrImg =[]
    for (let i = 0; i < cb.length; i++) {
      if (cb[i].includes("ReactJs")) {
        arrImg.push('atom.png');
      } else if (cb[i].includes("NodeJs")) {
        arrImg.push('nodejs.png');
      } else if (cb[i].includes("NextJs")) {
        arrImg.push('nextjs.png');
      } else if (cb[i].includes("TypeScript")) {
        arrImg.push('typescript.png');
      }
    }
    
   res.render('task/project-detail', {data: getlocalStorage[index], img: arrImg})
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

module.exports = {renderHome,
     renderBlog,
     renderAddBlog,
     getDetailBlogId,
     getBlogId,
     editBlogWithId,
     deleteBlog,
     renderMyproject,
     postMyproject,
     deleteMyProject,
     renderDetailProject,
     contact,
     testimonial,
     notfound,
     addBlog
    }