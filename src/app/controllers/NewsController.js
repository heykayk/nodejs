class NewsController{

    //[GET] /news
    index(req, res){
        res.render("news")
    }

    // [GET] /news/:slug
    show(req, res){
        res.send('demo thử param khi dùng notejs')
    }

}

module.exports = new NewsController;